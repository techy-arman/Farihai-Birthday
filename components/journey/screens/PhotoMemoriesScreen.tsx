"use client";

import { motion } from "framer-motion";
import PhotoCarousel from "@/components/photos/PhotoCarousel";
import GoldButton from "@/components/ui/GoldButton";
import ScreenWrapper from "@/components/ui/ScreenWrapper";

interface PhotoMemoriesScreenProps {
  photos: string[];
  onNext: () => void;
}

export default function PhotoMemoriesScreen({
  photos,
  onNext,
}: PhotoMemoriesScreenProps) {
  return (
    <ScreenWrapper stepKey="photo-memories">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 text-center"
      >
        <p className="mb-2 text-sm tracking-[0.25em] text-gold/60 uppercase">
          Precious Memories
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-white sm:text-4xl">
          Every Moment With You
        </h2>
        <p className="mt-2 text-sm text-white/40 italic sm:text-base">
          Swipe through the memories that make my heart smile
        </p>
      </motion.div>

      <PhotoCarousel photos={photos} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8"
      >
        <GoldButton onClick={onNext}>More to Discover</GoldButton>
      </motion.div>
    </ScreenWrapper>
  );
}
