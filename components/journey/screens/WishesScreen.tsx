"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Star } from "lucide-react";
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

export default function WishesScreen({ shayari, onNext }: WishesScreenProps) {
  return (
    <ScreenWrapper stepKey="wishes">
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
        className="mb-8 font-[family-name:var(--font-playfair)] text-2xl text-white sm:text-4xl"
      >
        My Wishes for You
      </motion.h2>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
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
        <GlassCard className="max-w-xl px-8 py-8" delay={0.8}>
          <div className="space-y-3">
            {shayari.lines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + i * 0.4 }}
                className="text-center font-[family-name:var(--font-cormorant)] text-lg text-white/90 sm:text-xl"
              >
                {i === 0 ? (
                  <TypewriterText text={line} speed={40} startDelay={1000} />
                ) : (
                  line
                )}
              </motion.p>
            ))}
          </div>
        </GlassCard>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="mt-8"
      >
        <GoldButton onClick={onNext}>One Last Surprise</GoldButton>
      </motion.div>
    </ScreenWrapper>
  );
}
