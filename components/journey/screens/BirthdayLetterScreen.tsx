"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import GoldButton from "@/components/ui/GoldButton";
import ScreenWrapper from "@/components/ui/ScreenWrapper";
import TypewriterText from "@/components/ui/TypewriterText";
import type { LetterContent } from "@/lib/types";

interface BirthdayLetterScreenProps {
  letter: LetterContent;
  onNext: () => void;
}

const PARA_PAUSE_MS = 1800;

export default function BirthdayLetterScreen({
  letter,
  onNext,
}: BirthdayLetterScreenProps) {
  const [paraIndex, setParaIndex] = useState(0);
  const [typingDone, setTypingDone] = useState(false);
  const [allDone, setAllDone] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const paragraphs = letter.paragraphs;
  const currentPara = paragraphs[paraIndex] ?? "";
  const isLast = paraIndex >= paragraphs.length - 1;

  useEffect(() => {
    if (!typingDone) return;

    const timer = setTimeout(() => {
      if (!isLast) {
        setParaIndex((i) => i + 1);
        setTypingDone(false);
      } else {
        setAllDone(true);
      }
    }, PARA_PAUSE_MS);

    return () => clearTimeout(timer);
  }, [typingDone, isLast, paraIndex]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [paraIndex, typingDone]);

  return (
    <ScreenWrapper stepKey="letter">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-2 text-sm tracking-[0.25em] text-gold/60 uppercase"
      >
        A Letter for You
      </motion.p>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6 font-[family-name:var(--font-playfair)] text-2xl text-white sm:text-4xl"
      >
        From My Heart to Yours
      </motion.h2>

      <GlassCard className="max-h-[50vh] w-full max-w-2xl overflow-hidden px-6 py-8 sm:px-10 sm:py-10">
        <div
          ref={scrollRef}
          className="scrollbar-hide max-h-[42vh] overflow-y-auto"
        >
        {paragraphs.slice(0, paraIndex).map((para, i) => (
          <motion.p
            key={`p-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.65 }}
            className="mb-5 font-[family-name:var(--font-cormorant)] text-base leading-relaxed text-white/70 sm:text-lg"
          >
            {para}
          </motion.p>
        ))}

        {paraIndex < paragraphs.length && (
          <motion.p
            key={paraIndex}
            className="mb-5 font-[family-name:var(--font-cormorant)] text-base leading-relaxed text-white sm:text-lg md:text-xl"
          >
            {typingDone ? (
              currentPara
            ) : (
              <TypewriterText
                text={currentPara}
                speed={25}
                onComplete={() => setTypingDone(true)}
              />
            )}
          </motion.p>
        )}

        <div className="mt-4 flex justify-center gap-1">
          {paragraphs.map((_, i) => (
            <div
              key={i}
              className="h-1 rounded-full transition-all duration-300"
              style={{
                width: i === paraIndex ? 20 : 6,
                background:
                  i <= paraIndex
                    ? "rgba(212, 175, 55, 0.7)"
                    : "rgba(255, 255, 255, 0.12)",
              }}
            />
          ))}
        </div>
        </div>
      </GlassCard>

      {allDone && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <GoldButton onClick={onNext}>See My Wishes</GoldButton>
        </motion.div>
      )}
    </ScreenWrapper>
  );
}
