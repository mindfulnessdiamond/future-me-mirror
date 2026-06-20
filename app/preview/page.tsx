"use client";

import ShareCard from "@/components/ShareCard";
import { ResultType } from "@/lib/types";

const ALL_TYPES: ResultType[] = [
  "VISIONARY", "MUSE", "QUEEN", "EXPLORER",
  "CREATOR", "GARDEN", "LIGHT", "POET",
  "CURATOR", "BLOOM", "DREAMER", "FREE_SPIRIT",
];

export default function PreviewPage() {
  return (
    <div style={{ background: "#EDEBE7", minHeight: "100vh", padding: "3rem 2rem" }}>
      <div style={{ maxWidth: "1500px", margin: "0 auto" }}>
        <p style={{
          fontFamily: "Georgia, serif",
          fontSize: "0.55rem",
          letterSpacing: "0.4em",
          color: "#B8A06A",
          textTransform: "uppercase",
          marginBottom: "0.4rem",
        }}>
          Future Me Mirror™
        </p>
        <h1 style={{
          fontFamily: "Georgia, serif",
          fontSize: "1.2rem",
          fontWeight: 400,
          color: "#1A1A1A",
          letterSpacing: "0.04em",
          marginBottom: "2.5rem",
        }}>
          Card Preview — All 12 Types
        </h1>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "2rem",
          alignItems: "start",
        }}>
          {ALL_TYPES.map((type) => (
            <div key={type} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.5rem" }}>
              {/* Scale 360×540 down to ~220px wide = 0.611 scale */}
              <div style={{
                width: "220px",
                height: "330px",
                overflow: "hidden",
                borderRadius: "4px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
              }}>
                <div style={{ transform: "scale(0.611)", transformOrigin: "top left", width: "360px", height: "540px" }}>
                  <ShareCard resultType={type} />
                </div>
              </div>
              <p style={{
                fontFamily: "Georgia, serif",
                fontSize: "0.55rem",
                letterSpacing: "0.18em",
                color: "#888",
                textTransform: "uppercase",
                margin: 0,
              }}>
                {type.replace("_", " ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
