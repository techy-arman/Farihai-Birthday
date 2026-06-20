"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import type { JourneyStep } from "@/lib/types";

interface ScreenWrapperProps {
  children: ReactNode;
  stepKey: JourneyStep;
  className?: string;
}

const screenVariants: Variants = {
  initial: { opacity: 0, scale: 0.96, filter: "blur(8px)" },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    filter: "blur(8px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ScreenWrapper({
  children,
  stepKey,
  className = "",
}: ScreenWrapperProps) {
  return (
    <motion.div
      key={stepKey}
      variants={screenVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`relative flex h-full w-full flex-col items-center justify-center px-4 py-6 sm:px-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}
