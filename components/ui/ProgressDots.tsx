"use client";

import { motion } from "framer-motion";
import type { JourneyStep } from "@/lib/types";
import { JOURNEY_STEPS } from "@/lib/types";

interface ProgressDotsProps {
  currentStep: JourneyStep;
}

export default function ProgressDots({ currentStep }: ProgressDotsProps) {
  const currentIndex = JOURNEY_STEPS.indexOf(currentStep);

  return (
    <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-1.5 sm:bottom-6">
      {JOURNEY_STEPS.map((step, i) => (
        <motion.div
          key={step}
          className="rounded-full transition-colors"
          style={{
            width: i === currentIndex ? 20 : 6,
            height: 6,
            background:
              i === currentIndex
                ? "linear-gradient(90deg, #d4af37, #f5d77a)"
                : i < currentIndex
                  ? "rgba(212, 175, 55, 0.5)"
                  : "rgba(255, 255, 255, 0.15)",
          }}
          animate={{ width: i === currentIndex ? 20 : 6 }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  );
}
