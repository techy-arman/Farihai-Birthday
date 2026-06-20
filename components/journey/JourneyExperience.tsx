"use client";

import { AnimatePresence } from "framer-motion";
import { useCallback, useState } from "react";
import StarsBackground from "@/components/background/StarsBackground";
import FloatingParticles from "@/components/background/FloatingParticles";
import ProgressDots from "@/components/ui/ProgressDots";
import BirthdayRevealScreen from "@/components/journey/screens/BirthdayRevealScreen";
import BirthdayLetterScreen from "@/components/journey/screens/BirthdayLetterScreen";
import ConfettiEndingScreen from "@/components/journey/screens/ConfettiEndingScreen";
import FinalSurpriseScreen from "@/components/journey/screens/FinalSurpriseScreen";
import GiftBoxScreen from "@/components/journey/screens/GiftBoxScreen";
import MemoryAlbumScreen from "@/components/journey/screens/MemoryAlbumScreen";
import MoonSectionScreen from "@/components/journey/screens/MoonSectionScreen";
import MorePhotosScreen from "@/components/journey/screens/MorePhotosScreen";
import PhotoMemoriesScreen from "@/components/journey/screens/PhotoMemoriesScreen";
import ShayariScreen from "@/components/journey/screens/ShayariScreen";
import WishesScreen from "@/components/journey/screens/WishesScreen";
import type { JourneyContent, JourneyStep } from "@/lib/types";
import { JOURNEY_STEPS } from "@/lib/types";

interface JourneyExperienceProps {
  content: JourneyContent;
}

export default function JourneyExperience({ content }: JourneyExperienceProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const currentStep = JOURNEY_STEPS[stepIndex];

  const [photoBatch1, photoBatch2, photoBatch3] = content.photoBatches;

  const shayari1 = content.shayari[0] ? [content.shayari[0]] : [];
  const shayari2 = content.shayari.slice(1, 3);
  const moonShayari = content.shayari[3];
  const wishesShayari = content.shayari[4];

  const goNext = useCallback(() => {
    setStepIndex((i) => Math.min(i + 1, JOURNEY_STEPS.length - 1));
  }, []);

  const restart = useCallback(() => {
    setStepIndex(0);
  }, []);

  const renderScreen = () => {
    switch (currentStep) {
      case "gift-box":
        return <GiftBoxScreen onNext={goNext} />;

      case "birthday-reveal":
        return <BirthdayRevealScreen onNext={goNext} />;

      case "shayari-1":
        return (
          <ShayariScreen
            stepKey="shayari-1"
            shayari={shayari1}
            title="Words from the Heart"
            subtitle="Poetry written just for you"
            onNext={goNext}
          />
        );

      case "photo-memories":
        return <PhotoMemoriesScreen photos={photoBatch1} onNext={goNext} />;

      case "shayari-2":
        return (
          <ShayariScreen
            stepKey="shayari-2"
            shayari={shayari2}
            title="More Poetry"
            subtitle="Every verse carries a piece of my heart"
            onNext={goNext}
          />
        );

      case "more-photos":
        return <MorePhotosScreen photos={photoBatch2} onNext={goNext} />;

      case "moon":
        return <MoonSectionScreen shayari={moonShayari} onNext={goNext} />;

      case "memory-album":
        return <MemoryAlbumScreen photos={photoBatch3} onNext={goNext} />;

      case "letter":
        return <BirthdayLetterScreen letter={content.letter} onNext={goNext} />;

      case "wishes":
        return <WishesScreen shayari={wishesShayari} onNext={goNext} />;

      case "final-surprise":
        return <FinalSurpriseScreen onNext={goNext} />;

      case "confetti":
        return <ConfettiEndingScreen onRestart={restart} />;

      default:
        return null;
    }
  };

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-navy-deep">
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(18,26,58,0.6) 0%, transparent 50%), linear-gradient(180deg, #040612 0%, #0a0e27 50%, #060818 100%)",
        }}
      />
      <StarsBackground />
      <FloatingParticles />

      <div className="relative z-10 h-full w-full">
        <AnimatePresence mode="wait">{renderScreen()}</AnimatePresence>
      </div>

      {currentStep !== "confetti" && <ProgressDots currentStep={currentStep} />}
    </div>
  );
}
