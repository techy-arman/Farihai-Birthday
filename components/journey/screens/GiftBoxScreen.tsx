"use client";

import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import GoldButton from "@/components/ui/GoldButton";
import ScreenWrapper from "@/components/ui/ScreenWrapper";

interface GiftBoxScreenProps {
  onNext: () => void;
}

export default function GiftBoxScreen({ onNext }: GiftBoxScreenProps) {
  return (
    <ScreenWrapper stepKey="gift-box">
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8 text-center text-sm tracking-[0.3em] text-gold/70 uppercase sm:text-base"
      >
        Something special awaits
      </motion.p>

      <motion.div
        className="relative mb-10 cursor-pointer"
        onClick={onNext}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="animate-pulse-gold absolute -inset-8 rounded-full bg-gold/10 blur-2xl" />

        <div className="relative">
          <motion.div
            className="glass-panel mx-auto flex h-40 w-40 items-center justify-center rounded-2xl sm:h-52 sm:w-52"
            style={{
              background:
                "linear-gradient(145deg, rgba(212,175,55,0.15) 0%, rgba(10,14,39,0.8) 100%)",
            }}
          >
            <Gift
              size={80}
              className="text-gold drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]"
              strokeWidth={1.2}
            />
          </motion.div>

          <motion.div
            className="absolute -top-4 left-1/2 h-8 w-32 -translate-x-1/2 rounded-t-lg"
            style={{
              background: "linear-gradient(180deg, #d4af37, #b8942e)",
              boxShadow: "0 0 20px rgba(212,175,55,0.4)",
            }}
          />
          <motion.div
            className="absolute -top-4 left-1/2 h-full w-3 -translate-x-1/2"
            style={{ background: "linear-gradient(180deg, #f5d77a, #d4af37)" }}
          />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="gold-text-gradient mb-4 text-center font-[family-name:var(--font-playfair)] text-3xl font-light sm:text-5xl"
      >
        For Fariha
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mb-10 max-w-sm text-center text-lg text-white/60 italic sm:text-xl"
      >
        Tap the gift to begin your journey ✨
      </motion.p>

      <GoldButton onClick={onNext}>Open Your Gift</GoldButton>
    </ScreenWrapper>
  );
}
