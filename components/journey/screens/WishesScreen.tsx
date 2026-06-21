"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Star } from "lucide-react";
import { useEffect, useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import GoldButton from "@/components/ui/GoldButton";
import ScreenWrapper from "@/components/ui/ScreenWrapper";
import TypewriterText from "@/components/ui/TypewriterText";
import type { ShayariItem } from "@/lib/types";

interface WishesScreenProps {
  shayari?: ShayariItem;
  onNext: () => void;
}

const wishes = [
  { icon: Heart, text: "May every day bring you endless joy" },
  { icon: Star, text: "May all your dreams come true" },
  { icon: Sparkles, text: "May you always shine bright" },
];

const LINE_PAUSE_MS = 1400;

export default function WishesScreen({ shayari, onNext }: WishesScreenProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [typingDone, setTypingDone] = useState(false);
  const [shayariDone, setShayariDone] = useState(!shayari);

  const allLines = shayari?.lines ?? [];
  const currentLine = allLines[lineIndex] ?? "";
  const isLastLine = lineIndex >= allLines.length - 1;

  useEffect(() => {
    if (!shayari || !typingDone) return;

    const timer = setTimeout(() => {
      if (!isLastLine) {
        setLineIndex((i) => i + 1);
        setTypingDone(false);
      } else {
        setShayariDone(true);
      }
    }, LINE_PAUSE_MS);

    return () => clearTimeout(timer);
  }, [shayari, typingDone, isLastLine, lineIndex]);

  return (
    <ScreenWrapper stepKey="wishes" className="justify-start overflow-y-auto pt-10 pb-10 sm:pt-14">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-2 text-sm tracking-[0.25em] text-gold/60 uppercase"
      >
        Birthday Wishes
      </motion.p>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6 font-[family-name:var(--font-playfair)] text-2xl text-white sm:mb-8 sm:text-4xl"
      >
        My Wishes for You
      </motion.h2>

      <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:gap-6">
        {wishes.map(({ icon: Icon, text }, i) => (
          <GlassCard
            key={text}
            delay={0.3 + i * 0.15}
            className="flex flex-col items-center px-6 py-6 sm:px-8"
          >
            <Icon className="mb-3 text-gold" size={28} strokeWidth={1.2} />
            <p className="text-center font-[family-name:var(--font-cormorant)] text-base text-white/80 sm:text-lg">
              {text}
            </p>
          </GlassCard>
        ))}
      </div>

      {shayari && (
        <GlassCard className="max-w-xl px-6 py-8 sm:px-8" delay={0.8}>
          <div className="min-h-[80px]">
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
                className="text-center font-[family-name:var(--font-cormorant)] text-lg leading-relaxed text-white sm:text-xl"
              >
                {typingDone ? (
                  currentLine
                ) : (
                  <TypewriterText
                    text={currentLine}
                    speed={40}
                    startDelay={600}
                    onComplete={() => setTypingDone(true)}
                  />
                )}
              </motion.p>
            )}
          </div>
        </GlassCard>
      )}

      {shayariDone && (
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
