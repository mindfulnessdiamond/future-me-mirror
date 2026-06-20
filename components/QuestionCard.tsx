"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Question } from "@/lib/questions";

interface Props {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (key: string) => void;
}

export default function QuestionCard({ question, questionIndex, totalQuestions, onAnswer }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (key: string) => {
    setSelected(key);
    setTimeout(() => onAnswer(key), 400);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-sm mx-auto"
      >
        <p style={{
          fontFamily: "var(--font-serif)",
          fontSize: "0.65rem",
          letterSpacing: "0.3em",
          color: "#96803F",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
        }}>
          Q{questionIndex + 1} / {totalQuestions}
        </p>

        <h2 style={{
          fontFamily: "var(--font-jp)",
          fontSize: "1.15rem",
          fontWeight: 300,
          color: "#1A1A1A",
          lineHeight: 1.8,
          marginBottom: "2.5rem",
        }}>
          {question.text}
        </h2>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {question.options.map((opt) => (
            <motion.li
              key={opt.key}
              onClick={() => handleSelect(opt.key)}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              style={{
                padding: "1rem 1.25rem",
                marginBottom: "0.5rem",
                cursor: "pointer",
                borderBottom: "1px solid #E0DDD8",
                background: selected === opt.key ? "rgba(184, 160, 106, 0.06)" : "transparent",
                transition: "background 0.3s",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <span style={{
                fontFamily: "var(--font-serif)",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                color: selected === opt.key ? "#B8A06A" : "#5F5F5C",
                minWidth: "1rem",
              }}>
                {opt.key}
              </span>
              <span style={{
                fontFamily: "var(--font-jp)",
                fontSize: "0.9rem",
                fontWeight: 300,
                color: "#1A1A1A",
                lineHeight: 1.6,
              }}>
                {opt.label}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>
  );
}
