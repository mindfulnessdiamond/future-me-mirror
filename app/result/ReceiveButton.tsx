"use client";

import { motion } from "framer-motion";

// ▼ タイプ別 ProLineシナリオURL。揃ったものから順に差し替えてください。
//   未設定のタイプは DEFAULT_URL（初期登録シナリオ）にフォールバックします。
const DEFAULT_URL = "https://b94jxiy5.autosns.app/line";

const SCENARIO_URL: Record<string, string> = {
  MUSE: "https://b94jxiy5.autosns.app/addfriend/s/iEr2Z3S7le/@391knuuu",
  // VISIONARY: "",
  // QUEEN: "",
  // EXPLORER: "",
  // CREATOR: "",
  // GARDEN: "",
  // LIGHT: "",
  // POET: "",
  // CURATOR: "",
  // BLOOM: "",
  // DREAMER: "",
  // FREE_SPIRIT: "",
};

export default function ReceiveButton({ type }: { type: string }) {
  const handleReceive = () => {
    try {
      sessionStorage.setItem("fmm_resultType", type);
    } catch {}
    window.location.href = SCENARIO_URL[type] ?? DEFAULT_URL;
  };

  return (
    <motion.button
      onClick={handleReceive}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
      whileHover="active"
      whileTap="active"
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.7rem",
        overflow: "hidden",
        padding: "0.95rem 2.2rem",
        borderRadius: "999px",
        border: "1px solid #B8A06A",
        background: "none",
        fontFamily: "Georgia, serif",
        fontSize: "0.8rem",
        letterSpacing: "0.22em",
        color: "#1A1A1A",
        cursor: "pointer",
        WebkitTapHighlightColor: "transparent",
      }}
    >
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
        Mirror Cardを受け取る
      </motion.span>
      <motion.span
        animate={{ x: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        variants={{ active: { color: "#FFFFFF" } }}
        style={{ position: "relative", zIndex: 1, display: "inline-block", color: "#B8A06A" }}
      >
        →
      </motion.span>
    </motion.button>
  );
}
