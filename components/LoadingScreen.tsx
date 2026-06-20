"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--background)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
      }}
    >
      <p style={{
        fontFamily: "var(--font-jp)",
        fontSize: "0.9rem",
        fontWeight: 300,
        color: "var(--sub)",
        letterSpacing: "0.05em",
        marginBottom: "2.5rem",
      }}>
        あなたの未来を描いています...
      </p>

      {/* Animated gold line */}
      <div style={{
        width: "160px",
        height: "1px",
        background: "var(--border)",
        position: "relative",
        overflow: "hidden",
      }}>
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%",
            height: "100%",
            background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
          }}
        />
      </div>
    </motion.div>
  );
}
