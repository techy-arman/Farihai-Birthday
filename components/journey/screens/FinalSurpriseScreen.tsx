"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import GoldButton from "@/components/ui/GoldButton";
import ScreenWrapper from "@/components/ui/ScreenWrapper";

interface FinalSurpriseScreenProps {
  onNext: () => void;
}

export default function FinalSurpriseScreen({ onNext }: FinalSurpriseScreenProps) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ScreenWrapper stepKey="final-surprise">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8 text-7xl sm:text-9xl"
      >
        💝
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 30 }}
        transition={{ duration: 0.8 }}
        className="gold-text-gradient gold-glow mb-4 text-center font-[family-name:var(--font-playfair)] text-3xl sm:text-5xl"
      >
        You Are Loved
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: revealed ? 1 : 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mb-2 max-w-lg text-center text-xl text-white/80 sm:text-2xl"
      >
        Farihai❤️, you make the world a more beautiful place.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: revealed ? 1 : 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mb-10 max-w-md text-center text-base text-white/50 italic sm:text-lg"
      >
        Thank you for being exactly who you are — genuine, strong, and wonderful.
        This little journey was made with all my heart, just for you.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: revealed ? 1 : 0, scale: revealed ? 1 : 0.8 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="flex flex-col items-center gap-2"
      >
        <p className="font-[family-name:var(--font-playfair)] text-lg text-gold-light">
          With all my love,
        </p>
        <p className="font-[family-name:var(--font-playfair)] text-2xl text-white sm:text-3xl">
          Arman ❤️
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: revealed ? 1 : 0 }}
        transition={{ delay: 1.5 }}
        className="mt-10"
      >
        <GoldButton onClick={onNext}>Celebrate! 🎉</GoldButton>
      </motion.div>
    </ScreenWrapper>
  );
}
