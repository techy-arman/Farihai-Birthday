"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import PolaroidPhoto from "./PolaroidPhoto";

interface PhotoCarouselProps {
  photos: string[];
}

export default function PhotoCarousel({ photos }: PhotoCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? photos.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === photos.length - 1 ? 0 : c + 1));

  if (photos.length === 0) return null;

  const visibleIndices = [
    (current - 1 + photos.length) % photos.length,
    current,
    (current + 1) % photos.length,
  ];

  return (
    <div className="relative flex w-full max-w-4xl flex-col items-center gap-6">
      <div className="relative flex h-64 w-full items-center justify-center sm:h-80 md:h-96">
        <AnimatePresence mode="popLayout">
          {visibleIndices.map((idx, pos) => {
            const isCenter = pos === 1;
            const offset = pos - 1;

            return (
              <motion.div
                key={`${idx}-${current}`}
                className="absolute"
                initial={{ opacity: 0, x: offset * 120, scale: 0.8 }}
                animate={{
                  opacity: isCenter ? 1 : 0.5,
                  x: offset * 120,
                  scale: isCenter ? 1 : 0.85,
                  zIndex: isCenter ? 2 : 1,
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <PolaroidPhoto
                  src={photos[idx]}
                  alt={`Memory ${idx + 1}`}
                  rotation={isCenter ? 0 : offset * 8}
                  size={isCenter ? "lg" : "md"}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={prev}
          className="glass-panel rounded-full p-2 text-gold transition-colors hover:text-gold-light"
          aria-label="Previous photo"
        >
          <ChevronLeft size={24} />
        </button>
        <span className="font-[family-name:var(--font-playfair)] text-sm text-white/60">
          {current + 1} / {photos.length}
        </span>
        <button
          type="button"
          onClick={next}
          className="glass-panel rounded-full p-2 text-gold transition-colors hover:text-gold-light"
          aria-label="Next photo"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
