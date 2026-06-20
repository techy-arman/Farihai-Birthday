"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PolaroidPhotoProps {
  src: string;
  alt: string;
  caption?: string;
  rotation?: number;
  index?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-28 sm:w-32",
  md: "w-36 sm:w-44 md:w-48",
  lg: "w-44 sm:w-52 md:w-60",
};

export default function PolaroidPhoto({
  src,
  alt,
  caption,
  rotation = 0,
  index = 0,
  className = "",
  size = "md",
}: PolaroidPhotoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: rotation - 5 }}
      animate={{ opacity: 1, y: 0, rotate: rotation }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.05,
        rotate: rotation + 2,
        zIndex: 10,
        transition: { duration: 0.3 },
      }}
      className={`polaroid-shadow ${sizeClasses[size]} shrink-0 cursor-pointer bg-[#faf8f5] p-2 pb-8 sm:p-2.5 sm:pb-10 ${className}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-navy-light">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 160px, 220px"
          className="object-cover"
        />
      </div>
      {caption && (
        <p className="mt-2 text-center font-[family-name:var(--font-cormorant)] text-xs italic text-navy/70 sm:text-sm">
          {caption}
        </p>
      )}
    </motion.div>
  );
}
