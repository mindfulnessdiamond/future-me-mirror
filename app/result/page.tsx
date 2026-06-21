import { redirect } from "next/navigation";
import { ResultType } from "@/lib/types";
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
        <p style={{
          fontFamily: "Georgia, serif",
          fontSize: "0.62rem",
          letterSpacing: "0.4em",
          color: "#96803F",
          textTransform: "uppercase",
          marginBottom: "2rem",
        }}>
          Invitation
        </p>

        <h1 style={{
          fontFamily: "Georgia, serif",
          fontSize: "1.8rem",
          fontWeight: 400,
          fontStyle: "italic",
          letterSpacing: "0.04em",
          color: "#1A1A1A",
          lineHeight: 1.3,
          marginBottom: "2.5rem",
        }}>
          Your Mirror Card<br />is ready.
        </h1>

        <div style={{ width: "2.5rem", height: "1px", background: "#B8A06A", margin: "0 auto 2.5rem" }} />

        <p style={{
          fontFamily: "var(--font-jp)",
          fontSize: "0.95rem",
          fontWeight: 300,
          color: "#1A1A1A",
          lineHeight: 2.1,
          marginBottom: "1.75rem",
        }}>
          未来のあなたから、<br />
          小さなメッセージが届いています。
        </p>

        <p style={{
          fontFamily: "var(--font-jp)",
          fontSize: "0.85rem",
          fontWeight: 300,
          color: "#5F5F5C",
          lineHeight: 2.1,
          marginBottom: "3rem",
        }}>
          診断結果と、<br />
          あなたの中に眠るダイヤモンドのヒントを<br />
          LINEへお届けします。
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
          ＊あなた宛てのMirror Cardをお届けします
        </p>
      </GateReveal>
    </main>
  );
}
