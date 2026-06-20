import fs from "fs";
import path from "path";
import type { JourneyContent, LetterContent, ShayariItem } from "./types";

const PUBLIC_DIR = path.join(process.cwd(), "public");

function readTextFile(filePath: string): string {
  return fs.readFileSync(filePath, "utf-8").trim();
}

function loadPhotos(): string[] {
  const photosDir = path.join(PUBLIC_DIR, "photos");
  if (!fs.existsSync(photosDir)) return [];

  const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

  return fs
    .readdirSync(photosDir)
    .filter((file) => imageExtensions.has(path.extname(file).toLowerCase()))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)?.[0] ?? "0", 10);
      const numB = parseInt(b.match(/\d+/)?.[0] ?? "0", 10);
      if (numA !== numB) return numA - numB;
      return a.localeCompare(b);
    })
    .map((file) => `/photos/${file}`);
}

function loadShayari(): ShayariItem[] {
  const shayariDir = path.join(PUBLIC_DIR, "shayari");
  if (!fs.existsSync(shayariDir)) return [];

  return fs
    .readdirSync(shayariDir)
    .filter((file) => file.endsWith(".txt"))
    .sort()
    .map((filename) => {
      const content = readTextFile(path.join(shayariDir, filename));
      const lines = content
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter(Boolean);

      return {
        id: filename.replace(".txt", ""),
        filename,
        content,
        lines,
      };
    });
}

function loadLetter(): LetterContent {
  const letterPath = path.join(PUBLIC_DIR, "letter", "letter.txt");
  if (!fs.existsSync(letterPath)) {
    return { content: "", paragraphs: [] };
  }

  const content = readTextFile(letterPath);
  const paragraphs = content
    .split(/\r?\n\r?\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return { content, paragraphs };
}

export function getJourneyContent(): JourneyContent {
  const photos = loadPhotos();
  const batches = splitPhotos(photos, 3);

  return {
    photos,
    photoBatches: [batches[0], batches[1], batches[2]],
    shayari: loadShayari(),
    letter: loadLetter(),
  };
}

export function splitPhotos(photos: string[], parts: number): string[][] {
  if (photos.length === 0 || parts <= 0) return Array.from({ length: parts }, () => []);

  const chunkSize = Math.ceil(photos.length / parts);
  const result: string[][] = [];

  for (let i = 0; i < parts; i++) {
    result.push(photos.slice(i * chunkSize, (i + 1) * chunkSize));
  }

  return result;
}
