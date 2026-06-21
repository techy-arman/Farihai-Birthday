"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import GoldButton from "@/components/ui/GoldButton";
import ScreenWrapper from "@/components/ui/ScreenWrapper";
import TypewriterText from "@/components/ui/TypewriterText";
import type { JourneyStep, ShayariItem } from "@/lib/types";

interface ShayariScreenProps {
  shayari?: ShayariItem;
  title?: string;
  subtitle?: string;
  onNext: () => void;
  stepKey: Extract<JourneyStep, "shayari-1" | "shayari-2" | "shayari-3">;
}

const LINE_PAUSE_MS = 1400;

export default function ShayariScreen({
  shayari,
  title = "Words from the Heart",
  subtitle,
  onNext,
  stepKey,
}: ShayariScreenProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [typingDone, setTypingDone] = useState(false);
  const [allDone, setAllDone] = useState(false);

  const allLines = shayari?.lines ?? [];
  const currentLine = allLines[lineIndex] ?? "";
  const isLastLine = lineIndex >= allLines.length - 1;

  useEffect(() => {
    if (!typingDone) return;

    const timer = setTimeout(() => {
      if (!isLastLine) {
        setLineIndex((i) => i + 1);
        setTypingDone(false);
      } else {
        setAllDone(true);
      }
    }, LINE_PAUSE_MS);

    return () => clearTimeout(timer);
  }, [typingDone, isLastLine, lineIndex]);

  return (
    <ScreenWrapper stepKey={stepKey}>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-2 text-sm tracking-[0.25em] text-gold/60 uppercase"
      >
        {title}
      </motion.p>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 text-white/40 italic"
        >
          {subtitle}
        </motion.p>
      )}

      <GlassCard className="max-w-2xl px-6 py-10 sm:px-12 sm:py-14">
        <div className="min-h-[120px] sm:min-h-[160px]">
          {allLines.slice(0, lineIndex).map((line, i) => (
            <motion.p
              key={`done-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              className="mb-3 text-center font-[family-name:var(--font-cormorant)] text-lg leading-relaxed text-white/70 sm:text-2xl"
            >
              {line}
            </motion.p>
          ))}

          {lineIndex < allLines.length && (
            <motion.p
              key={lineIndex}
              className="text-center font-[family-name:var(--font-cormorant)] text-xl leading-relaxed text-white sm:text-2xl md:text-3xl"
            >
              {typingDone ? (
                currentLine
              ) : (
                <TypewriterText
                  text={currentLine}
                  speed={40}
                  onComplete={() => setTypingDone(true)}
                />
              )}
            </motion.p>
          )}
        </div>
      </GlassCard>

      {allDone && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <GoldButton onClick={onNext}>Continue</GoldButton>
        </motion.div>
      )}
    </ScreenWrapper>
  );
}
