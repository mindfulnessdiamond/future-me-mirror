import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { ResultType } from "@/lib/types";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const client = new Anthropic();

export async function POST(req: NextRequest) {
  const { userName, resultType } = (await req.json()) as {
    userName: string;
    resultType: ResultType;
  };

  const message = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 256,
    system: `あなたは高級ジュエリーブランド「Mindfulness Diamond」のコピーライターです。
診断タイプをもとに、壁紙カードに入れる短いコピーを日本語で生成してください。

出力はJSON形式のみ。説明文不要。

{
  "desc": "2行の詩的なコピー（最大30文字×2行、改行は\\nで）",
  "attitude": "英語のattitudeフレーズ（例: I choose beauty.）",
  "diamond": "このタイプに合うダイヤのシェイプ名（英語）"
}

タイプ別の方向性：
- CREATOR: 美、創造、物語、光
- ANALYST: 洞察、本質、静けさ、知性
- EMPATH: 愛、温かさ、繋がり、共鳴
- PIONEER: 自由、先駆、革命、直感
- ARCHITECT: 秩序、完成、精度、構造`,
    messages: [
      {
        role: "user",
        content: `ユーザー名: ${userName}\n診断タイプ: ${resultType}`,
      },
    ],
  });

  const text = message.content[0].type === "text" ? message.content[0].text : "";
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    return NextResponse.json({ error: "Parse error" }, { status: 500 });
  }

  const parsed = JSON.parse(jsonMatch[0]);
  return NextResponse.json(parsed);
}
