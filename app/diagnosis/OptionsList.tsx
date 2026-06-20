"use client";

import { motion } from "framer-motion";

interface Option {
  key: string;
  label: string;
}

interface Props {
  options: Option[];
  onSelect: (key: string) => void;
}

export default function OptionsList({ options, onSelect }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {options.map((opt) => (
        <motion.button
          key={opt.key}
          onClick={() => onSelect(opt.key)}
          whileHover="active"
          whileTap="tap"
          variants={{
            active: { scale: 1.015 },
            tap: { scale: 0.97 },
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            width: "100%",
            textAlign: "left",
            padding: "1.15rem 1.1rem",
            border: "1px solid rgba(184,160,106,0.35)",
            borderRadius: "10px",
            background: "rgba(255,255,255,0.6)",
            cursor: "pointer",
            overflow: "hidden",
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {/* Gold sweep that fills from the left */}
          <motion.div
            variants={{ active: { scaleX: 1 }, tap: { scaleX: 1 } }}
            initial={{ scaleX: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute",
              inset: 0,
              transformOrigin: "left center",
              background:
                "linear-gradient(90deg, rgba(184,160,106,0.22) 0%, rgba(212,193,140,0.16) 100%)",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />

          {/* Key badge */}
          <motion.span
            variants={{
              active: { backgroundColor: "#B8A06A", color: "#FFFFFF", scale: 1.12 },
              tap: { backgroundColor: "#B8A06A", color: "#FFFFFF", scale: 1.05 },
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "1.7rem",
              height: "1.7rem",
              borderRadius: "50%",
              border: "1px solid rgba(184,160,106,0.5)",
              fontFamily: "Georgia, serif",
              fontSize: "0.7rem",
              letterSpacing: "0.05em",
              color: "#96803F",
              flexShrink: 0,
            }}
          >
            {opt.key}
          </motion.span>

          <motion.span
            variants={{ active: { color: "#7A6A2E", x: 4 }, tap: { color: "#7A6A2E", x: 2 } }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              position: "relative",
              zIndex: 1,
              flex: 1,
              fontSize: "0.92rem",
              fontWeight: 300,
              color: "#1A1A1A",
              lineHeight: 1.6,
            }}
          >
            {opt.label}
          </motion.span>

          {/* Arrow */}
          <motion.span
            variants={{ active: { opacity: 1, x: 0 }, tap: { opacity: 1, x: 0 } }}
            initial={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              position: "relative",
              zIndex: 1,
              color: "#B8A06A",
              fontSize: "0.95rem",
              flexShrink: 0,
            }}
          >
            →
          </motion.span>
        </motion.button>
      ))}
    </div>
  );
}
