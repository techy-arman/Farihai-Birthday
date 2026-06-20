"use client";

import { motion } from "framer-motion";
import PolaroidPhoto from "./PolaroidPhoto";

interface PhotoGridProps {
  photos: string[];
  scattered?: boolean;
}

export default function PhotoGrid({ photos, scattered = false }: PhotoGridProps) {
  if (photos.length === 0) return null;

  if (scattered) {
    return (
      <div className="relative mx-auto h-[50vh] w-full max-w-3xl sm:h-[55vh]">
        {photos.slice(0, 12).map((src, i) => {
          const positions = [
            { top: "5%", left: "5%", rot: -8 },
            { top: "8%", left: "35%", rot: 5 },
            { top: "3%", left: "65%", rot: -3 },
            { top: "30%", left: "10%", rot: 6 },
            { top: "28%", left: "40%", rot: -5 },
            { top: "32%", left: "68%", rot: 4 },
            { top: "55%", left: "3%", rot: -4 },
            { top: "52%", left: "32%", rot: 7 },
            { top: "58%", left: "62%", rot: -6 },
            { top: "75%", left: "15%", rot: 3 },
            { top: "72%", left: "45%", rot: -7 },
            { top: "78%", left: "70%", rot: 5 },
          ];
          const pos = positions[i % positions.length];

          return (
            <motion.div
              key={src}
              className="absolute"
              style={{ top: pos.top, left: pos.left }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <PolaroidPhoto
                src={src}
                alt={`Memory ${i + 1}`}
                rotation={pos.rot}
                size="sm"
              />
            </motion.div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="scrollbar-hide flex max-w-full gap-4 overflow-x-auto px-2 pb-4">
      {photos.map((src, i) => (
        <PolaroidPhoto
          key={src}
          src={src}
          alt={`Memory ${i + 1}`}
          rotation={((i % 5) - 2) * 3}
          index={i}
        />
      ))}
    </div>
  );
}
