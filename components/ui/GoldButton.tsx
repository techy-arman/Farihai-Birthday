"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

interface GoldButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  showArrow?: boolean;
}

export default function GoldButton({
  onClick,
  children,
  className = "",
  disabled = false,
  showArrow = true,
}: GoldButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3.5 text-base font-medium tracking-wide text-navy-deep transition-opacity disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      style={{
        background: "linear-gradient(135deg, #f5d77a 0%, #d4af37 50%, #b8942e 100%)",
        boxShadow: "0 4px 20px rgba(212, 175, 55, 0.35)",
      }}
    >
      <span className="relative z-10 font-[family-name:var(--font-playfair)]">
        {children}
      </span>
      {showArrow && (
        <ChevronRight
          size={18}
          className="relative z-10 transition-transform group-hover:translate-x-1"
        />
      )}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
        }}
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
      />
    </motion.button>
  );
}
