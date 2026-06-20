"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import GoldButton from "@/components/ui/GoldButton";
import ScreenWrapper from "@/components/ui/ScreenWrapper";
import TypewriterText from "@/components/ui/TypewriterText";
import type { ShayariItem } from "@/lib/types";

interface MoonSectionScreenProps {
  shayari?: ShayariItem;
  onNext: () => void;
}

export default function MoonSectionScreen({ shayari, onNext }: MoonSectionScreenProps) {
  const lines = shayari?.lines ?? [
    "Log kehte hain chaand khoobsurat hai,",
    "Magar chaand tumhari jaisi aankhen",
    "kahan se layega.",
  ];

  return (
    <ScreenWrapper stepKey="moon" className="overflow-hidden">
      <motion.div
        className="animate-moon-glow absolute top-[8%] text-[100px] sm:top-[10%] sm:text-[140px]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        🌙
      </motion.div>

      <motion.div
        className="absolute top-[12%] h-40 w-40 rounded-full sm:h-56 sm:w-56"
        style={{
          background:
            "radial-gradient(circle, rgba(245,215,122,0.15) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 mb-2 mt-32 text-sm tracking-[0.25em] text-gold/60 uppercase sm:mt-40"
      >
        Under the Moon
      </motion.p>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="relative z-10 mb-8 font-[family-name:var(--font-playfair)] text-2xl text-white sm:text-4xl"
      >
        Brighter Than the Moon
      </motion.h2>

      <GlassCard className="relative z-10 max-w-xl px-8 py-10">
        <div className="space-y-4">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + i * 0.3 }}
              className="text-center font-[family-name:var(--font-cormorant)] text-xl text-white/90 sm:text-2xl md:text-3xl"
            >
              {i === 0 ? (
                <TypewriterText text={line} speed={45} startDelay={800} />
              ) : (
                line
              )}
            </motion.p>
          ))}
        </div>
      </GlassCard>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="relative z-10 mt-6 text-sm text-white/40 italic"
      >
        The moon wishes it could shine like you tonight
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="relative z-10 mt-8"
      >
        <GoldButton onClick={onNext}>Open the Album</GoldButton>
      </motion.div>
    </ScreenWrapper>
  );
}
