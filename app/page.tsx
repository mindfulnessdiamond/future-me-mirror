"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" as const, delay: i * 0.18 },
  }),
};

export default function LandingPage() {
  useEffect(() => {
    document.body.style.background = "#F2EDE6";
    document.documentElement.style.background = "#F2EDE6";
    return () => {
      document.body.style.background = "";
      document.documentElement.style.background = "";
    };
  }, []);

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
      backgroundColor: "#F2EDE6",
    }}>
      {/* Illustration */}
      <motion.img
        src="/TOP.png"
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
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
      <motion.div
        initial="hidden"
        animate="show"
        style={{
          position: "relative",
          zIndex: 10,
          padding: "0 2rem",
          paddingTop: "env(safe-area-inset-top)",
          maxWidth: "320px",
        }}
      >
        <motion.p
          custom={0}
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-serif)",
            color: "#96803F",
            letterSpacing: "0.4em",
            fontSize: "0.55rem",
            textTransform: "uppercase",
            marginBottom: "2.5rem",
          }}
        >
          Mindfulness Diamond
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "2.6rem",
            fontWeight: 300,
            lineHeight: 1.15,
            letterSpacing: "0.02em",
            color: "#1A1A1A",
            marginBottom: "1.25rem",
          }}
        >
          Future Me<br />Mirror™
        </motion.h1>

        <motion.div
          custom={2}
          variants={fadeUp}
          style={{
            width: "2rem",
            height: "1px",
            background: "#B8A06A",
            marginBottom: "2rem",
          }}
        />

        <motion.p
          custom={3}
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-jp)",
            fontSize: "1.05rem",
            fontWeight: 300,
            color: "#1A1A1A",
            lineHeight: 1.9,
            marginBottom: "1.75rem",
          }}
        >
          3年後の私、<br />ちょっと覗いてみる？
        </motion.p>

        <motion.p
          custom={4}
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-jp)",
            fontSize: "0.8rem",
            fontWeight: 300,
            color: "#5F5F5C",
            lineHeight: 2.1,
            marginBottom: "2rem",
          }}
        >
          毎日ちゃんとやってる。<br />
          家族も、仕事も、今の暮らしも好き。<br />
          でも時々、ふと思う。<br />
          「私って、まだ何かある気がする」<br />
          <br />
          5つの問いから、<br />
          あなたの中に眠る次の私を<br />
          見つけてみませんか。
        </motion.p>

        <motion.a
          custom={5}
          variants={fadeUp}
          href="/diagnosis"
          whileHover="active"
          whileTap="active"
          style={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            overflow: "hidden",
            padding: "0.7rem 1.6rem",
            borderRadius: "999px",
            border: "1px solid #B8A06A",
            fontFamily: "var(--font-serif)",
            fontSize: "0.75rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#1A1A1A",
            textDecoration: "none",
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {/* gold fill sweeping in */}
          <motion.span
            variants={{ active: { scaleX: 1 } }}
            initial={{ scaleX: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute",
              inset: 0,
              transformOrigin: "left center",
              background: "linear-gradient(90deg, #B8A06A 0%, #D4C18C 100%)",
              zIndex: 0,
            }}
          />
          <motion.span
            variants={{ active: { color: "#FFFFFF" } }}
            transition={{ duration: 0.3 }}
            style={{ position: "relative", zIndex: 1 }}
          >
            Begin
          </motion.span>
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            variants={{ active: { color: "#FFFFFF" } }}
            style={{ position: "relative", zIndex: 1, display: "inline-block" }}
          >
            →
          </motion.span>
        </motion.a>

        <motion.p
          custom={6}
          variants={fadeUp}
          style={{
            marginTop: "1.5rem",
            fontFamily: "var(--font-serif)",
            fontSize: "0.5rem",
            letterSpacing: "0.3em",
            color: "#B0A898",
            textTransform: "uppercase",
          }}
        >
          © 2026 Mindfulness Diamond
        </motion.p>
      </motion.div>
    </main>
  );
}
