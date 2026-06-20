export type JourneyStep =
  | "gift-box"
  | "birthday-reveal"
  | "shayari-1"
  | "photo-memories"
  | "shayari-2"
  | "more-photos"
  | "moon"
  | "memory-album"
  | "letter"
  | "wishes"
  | "final-surprise"
  | "confetti";

export interface ShayariItem {
  id: string;
  filename: string;
  content: string;
  lines: string[];
}

export interface LetterContent {
  content: string;
  paragraphs: string[];
}

export interface JourneyContent {
  photos: string[];
  photoBatches: [string[], string[], string[]];
  shayari: ShayariItem[];
  letter: LetterContent;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  "gift-box",
  "birthday-reveal",
  "shayari-1",
  "photo-memories",
  "shayari-2",
  "more-photos",
  "moon",
  "memory-album",
  "letter",
  "wishes",
  "final-surprise",
  "confetti",
];

export const STEP_LABELS: Record<JourneyStep, string> = {
  "gift-box": "A Gift Awaits",
  "birthday-reveal": "Happy Birthday",
  "shayari-1": "Words from the Heart",
  "photo-memories": "Precious Memories",
  "shayari-2": "Poetry for You",
  "more-photos": "More Moments",
  moon: "Under the Moon",
  "memory-album": "Our Album",
  letter: "A Letter for You",
  wishes: "Birthday Wishes",
  "final-surprise": "One Last Thing",
  confetti: "Celebrate",
};
