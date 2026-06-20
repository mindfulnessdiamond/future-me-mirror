"use client";

import { motion } from "framer-motion";

interface Option {
  key: string;
  label: string;
}

interface Props {
  options: Option[];
  answers: string[];
}

export default function OptionsList({ options, answers }: Props) {
  return (
    <div>
      {options.map((opt, i) => {
        const nextAnswers = [...answers, opt.key].join(",");
        return (
          <motion.a
            key={opt.key}
            href={`/diagnosis?a=${nextAnswers}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 + i * 0.1 }}
            whileHover="active"
            whileTap="active"
            variants={{
              active: {
                backgroundColor: "rgba(184,160,106,0.12)",
                paddingLeft: "1rem",
                paddingRight: "1rem",
              },
            }}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "1.1rem 0",
              borderBottom: "1px solid #E0DDD8",
              borderRadius: "4px",
              textDecoration: "none",
              WebkitTapHighlightColor: "transparent",
              cursor: "pointer",
            }}
          >
            <motion.span
              variants={{ active: { color: "#96803F", scale: 1.15 } }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                color: "#5F5F5C",
                minWidth: "1rem",
                flexShrink: 0,
                display: "inline-block",
              }}
            >
              {opt.key}
            </motion.span>

            <motion.span
              variants={{ active: { color: "#96803F" } }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{
                flex: 1,
                fontSize: "0.9rem",
                fontWeight: 300,
                color: "#1A1A1A",
                lineHeight: 1.6,
              }}
            >
              {opt.label}
            </motion.span>

            <motion.span
              variants={{ active: { opacity: 1, x: 0 } }}
              initial={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{
                color: "#B8A06A",
                fontSize: "0.85rem",
                flexShrink: 0,
              }}
            >
              →
            </motion.span>
          </motion.a>
        );
      })}
    </div>
  );
}
