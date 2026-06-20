"use client";

import { forwardRef } from "react";
import { ResultType, RESULT_CONTENT } from "@/lib/types";

interface Props {
  resultType: ResultType;
}

const WallpaperCard = forwardRef<HTMLDivElement, Props>(({ resultType }, ref) => {
  const content = RESULT_CONTENT[resultType];

  return (
    <div
      ref={ref}
      style={{
        width: "360px",
        height: "640px",
        background: "#0A0A0A",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "2rem 2rem 1.5rem",
      }}>
        <div style={{
          width: "100%",
          height: "1px",
          background: "linear-gradient(90deg, var(--gold), transparent)",
          marginBottom: "1.25rem",
        }} />

        <p style={{
          fontFamily: "var(--font-serif)",
          fontSize: "0.6rem",
          letterSpacing: "0.3em",
          color: "#ABA79E",
          marginBottom: "0.5rem",
        }}>
          Future Me Mirror™
        </p>

        <div style={{
          width: "1.5rem",
          height: "1px",
          background: "var(--gold)",
          marginBottom: "0.75rem",
        }} />

        <p style={{
          fontFamily: "var(--font-serif)",
          fontSize: "1.35rem",
          fontWeight: 500,
          letterSpacing: "0.15em",
          color: "var(--gold)",
          textTransform: "uppercase",
          marginBottom: "0.5rem",
          lineHeight: 1.1,
        }}>
          {content.label}
        </p>

        <p style={{
          fontFamily: "var(--font-jp)",
          fontSize: "0.72rem",
          fontWeight: 300,
          color: "#C8C0A8",
          marginBottom: "1rem",
        }}>
          {content.tagline}
        </p>

        <p style={{
          fontFamily: "var(--font-serif)",
          fontSize: "0.75rem",
          fontStyle: "italic",
          color: "#B8A06A",
          marginBottom: "1rem",
        }}>
          &ldquo;{content.promise}&rdquo;
        </p>

        <div style={{
          width: "100%",
          height: "1px",
          background: "linear-gradient(90deg, var(--gold), transparent)",
          marginBottom: "0.75rem",
        }} />

        <p style={{
          fontFamily: "var(--font-serif)",
          fontSize: "0.55rem",
          letterSpacing: "0.3em",
          color: "#8F8B82",
          textTransform: "uppercase",
        }}>
          Mindfulness Diamond®
        </p>
      </div>
    </div>
  );
});

WallpaperCard.displayName = "WallpaperCard";
export default WallpaperCard;
