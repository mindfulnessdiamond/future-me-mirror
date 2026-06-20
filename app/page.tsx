"use client";

import { motion } from "framer-motion";

export default function LandingPage() {

  return (
    <main style={{
      minHeight: "100%",
      height: "100svh",
      width: "100%",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "#2C2420",
    }}>
      {/* Illustration */}
      <img
        src="/TOP.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: "auto",
          maxWidth: "none",
          objectFit: "fill",
          pointerEvents: "none",
        }}
      />

      {/* Left overlay for text readability */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to right, rgba(242,237,230,0.9) 40%, rgba(242,237,230,0.4) 70%, transparent 100%)",
        pointerEvents: "none",
      }} />

      {/* Text */}
      <div style={{
        position: "relative",
        zIndex: 10,
        padding: "0 2rem",
        paddingTop: "env(safe-area-inset-top)",
        maxWidth: "320px",
      }}>
        <p style={{
          fontFamily: "var(--font-serif)",
          color: "#96803F",
          letterSpacing: "0.4em",
          fontSize: "0.55rem",
          textTransform: "uppercase",
          marginBottom: "2.5rem",
        }}>
          Mindfulness Diamond
        </p>

        <h1 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "2.6rem",
          fontWeight: 300,
          lineHeight: 1.15,
          letterSpacing: "0.02em",
          color: "#1A1A1A",
          marginBottom: "1.25rem",
        }}>
          Future Me<br />Mirror™
        </h1>

        <div style={{
          width: "2rem",
          height: "1px",
          background: "#B8A06A",
          marginBottom: "2rem",
        }} />

        <p style={{
          fontFamily: "var(--font-jp)",
          fontSize: "1.05rem",
          fontWeight: 300,
          color: "#1A1A1A",
          lineHeight: 1.9,
          marginBottom: "1.75rem",
        }}>
          3年後の私、<br />ちょっと覗いてみる？
        </p>

        <p style={{
          fontFamily: "var(--font-jp)",
          fontSize: "0.8rem",
          fontWeight: 300,
          color: "#5F5F5C",
          lineHeight: 2.1,
          marginBottom: "2rem",
        }}>
          毎日ちゃんとやってる。<br />
          家族も、仕事も、今の暮らしも好き。<br />
          でも時々、ふと思う。<br />
          「私って、まだ何かある気がする」<br />
          <br />
          5つの問いから、<br />
          あなたの中に眠る次の私を<br />
          見つけてみませんか。
        </p>

        <a
          href="/diagnosis"
          style={{
            display: "inline-block",
            borderBottom: "1px solid #B8A06A",
            padding: "0.5rem 0 0.25rem",
            fontFamily: "var(--font-serif)",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#1A1A1A",
            textDecoration: "none",
            WebkitTapHighlightColor: "transparent",
          }}
        >
          Begin →
        </a>

        <p style={{
          marginTop: "1.5rem",
          fontFamily: "var(--font-serif)",
          fontSize: "0.5rem",
          letterSpacing: "0.3em",
          color: "#B0A898",
          textTransform: "uppercase",
        }}>
          © 2026 Mindfulness Diamond
        </p>
      </div>
    </main>
  );
}
