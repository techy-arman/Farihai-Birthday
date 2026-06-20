"use client";

import { motion } from "framer-motion";
import GoldButton from "@/components/ui/GoldButton";
import ScreenWrapper from "@/components/ui/ScreenWrapper";

interface BirthdayRevealScreenProps {
  onNext: () => void;
}

export default function BirthdayRevealScreen({ onNext }: BirthdayRevealScreenProps) {
  const letters = "Happy Birthday".split("");

  return (
    <ScreenWrapper stepKey="birthday-reveal">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mb-6 text-6xl sm:text-8xl"
      >
        🎂
      </motion.div>

      <div className="mb-4 flex flex-wrap justify-center gap-1 sm:gap-2">
        {letters.map((letter, i) => (
          <motion.span
            key={`${letter}-${i}`}
            initial={{ opacity: 0, y: 40, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              delay: 0.5 + i * 0.06,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="gold-text-gradient gold-glow font-[family-name:var(--font-playfair)] text-3xl font-light sm:text-6xl md:text-7xl"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="mb-2 font-[family-name:var(--font-playfair)] text-4xl font-light text-white sm:text-6xl md:text-7xl"
      >
        Fariha
      </motion.h2>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="mb-6 h-px bg-gradient-to-r from-transparent via-gold to-transparent sm:mb-8"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="mb-2 text-lg text-gold-light sm:text-xl"
      >
        June 23
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="mb-10 max-w-md text-center text-base text-white/50 italic sm:text-lg"
      >
        Today the stars shine a little brighter — because it&apos;s your day.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
      >
        <GoldButton onClick={onNext}>Continue the Journey</GoldButton>
      </motion.div>
    </ScreenWrapper>
  );
}
