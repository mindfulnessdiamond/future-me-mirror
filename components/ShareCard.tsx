"use client";

import { forwardRef } from "react";
import { ResultType, RESULT_CONTENT } from "@/lib/types";

interface Props {
  resultType: ResultType;
}

const IMAGE_FILE: Partial<Record<ResultType, string>> = {
  GARDEN: "GARDENER.JPG",
};

function getImagePath(type: ResultType): string | null {
  const fileName = IMAGE_FILE[type] ?? `${type}.JPG`;
  return `/IMAGE12_/${fileName}`;
}

const ShareCard = forwardRef<HTMLDivElement, Props>(({ resultType }, ref) => {
  const content = RESULT_CONTENT[resultType];
  const shortDescLines = content.shortDescription.split("\n");
  const imagePath = getImagePath(resultType);

  return (
    <div
      ref={ref}
      style={{
        width: "360px",
        height: "540px",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
        backgroundColor: "#FAF8F5",
        fontFamily: "sans-serif",
      }}
    >
      {/* Illustration — right side, full image visible */}
      {imagePath && (
        <img
          src={imagePath}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "100%",
            width: "auto",
            maxWidth: "none",
            objectFit: "contain",
            objectPosition: "right top",
          }}
        />
      )}


      {/* Text layer */}
      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "1.5rem 1.6rem",
      }}>
        {/* Top: brand */}
        <p style={{
          fontFamily: "var(--font-serif, Georgia, serif)",
          fontSize: "0.48rem",
          letterSpacing: "0.42em",
          color: "#B8A06A",
          textTransform: "uppercase",
          margin: 0,
        }}>
          Future Me Mirror™
        </p>

        {/* Center-bottom: main text block */}
        <div style={{ maxWidth: "58%" }}>
          {/* Gold accent line */}
          <div style={{
            width: "1.8rem",
            height: "1px",
            background: "#B8A06A",
            marginBottom: "0.85rem",
          }} />

          <p style={{
            fontFamily: "var(--font-jp, sans-serif)",
            fontSize: "0.6rem",
            fontWeight: 300,
            color: "#9A9490",
            letterSpacing: "0.06em",
            margin: "0 0 0.3rem",
          }}>
            あなたの中に眠る未来の姿
          </p>

          <h2 style={{
            fontFamily: "var(--font-serif, Georgia, serif)",
            fontSize: "1.55rem",
            fontWeight: 400,
            letterSpacing: "0.06em",
            color: "#1A1A1A",
            textTransform: "uppercase",
            lineHeight: 1.1,
            margin: "0 0 0.3rem",
          }}>
            {content.label}
          </h2>

          <p style={{
            fontFamily: "var(--font-jp, sans-serif)",
            fontSize: "0.78rem",
            fontWeight: 300,
            color: "#96803F",
            letterSpacing: "0.04em",
            margin: "0 0 0.9rem",
          }}>
            {content.tagline}
          </p>

          <div style={{
            width: "100%",
            height: "1px",
            background: "rgba(170,160,145,0.4)",
            marginBottom: "0.85rem",
          }} />

          <p style={{
            fontFamily: "var(--font-serif, Georgia, serif)",
            fontSize: "0.85rem",
            fontStyle: "italic",
            color: "#2A2820",
            lineHeight: 1.55,
            margin: "0 0 0.55rem",
          }}>
            &ldquo;{content.promise}&rdquo;
          </p>

          {shortDescLines.map((line, i) => (
            <p key={i} style={{
              fontFamily: "var(--font-jp, sans-serif)",
              fontSize: "0.72rem",
              fontWeight: 300,
              color: "#4A4840",
              lineHeight: 1.85,
              letterSpacing: "0.03em",
              margin: 0,
            }}>
              {line}
            </p>
          ))}
        </div>

        {/* Bottom: brand footer */}
        <p style={{
          fontFamily: "var(--font-serif, Georgia, serif)",
          fontSize: "0.42rem",
          letterSpacing: "0.38em",
          color: "#B0A898",
          textTransform: "uppercase",
          margin: 0,
        }}>
          Mindfulness Diamond®
        </p>
      </div>
    </div>
  );
});

ShareCard.displayName = "ShareCard";
export default ShareCard;
