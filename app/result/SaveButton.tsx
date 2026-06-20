"use client";

import { useRef, useState } from "react";
import { ResultType } from "@/lib/types";
import ShareCard from "@/components/ShareCard";

const IMAGE_FILE: Partial<Record<ResultType, string>> = {
  GARDEN: "GARDENER.JPG",
};

function getImageFile(type: ResultType): string {
  return IMAGE_FILE[type] ?? `${type}.JPG`;
}

export default function SaveButton({ resultType }: { resultType: ResultType }) {
  const [saving, setSaving] = useState(false);
  const shareCardRef = useRef<HTMLDivElement>(null);
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
      link.download = `future-me-${resultType.toLowerCase()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={{ marginBottom: "3rem" }}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem", overflow: "hidden" }}>
        <ShareCard ref={shareCardRef} resultType={resultType} />
      </div>

      {/* Share text */}
      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <p style={{
          fontSize: "0.82rem",
          fontWeight: 300,
          color: "#1A1A1A",
          lineHeight: 2.2,
          letterSpacing: "0.03em",
          margin: "0 0 1.25rem",
        }}>
          あなたはどんな未来の私でしたか？💎<br />
          カードを保存して、ストーリーズで教えてください。<br />
          つけてくれたら遊びに行きます🕊️
        </p>

        {/* タグ — 長押しでコピーできるinput */}
        <div style={{ position: "relative", display: "inline-block" }}>
          <input
            readOnly
            value={tagText}
            onFocus={(e) => e.target.select()}
            onClick={(e) => (e.target as HTMLInputElement).select()}
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.78rem",
              letterSpacing: "0.06em",
              color: "#96803F",
              background: "none",
              border: "1px solid rgba(184,160,106,0.35)",
              borderRadius: "2px",
              padding: "0.5rem 2rem 0.5rem 1.1rem",
              cursor: "text",
              width: "260px",
              textAlign: "center",
            }}
          />
          <svg style={{ position: "absolute", right: "0.6rem", top: "50%", transform: "translateY(-50%)", color: "#96803F", pointerEvents: "none" }}
            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        </div>
        <p style={{ fontSize: "0.65rem", color: "#B0A898", marginTop: "0.4rem" }}>タップして全選択 → コピー</p>
      </div>

      {/* 画像保存 — 直接ダウンロードリンク */}
      <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
        <a
          href={`/IMAGE12_/${getImageFile(resultType)}`}
          download={`future-me-${resultType.toLowerCase()}.jpg`}
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#96803F",
            background: "none",
            border: "1px solid #B8A06A",
            padding: "0.6rem 1.5rem",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          画像を保存 →
        </a>
        <button
          onClick={handleSave}
          disabled={saving}
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "0.6rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#B0A898",
            background: "none",
            border: "none",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          {saving ? "生成中..." : "テキスト付きカードを保存"}
        </button>
      </div>
    </div>
  );
}
