"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ScrapbookAlbumProps {
  photos: string[];
}

const tapeStyles = [
  "rotate-[-2deg] bg-amber-100/30",
  "rotate-[3deg] bg-rose-100/20",
  "rotate-[-1deg] bg-sky-100/20",
];

export default function ScrapbookAlbum({ photos }: ScrapbookAlbumProps) {
  if (photos.length === 0) return null;

  return (
    <div className="scrollbar-hide max-h-[55vh] w-full max-w-4xl overflow-y-auto px-2">
      <div className="glass-panel relative rounded-3xl p-4 sm:p-8">
        <div
          className="absolute inset-0 rounded-3xl opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(212,175,55,0.05) 28px, rgba(212,175,55,0.05) 29px)",
          }}
        />

        <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
          {photos.map((src, i) => {
            const rotations = [-4, 3, -2, 5, -3, 2, -5, 4, -1, 3, -4, 2];
            const rotation = rotations[i % rotations.length];

            return (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20, rotate: rotation - 10 }}
                whileInView={{ opacity: 1, y: 0, rotate: rotation }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: (i % 8) * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="group relative"
              >
                <div
                  className={`absolute -top-2 left-1/2 z-10 h-4 w-10 -translate-x-1/2 ${tapeStyles[i % tapeStyles.length]}`}
                  style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.2)" }}
                />
                <div className="polaroid-shadow bg-[#faf8f5] p-1.5 pb-5 sm:p-2 sm:pb-6">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={src}
                      alt={`Album memory ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 150px, 200px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-1.5 text-center text-[10px] italic text-navy/50 sm:text-xs">
                    ♥ memory {i + 1}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
