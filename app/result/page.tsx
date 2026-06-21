import { redirect } from "next/navigation";
import { ResultType, RESULT_CONTENT } from "@/lib/types";
import ReceiveButton from "./ReceiveButton";
import GateReveal from "./GateReveal";

interface Props {
  searchParams: Promise<{ type?: string }>;
}

const ALL_TYPES: ResultType[] = [
  "VISIONARY","MUSE","QUEEN","EXPLORER","CREATOR",
  "GARDEN","LIGHT","POET","CURATOR","BLOOM","DREAMER","FREE_SPIRIT"
];

export default async function ResultPage({ searchParams }: Props) {
  const params = await searchParams;
  const type = params.type as ResultType | undefined;

  if (!type || !ALL_TYPES.includes(type)) {
    redirect("/");
  }

  const content = RESULT_CONTENT[type];
  const shortLines = content.shortDescription.split("\n");

  return (
    <main style={{
      minHeight: "100svh",
      background: "#FAF6F0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "calc(env(safe-area-inset-top) + 3rem) 2rem 3rem",
      position: "relative",
    }}>
      {/* Watercolor background */}
      <div style={{
        position: "fixed",
        inset: 0,
        backgroundImage: "url(/Question.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 0,
        pointerEvents: "none",
      }} />
      <div style={{
        position: "fixed",
        inset: 0,
        background: "rgba(250,246,240,0.55)",
        zIndex: 0,
        pointerEvents: "none",
      }} />

      <GateReveal>
        {/* 1. 出会う — light reveal */}
        <p style={{
          fontFamily: "Georgia, serif",
          fontSize: "0.6rem",
          letterSpacing: "0.4em",
          color: "#96803F",
          textTransform: "uppercase",
          marginBottom: "1rem",
        }}>
          あなたの中に眠る未来の姿は
        </p>

        <h1 style={{
          fontFamily: "Georgia, serif",
          fontSize: "2.1rem",
          fontWeight: 400,
          letterSpacing: "0.1em",
          color: "#1A1A1A",
          textTransform: "uppercase",
          lineHeight: 1.2,
          marginBottom: "0.6rem",
        }}>
          {content.label}
        </h1>

        <p style={{
          fontFamily: "var(--font-jp)",
          fontSize: "0.9rem",
          fontWeight: 300,
          color: "#96803F",
          letterSpacing: "0.06em",
          marginBottom: "1.75rem",
        }}>
          {content.tagline}
        </p>

        <div style={{ width: "2.5rem", height: "1px", background: "#B8A06A", margin: "0 auto 1.75rem" }} />

        <p style={{
          fontFamily: "var(--font-jp)",
          fontSize: "0.92rem",
          fontWeight: 300,
          color: "#2A2820",
          lineHeight: 2.1,
          marginBottom: "3rem",
        }}>
          {shortLines.map((line, i) => (
            <span key={i}>{line}{i < shortLines.length - 1 && <br />}</span>
          ))}
        </p>

        {/* 2. 持ち帰る — Future Letter framing */}
        <div style={{
          borderTop: "1px solid rgba(184,160,106,0.35)",
          paddingTop: "2.5rem",
        }}>
          <p style={{
            fontFamily: "var(--font-jp)",
            fontSize: "0.85rem",
            fontWeight: 300,
            color: "#5F5F5C",
            lineHeight: 2.2,
            marginBottom: "2.5rem",
          }}>
            今日出会った未来の私は、<br />
            あなたの中にある輝きのひとつ。<br />
            <br />
            でも本当の魅力は、<br />
            タイプだけでは語りきれないもの。<br />
            <br />
            あなたが大切にしていること、<br />
            心が動く瞬間の中にも眠っています。<br />
            <br />
            未来のあなたから届いた<br />
            最後のメッセージを受け取ってください🕊
          </p>

          <ReceiveButton type={type} />

          <p style={{
            marginTop: "1.75rem",
            fontFamily: "var(--font-jp)",
            fontSize: "0.68rem",
            fontWeight: 300,
            color: "#A39E94",
            letterSpacing: "0.05em",
          }}>
＊Future LetterはLINEでお届けします
          </p>
        </div>
      </GateReveal>
    </main>
  );
}
