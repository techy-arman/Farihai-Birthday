"use client";

import { motion } from "framer-motion";
import ScrapbookAlbum from "@/components/photos/ScrapbookAlbum";
import GoldButton from "@/components/ui/GoldButton";
import ScreenWrapper from "@/components/ui/ScreenWrapper";

interface MemoryAlbumScreenProps {
  photos: string[];
  onNext: () => void;
}

export default function MemoryAlbumScreen({ photos, onNext }: MemoryAlbumScreenProps) {
  return (
    <ScreenWrapper stepKey="memory-album">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 text-center"
      >
        <p className="mb-2 text-sm tracking-[0.25em] text-gold/60 uppercase">
          Memory Album
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-white sm:text-4xl">
          Our Scrapbook of Joy
        </h2>
        <p className="mt-2 text-sm text-white/40 italic">
          {photos.length} memories, infinite smiles
        </p>
      </motion.div>

      <ScrapbookAlbum photos={photos} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6"
      >
        <GoldButton onClick={onNext}>Read My Letter</GoldButton>
      </motion.div>
    </ScreenWrapper>
  );
}
