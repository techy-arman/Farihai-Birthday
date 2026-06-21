"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import GoldButton from "@/components/ui/GoldButton";
import ScreenWrapper from "@/components/ui/ScreenWrapper";
import TypewriterText from "@/components/ui/TypewriterText";
import type { ShayariItem } from "@/lib/types";

interface MoonSectionScreenProps {
  shayari?: ShayariItem;
  onNext: () => void;
}

const LINE_PAUSE_MS = 1400;

export default function MoonSectionScreen({ shayari, onNext }: MoonSectionScreenProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [typingDone, setTypingDone] = useState(false);
  const [allDone, setAllDone] = useState(false);

  const allLines = shayari?.lines ?? [
    "Log kehte hain chaand khoobsurat hai,",
    "Magar chaand tumhari jaisi aankhen",
    "kahan se layega.",
  ];
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
    <ScreenWrapper stepKey="moon" className="justify-start overflow-y-auto pt-10 pb-10 sm:pt-14">
      <motion.div
        className="animate-moon-glow mb-4 text-[72px] sm:text-[100px]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        🌙
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-2 text-sm tracking-[0.25em] text-gold/60 uppercase"
      >
        Under the Moon
      </motion.p>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-6 font-[family-name:var(--font-playfair)] text-2xl text-white sm:mb-8 sm:text-4xl"
      >
        Brighter Than the Moon
      </motion.h2>

      <GlassCard className="max-w-xl px-6 py-8 sm:px-8 sm:py-10">
        <div className="min-h-[100px] sm:min-h-[120px]">
          {allLines.slice(0, lineIndex).map((line, i) => (
            <motion.p
              key={`done-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              className="mb-3 text-center font-[family-name:var(--font-cormorant)] text-lg leading-relaxed text-white/70 sm:text-xl"
            >
              {line}
            </motion.p>
          ))}

          {lineIndex < allLines.length && (
            <motion.p
              key={lineIndex}
              className="text-center font-[family-name:var(--font-cormorant)] text-xl leading-relaxed text-white sm:text-2xl"
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
        <>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-sm text-white/40 italic"
          >
            The moon wishes it could shine like you tonight
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <GoldButton onClick={onNext}>Continue</GoldButton>
          </motion.div>
        </>
      )}
    </ScreenWrapper>
  );
}
