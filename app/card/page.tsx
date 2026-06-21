import { redirect } from "next/navigation";
import { ResultType, RESULT_CONTENT } from "@/lib/types";
import SaveButton from "../result/SaveButton";

interface Props {
  searchParams: Promise<{ type?: string }>;
}

const ALL_TYPES: ResultType[] = [
  "VISIONARY","MUSE","QUEEN","EXPLORER","CREATOR",
  "GARDEN","LIGHT","POET","CURATOR","BLOOM","DREAMER","FREE_SPIRIT"
];

export default async function CardPage({ searchParams }: Props) {
  const params = await searchParams;
  const type = params.type as ResultType | undefined;

  if (!type || !ALL_TYPES.includes(type)) {
    redirect("/");
  }

  const content = RESULT_CONTENT[type];
  const descLines = content.description.split("\n");

  return (
    <main style={{ background: "#FAFAF8", minHeight: "100svh", padding: "4rem 1.5rem 2rem" }}>
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>

        {/* Type reveal */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{
            fontFamily: "Georgia, serif",
            fontSize: "0.6rem",
            letterSpacing: "0.4em",
            color: "#96803F",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}>あなたの中に眠る未来の姿は</p>
          <h1 style={{
            fontFamily: "Georgia, serif",
            fontSize: "2.2rem",
            fontWeight: 400,
            letterSpacing: "0.12em",
            color: "#1A1A1A",
            textTransform: "uppercase",
            lineHeight: 1.2,
            marginBottom: "0.5rem",
          }}>{content.label}</h1>
          <p style={{ fontFamily: "serif", fontSize: "0.85rem", fontWeight: 300, color: "#96803F", letterSpacing: "0.08em" }}>
            {content.tagline}
          </p>
        </div>

        <div style={{ width: "3rem", height: "1px", background: "#B8A06A", margin: "0 auto 2.5rem" }} />

        {/* Description */}
        <div style={{ marginBottom: "2.5rem" }}>
          {descLines.map((line, i) => (
            <p key={i} style={{ fontSize: "0.9rem", fontWeight: 300, color: "#1A1A1A", lineHeight: 2, marginBottom: i < descLines.length - 1 ? "1rem" : 0 }}>
              {line}
            </p>
          ))}
        </div>

        {/* Future Promise */}
        <div style={{ border: "1px solid #E0DDD8", padding: "1.75rem 2rem", marginBottom: "2.5rem", textAlign: "center" }}>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "0.6rem", letterSpacing: "0.35em", color: "#96803F", textTransform: "uppercase", marginBottom: "1rem" }}>
            Future Promise
          </p>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "1.05rem", fontStyle: "italic", fontWeight: 300, color: "#1A1A1A", marginBottom: "0.6rem", lineHeight: 1.5 }}>
            &ldquo;{content.promise}&rdquo;
          </p>
          <p style={{ fontSize: "0.8rem", fontWeight: 300, color: "#5F5F5C", letterSpacing: "0.06em" }}>
            {content.promiseJa}
          </p>
        </div>

        {/* Small action */}
        <div style={{ marginBottom: "3rem" }}>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "0.6rem", letterSpacing: "0.35em", color: "#96803F", textTransform: "uppercase", marginBottom: "1rem" }}>
            Today&rsquo;s small step
          </p>
          <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "#1A1A1A", lineHeight: 2, borderLeft: "2px solid #B8A06A", paddingLeft: "1rem" }}>
            {content.action}
          </p>
        </div>

        {/* Share card + save */}
        <p style={{ fontFamily: "Georgia, serif", fontSize: "0.6rem", letterSpacing: "0.35em", color: "#96803F", textTransform: "uppercase", marginBottom: "1.5rem", textAlign: "center" }}>
          Share Card
        </p>
        <SaveButton resultType={type} />

        {/* Interstitial — bridge to paid experience */}
        <div style={{ width: "100%", height: "1px", background: "#E0DDD8", marginBottom: "2.5rem" }} />
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "1rem", fontStyle: "italic", fontWeight: 300, color: "#1A1A1A", lineHeight: 1.6, marginBottom: "1.5rem" }}>
            あなたの石は、<br />まだ名前がついていません。
          </p>
          <p style={{ fontSize: "0.82rem", fontWeight: 300, color: "#5F5F5C", lineHeight: 2.1, marginBottom: "2rem" }}>
            Future Me Mirror™で見えるのは、あなたの輪郭。<br />
            でも、あなたが歩いてきた時間、<br />
            大切にしてきた価値観、これから進みたい未来。<br />
            そこまで重ねて初めて、<br />
            あなただけのダイヤモンドが見えてきます。
          </p>
          <a href="https://mindfulnessdiamond.com" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-block",
            fontSize: "0.8rem",
            fontWeight: 300,
            letterSpacing: "0.04em",
            color: "#96803F",
            textDecoration: "none",
            borderBottom: "1px solid #B8A06A",
            paddingBottom: "0.3rem",
          }}>
            Diamond Mirror™ Experience を見る →
          </a>
        </div>

        {/* Back to LINE — continue the step flow */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <a href="https://line.me/R/ti/p/@391knuuu" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.85rem 2rem",
            borderRadius: "999px",
            background: "#B8A06A",
            color: "#FFFFFF",
            fontFamily: "Georgia, serif",
            fontSize: "0.78rem",
            letterSpacing: "0.15em",
            textDecoration: "none",
          }}>
            LINEに戻って続きを受け取る →
          </a>
          <p style={{ fontSize: "0.66rem", color: "#B0A898", marginTop: "0.8rem", lineHeight: 1.8 }}>
            このあと、あなたへの小さな手紙が届きます🕊️
          </p>
        </div>

        <p style={{ textAlign: "center", fontFamily: "Georgia, serif", fontSize: "0.55rem", letterSpacing: "0.3em", color: "#A39E94", textTransform: "uppercase", marginBottom: "2rem" }}>
          © 2026 Mindfulness Diamond
        </p>
      </div>
    </main>
  );
}
