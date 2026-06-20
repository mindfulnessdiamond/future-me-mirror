"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ResultType, RESULT_CONTENT } from "@/lib/types";

export default function AlreadyUsedPage() {
  const router = useRouter();
  const [resultType, setResultType] = useState<ResultType | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("fmm_resultType") as ResultType | null;
    setResultType(stored);
  }, []);

  const content = resultType ? RESULT_CONTENT[resultType] : null;

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: "var(--background)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: "360px" }}
      >
        <p style={{
          fontFamily: "var(--font-serif)",
          fontSize: "0.6rem",
          letterSpacing: "0.4em",
          color: "var(--gold-text)",
          textTransform: "uppercase",
          marginBottom: "3rem",
        }}>
          Mindfulness Diamond
        </p>

        <h1 style={{
          fontFamily: "var(--font-jp)",
          fontSize: "1.4rem",
          fontWeight: 300,
          color: "var(--foreground)",
          lineHeight: 1.8,
          marginBottom: "1.5rem",
        }}>
          あなたの未来は、<br />もう映しました。
        </h1>

        {content && (
          <p style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1rem",
            fontStyle: "italic",
            color: "var(--gold-text)",
            letterSpacing: "0.04em",
            marginBottom: "2rem",
          }}>
            &ldquo;{content.promise}&rdquo;
          </p>
        )}

        <div style={{
          width: "40px",
          height: "1px",
          background: "var(--gold)",
          margin: "0 auto 2rem",
        }} />

        <p style={{
          fontFamily: "var(--font-jp)",
          fontSize: "0.85rem",
          fontWeight: 300,
          color: "var(--sub)",
          lineHeight: 2,
          marginBottom: "2.5rem",
        }}>
          その言葉を、今日も連れていってください。<br />
          変わるために否定しなくていい。<br />
          今の私を連れて、次の私へ。
        </p>

        <button
          onClick={() => router.push("/result")}
          style={{
            display: "block",
            fontFamily: "var(--font-jp)",
            fontSize: "0.8rem",
            fontWeight: 300,
            color: "var(--foreground)",
            background: "none",
            border: "none",
            borderBottom: "1px solid var(--border)",
            paddingBottom: "0.25rem",
            cursor: "pointer",
            margin: "0 auto 3rem",
            letterSpacing: "0.04em",
          }}
        >
          結果をもう一度見る
        </button>

        <a
          href="https://lin.ee/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            color: "var(--gold-text)",
            borderBottom: "1px solid var(--gold)",
            paddingBottom: "2px",
            textDecoration: "none",
            textTransform: "uppercase",
          }}
        >
          Mindfulness Diamond を知る →
        </a>
      </motion.div>
    </main>
  );
}
