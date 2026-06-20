"use client";

import { motion } from "framer-motion";
import PhotoGrid from "@/components/photos/PhotoGrid";
import GoldButton from "@/components/ui/GoldButton";
import ScreenWrapper from "@/components/ui/ScreenWrapper";

interface MorePhotosScreenProps {
  photos: string[];
  onNext: () => void;
}

export default function MorePhotosScreen({ photos, onNext }: MorePhotosScreenProps) {
  return (
    <ScreenWrapper stepKey="more-photos">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 text-center"
      >
        <p className="mb-2 text-sm tracking-[0.25em] text-gold/60 uppercase">
          More Moments
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-white sm:text-4xl">
          Scattered Like Stars
        </h2>
        <p className="mt-2 text-sm text-white/40 italic">
          Each photo holds a piece of our story
        </p>
      </motion.div>

      <PhotoGrid photos={photos} scattered />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-6"
      >
        <GoldButton onClick={onNext}>Keep Going</GoldButton>
      </motion.div>
    </ScreenWrapper>
  );
}
