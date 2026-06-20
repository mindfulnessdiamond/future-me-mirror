"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface Props {
  onUpload: (dataUrl: string) => void;
}

export default function PhotoUpload({ onUpload }: Props) {
  const [preview, setPreview] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const url = e.target?.result as string;
      setPreview(url);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) handleFile(file);
  };

  const handleConfirm = () => {
    if (preview) onUpload(preview);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-sm mx-auto text-center"
    >
      <h2 style={{
        fontFamily: "var(--font-jp)",
        fontSize: "1.15rem",
        fontWeight: 300,
        color: "var(--foreground)",
        lineHeight: 1.8,
        marginBottom: "0.5rem",
      }}>
        あなたの写真を<br />アップロードしてください
      </h2>
      <p style={{
        fontFamily: "var(--font-jp)",
        fontSize: "0.8rem",
        color: "var(--sub)",
        marginBottom: "2.5rem",
        lineHeight: 1.7,
      }}>
        壁紙カードの背景として使用します。<br />
        ※ この写真はサーバーに保存されません
      </p>

      {preview ? (
        <div>
          <div style={{
            width: "100%",
            aspectRatio: "3/4",
            overflow: "hidden",
            marginBottom: "1.5rem",
            border: `1px solid var(--border)`,
          }}>
            <img
              src={preview}
              alt="preview"
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(30%)" }}
            />
          </div>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <button
              onClick={() => { setPreview(null); if (inputRef.current) inputRef.current.value = ""; }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--sub)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
                borderBottom: "1px solid var(--border)",
              }}
            >
              変更する
            </button>
            <button
              onClick={handleConfirm}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--foreground)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
                borderBottom: "1px solid var(--gold)",
              }}
            >
              この写真で進む →
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          style={{
            border: `1px dashed ${dragging ? "var(--gold)" : "var(--border)"}`,
            padding: "4rem 2rem",
            cursor: "pointer",
            transition: "border-color 0.3s",
            background: dragging ? "rgba(184,160,106,0.04)" : "transparent",
          }}
        >
          <p style={{
            fontFamily: "var(--font-serif)",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            color: "var(--gold-text)",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}>
            + 写真を選ぶ
          </p>
          <p style={{
            fontFamily: "var(--font-jp)",
            fontSize: "0.75rem",
            color: "var(--sub)",
          }}>
            またはドラッグ&ドロップ
          </p>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleChange}
          />
        </div>
      )}
    </motion.div>
  );
}
