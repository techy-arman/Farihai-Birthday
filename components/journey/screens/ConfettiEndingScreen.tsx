"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import GoldButton from "@/components/ui/GoldButton";
import ScreenWrapper from "@/components/ui/ScreenWrapper";

interface ConfettiEndingScreenProps {
  onRestart: () => void;
}

export default function ConfettiEndingScreen({ onRestart }: ConfettiEndingScreenProps) {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const update = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ScreenWrapper stepKey="confetti">
      {showConfetti && windowSize.width > 0 && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={400}
          colors={["#d4af37", "#f5d77a", "#ffffff", "#ff6b9d", "#ffd700", "#e8d5b7"]}
          gravity={0.08}
        />
      )}

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-6 text-7xl sm:text-9xl"
      >
        🎊
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="gold-text-gradient gold-glow mb-4 text-center font-[family-name:var(--font-playfair)] text-4xl sm:text-6xl md:text-7xl"
      >
        Happy Birthday!
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mb-6 font-[family-name:var(--font-playfair)] text-3xl text-white sm:text-5xl"
      >
        Farihai❤️ 🎂
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mb-4 max-w-md text-center text-lg text-white/70 sm:text-xl"
      >
        May this year be your most magical one yet.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mb-10 text-center text-base text-gold-light italic sm:text-lg"
      >
        June 23 — a day the universe celebrates you ✨
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="flex flex-col gap-4 sm:flex-row"
      >
        <GoldButton onClick={onRestart} showArrow={false}>
          Relive the Journey
        </GoldButton>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-8 text-sm text-white/30"
      >
        Made with love by Arman
      </motion.p>
    </ScreenWrapper>
  );
}
