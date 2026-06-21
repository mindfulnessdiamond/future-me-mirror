"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ResultType, RESULT_CONTENT } from "@/lib/types";
import ShareCard from "@/components/ShareCard";

const IMAGE_FILE: Partial<Record<ResultType, string>> = {
  GARDEN: "GARDENER.JPG",
};

function getImageFile(type: ResultType): string {
  return IMAGE_FILE[type] ?? `${type}.JPG`;
}

// ▼ ProLineの「外部システム連携用の実行URL（call-beacon...）」をそのまま貼ってください。
//   URL内に [[uid]] が含まれている形のままでOK。タップ時に実際のuidへ置換して叩きます。
//   未設定の間は、通常のLINEトークを開くだけにフォールバックします。
const RETURN_BEACON_URL: string = "https://autosns.jp/api/call-beacon/MvuRwYH64g/[[uid]]";
const LINE_TALK_URL = "https://line.me/R/ti/p/@391knuuu";

export default function CardView({ type, uid }: { type: ResultType; uid?: string }) {
  const content = RESULT_CONTENT[type];
  const descLines = content.description.split("\n");

  const handleReturn = (e: React.MouseEvent) => {
    // 発火URLが設定されていて uid があれば、裏でビーコンを叩いてから LINE に戻る
    if (RETURN_BEACON_URL && uid) {
      e.preventDefault();
      const beacon = RETURN_BEACON_URL.replace(/\[\[uid\]\]/g, encodeURIComponent(uid));
      try {
        const img = new Image();
        img.src = beacon; // fire-and-forget でシナリオ移動を発火
      } catch {}
      setTimeout(() => { window.location.href = LINE_TALK_URL; }, 350);
    }
    // 未設定なら通常リンク（LINEトークを開く）
  };
  const shareCardRef = useRef<HTMLDivElement>(null);
  const [saving, setSaving] = useState(false);
  const tagText = "@fumi_jeweler #FutureMeMirror";

  const handleSave = async () => {
    if (!shareCardRef.current) return;
    setSaving(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(shareCardRef.current, {
        backgroundColor: "#FAF8F5",
        scale: 2,
        useCORS: true,
        logging: false,
      });
      const link = document.createElement("a");
      link.download = `mirror-card-${type.toLowerCase()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>

      {/* ===== FIRST VIEW: the delivered card ===== */}
      <div style={{ textAlign: "center", paddingTop: "1rem", marginBottom: "1.25rem" }}>
        <p style={{
          fontFamily: "Georgia, serif",
          fontSize: "0.58rem",
          letterSpacing: "0.4em",
          color: "#96803F",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
        }}>
          Your Mirror Card
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ display: "flex", justifyContent: "center", overflow: "hidden", marginBottom: "2rem" }}
      >
        <ShareCard ref={shareCardRef} resultType={type} />
      </motion.div>

      {/* curiosity nudge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        style={{ textAlign: "center", marginBottom: "3.5rem" }}
      >
        <p style={{ fontFamily: "var(--font-jp)", fontSize: "0.8rem", fontWeight: 300, color: "#5F5F5C", letterSpacing: "0.05em", lineHeight: 2 }}>
          このカードに込められた意味を、<br />読んでみてください。
        </p>
        <motion.p
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: "#B8A06A", fontSize: "1.1rem", marginTop: "0.75rem" }}
        >
          ↓
        </motion.p>
      </motion.div>

      {/* ===== reveal & meaning ===== */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "0.6rem", letterSpacing: "0.4em", color: "#96803F", textTransform: "uppercase", marginBottom: "0.75rem" }}>
          あなたの中に眠る未来の姿は
        </p>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "2.2rem", fontWeight: 400, letterSpacing: "0.12em", color: "#1A1A1A", textTransform: "uppercase", lineHeight: 1.2, marginBottom: "0.5rem" }}>
          {content.label}
        </h1>
        <p style={{ fontFamily: "serif", fontSize: "0.85rem", fontWeight: 300, color: "#96803F", letterSpacing: "0.08em" }}>
          {content.tagline}
        </p>
      </div>

      <div style={{ width: "3rem", height: "1px", background: "#B8A06A", margin: "0 auto 2.5rem" }} />

      <div style={{ marginBottom: "2.5rem" }}>
        {descLines.map((line, i) => (
          <p key={i} style={{ fontSize: "0.9rem", fontWeight: 300, color: "#1A1A1A", lineHeight: 2, marginBottom: i < descLines.length - 1 ? "1rem" : 0 }}>
            {line}
          </p>
        ))}
      </div>

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

      <div style={{ marginBottom: "3rem" }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "0.6rem", letterSpacing: "0.35em", color: "#96803F", textTransform: "uppercase", marginBottom: "1rem" }}>
          Today&rsquo;s small step
        </p>
        <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "#1A1A1A", lineHeight: 2, borderLeft: "2px solid #B8A06A", paddingLeft: "1rem" }}>
          {content.action}
        </p>
      </div>

      {/* ===== save & share ===== */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <p style={{ fontSize: "0.82rem", fontWeight: 300, color: "#1A1A1A", lineHeight: 2.2, letterSpacing: "0.03em", margin: "0 0 1.25rem" }}>
          あなたはどんな未来の私でしたか？💎<br />
          カードを保存して、ストーリーズで教えてください。<br />
          つけてくれたら遊びに行きます🕊️
        </p>

        <div style={{ position: "relative", display: "inline-block", marginBottom: "0.4rem" }}>
          <input
            readOnly
            value={tagText}
            onFocus={(e) => e.target.select()}
            onClick={(e) => (e.target as HTMLInputElement).select()}
            style={{
              fontFamily: "Georgia, serif", fontSize: "0.78rem", letterSpacing: "0.06em",
              color: "#96803F", background: "none", border: "1px solid rgba(184,160,106,0.35)",
              borderRadius: "2px", padding: "0.5rem 2rem 0.5rem 1.1rem", cursor: "text",
              width: "260px", textAlign: "center",
            }}
          />
          <svg style={{ position: "absolute", right: "0.6rem", top: "50%", transform: "translateY(-50%)", color: "#96803F", pointerEvents: "none" }}
            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        </div>
        <p style={{ fontSize: "0.65rem", color: "#B0A898", marginBottom: "1.5rem" }}>タップして全選択 → コピー</p>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
          <a
            href={`/IMAGE12_/${getImageFile(type)}`}
            download={`mirror-card-${type.toLowerCase()}.jpg`}
            style={{
              fontFamily: "Georgia, serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#96803F", background: "none", border: "1px solid #B8A06A", padding: "0.6rem 1.5rem",
              textDecoration: "none", display: "inline-block",
            }}
          >
            画像を保存 →
          </a>
          <button onClick={handleSave} disabled={saving} style={{
            fontFamily: "Georgia, serif", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase",
            color: "#B0A898", background: "none", border: "none", cursor: "pointer", textDecoration: "underline",
          }}>
            {saving ? "生成中..." : "テキスト付きカードを保存"}
          </button>
        </div>
      </div>

      {/* ===== interstitial (no LP link yet) ===== */}
      <div style={{ width: "100%", height: "1px", background: "#E0DDD8", marginBottom: "2.5rem" }} />
      <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "1rem", fontStyle: "italic", fontWeight: 300, color: "#1A1A1A", lineHeight: 1.6, marginBottom: "1.5rem" }}>
          あなたの石は、<br />まだ名前がついていません。
        </p>
        <p style={{ fontSize: "0.82rem", fontWeight: 300, color: "#5F5F5C", lineHeight: 2.1 }}>
          Future Me Mirror™で見えるのは、あなたの輪郭。<br />
          でも、あなたが歩いてきた時間、<br />
          大切にしてきた価値観、これから進みたい未来。<br />
          そこまで重ねて初めて、<br />
          あなただけのダイヤモンドが見えてきます。
        </p>
      </div>

      {/* ===== back to LINE ===== */}
      <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <a href={LINE_TALK_URL} onClick={handleReturn} style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.85rem 2rem",
          borderRadius: "999px", background: "#B8A06A", color: "#FFFFFF",
          fontFamily: "Georgia, serif", fontSize: "0.78rem", letterSpacing: "0.15em", textDecoration: "none",
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
  );
}
