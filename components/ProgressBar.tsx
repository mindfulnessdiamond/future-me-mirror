"use client";

import { motion } from "framer-motion";

interface Props {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: Props) {
  const pct = (current / total) * 100;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      height: "1px",
      background: "#E0DDD8",
      zIndex: 50,
    }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          height: "100%",
          background: "#B8A06A",
        }}
      />
    </div>
  );
}
