import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";
import { TYPE_PROMPTS } from "@/lib/prompts";
import sharp from "sharp";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export const maxDuration = 120;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { photoBase64, resultType } = await request.json();

    if (!photoBase64 || !resultType) {
      return NextResponse.json({ error: "Missing params" }, { status: 400 });
    }

    const prompt = TYPE_PROMPTS[resultType];
    if (!prompt) {
      return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }

    const base64Data = photoBase64.replace(/^data:image\/\w+;base64,/, "");
    const inputBuffer = Buffer.from(base64Data, "base64");

    // Normalize to a portrait PNG for gpt-image-1
    const pngBuffer = await sharp(inputBuffer)
      .resize(1024, 1536, { fit: "cover", position: "top" })
      .png()
      .toBuffer();

    const response = await openai.images.edit({
      model: "gpt-image-1",
      image: new File([pngBuffer.buffer as ArrayBuffer], "photo.png", { type: "image/png" }),
      prompt,
      n: 1,
      size: "1024x1536",
    });

    const imageData = response.data?.[0];

    if (imageData?.b64_json) {
      return NextResponse.json({
        transformedImageUrl: `data:image/png;base64,${imageData.b64_json}`,
      });
    }

    if (imageData?.url) {
      // Fetch the URL server-side and return as base64 to avoid CORS issues in html2canvas
      const imgRes = await fetch(imageData.url);
      const imgBuffer = Buffer.from(await imgRes.arrayBuffer());
      return NextResponse.json({
        transformedImageUrl: `data:image/png;base64,${imgBuffer.toString("base64")}`,
      });
    }

    throw new Error("No image in response");
  } catch (error) {
    console.error("OpenAI error:", error);
    const message = error instanceof Error ? error.message : "Image generation failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
