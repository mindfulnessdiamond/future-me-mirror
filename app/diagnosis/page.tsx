"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { QUESTIONS } from "@/lib/questions";
import { calculateResult } from "@/lib/scoring";
import OptionsList from "./OptionsList";

export default function DiagnosisPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<string[]>([]);

  const questionIndex = answers.length;
  const question = QUESTIONS[questionIndex];
  const progress = ((questionIndex + 1) / QUESTIONS.length) * 100;

  const handleSelect = (key: string) => {
    const next = [...answers, key];
    if (next.length >= QUESTIONS.length) {
      const resultType = calculateResult(next);
      router.push(`/result?type=${resultType}`);
    } else {
      setAnswers(next);
    }
  };

  const handleBack = () => {
    if (answers.length === 0) {
      router.push("/");
    } else {
      setAnswers(answers.slice(0, -1));
    }
  };

  return (
    <main style={{
      minHeight: "100svh",
      background: "#FAF6F0",
      paddingTop: "calc(env(safe-area-inset-top) + 4rem)",
      paddingBottom: "2rem",
      paddingLeft: "2rem",
      paddingRight: "2rem",
      position: "relative",
    }}>
      {/* Watercolor background layer (fixed for iOS) */}
      <div style={{
        position: "fixed",
        inset: 0,
        backgroundImage: "url(/Question.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 0,
        pointerEvents: "none",
      }} />
      {/* Soft veil so text stays readable */}
      <div style={{
        position: "fixed",
        inset: 0,
        background: "rgba(250,246,240,0.45)",
        zIndex: 0,
        pointerEvents: "none",
      }} />

      {/* Progress bar */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "2px", background: "#E0DDD8", zIndex: 50 }}>
        <motion.div
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ height: "100%", background: "#B8A06A" }}
        />
      </div>

      <button onClick={handleBack} style={{
        position: "fixed",
        top: "calc(env(safe-area-inset-top) + 1rem)",
        left: "1.5rem",
        fontFamily: "Georgia, serif",
        fontSize: "0.8rem",
        letterSpacing: "0.15em",
        color: "#96803F",
        background: "none",
        border: "none",
        cursor: "pointer",
        zIndex: 100,
        WebkitTapHighlightColor: "transparent",
      }}>← Back</button>

      <div style={{ position: "relative", zIndex: 1 }}>
        <p style={{
          fontFamily: "Georgia, serif",
          fontSize: "0.65rem",
          letterSpacing: "0.3em",
          color: "#96803F",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
        }}>
          Q{questionIndex + 1} / {QUESTIONS.length}
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={questionIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <h2 style={{
              fontSize: "1.1rem",
              fontWeight: 300,
              color: "#1A1A1A",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
            }}>
              {question.text}
            </h2>

            <OptionsList options={question.options} onSelect={handleSelect} />
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
