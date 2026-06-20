import { redirect } from "next/navigation";
import { QUESTIONS } from "@/lib/questions";
import { calculateResult } from "@/lib/scoring";
import DiagnosisWrapper from "./DiagnosisWrapper";
import OptionsList from "./OptionsList";

interface Props {
  searchParams: Promise<{ q?: string; a?: string }>;
}

export default async function DiagnosisPage({ searchParams }: Props) {
  const params = await searchParams;
  const answersStr = params.a ?? "";
  const answers = answersStr ? answersStr.split(",") : [];
  const questionIndex = answers.length;

  // All answered — redirect to result via URL param
  if (questionIndex >= QUESTIONS.length) {
    const resultType = calculateResult(answers);
    redirect(`/result?type=${resultType}`);
  }

  const question = QUESTIONS[questionIndex];
  const progress = ((questionIndex + 1) / QUESTIONS.length) * 100;

  return (
    <DiagnosisWrapper>
    <main style={{
      minHeight: "100svh",
      background: "#FAFAF8",
      paddingTop: "calc(env(safe-area-inset-top) + 4rem)",
      paddingBottom: "2rem",
      paddingLeft: "2rem",
      paddingRight: "2rem",
      position: "relative",
    }}>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "2px", background: "#E0DDD8", zIndex: 50 }}>
        <div style={{ height: "100%", width: `${progress}%`, background: "#B8A06A" }} />
      </div>

      <a href="/" style={{
        position: "fixed",
        top: "calc(env(safe-area-inset-top) + 1rem)",
        left: "1.5rem",
        fontFamily: "Georgia, serif",
        fontSize: "0.8rem",
        letterSpacing: "0.15em",
        color: "#96803F",
        textDecoration: "none",
        zIndex: 100,
      }}>← Back</a>

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

      <h2 style={{
        fontSize: "1.1rem",
        fontWeight: 300,
        color: "#1A1A1A",
        lineHeight: 1.8,
        marginBottom: "2.5rem",
      }}>
        {question.text}
      </h2>

      <OptionsList options={question.options} answers={answers} />
    </main>
    </DiagnosisWrapper>
  );
}
