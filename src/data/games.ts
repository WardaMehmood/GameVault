import shadowStrike from "@/assets/game-shadow-strike.jpg";
import cyberHunter from "@/assets/game-cyber-hunter.jpg";
import neonRacing from "@/assets/game-neon-racing.jpg";
import pixelBlast from "@/assets/game-pixel-blast.jpg";
import brainTease from "@/assets/game-brain-tease.jpg";
import horror from "@/assets/game-horror.jpg";
import puzzle from "@/assets/game-puzzle.jpg";
import mech from "@/assets/game-mech.jpg";
import ninja from "@/assets/game-ninja.jpg";

export type Game = {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  driveLink: string;
  developer: string;
  description?: string;
  screenshots?: string[];
};

const defaultDescription = "Experience an unforgettable journey with stunning graphics, immersive gameplay, and a compelling storyline. Dive into a world full of challenges, unlock new achievements, and compete with your friends for the highest scores. Download now and start playing!";

export const GAMES: Game[] = [
  { id: "1", title: "Shadow Strike", category: "Action", thumbnail: shadowStrike, driveLink: "#", developer: "Vortex Studios", description: defaultDescription, screenshots: [shadowStrike, cyberHunter, ninja] },
  { id: "2", title: "Cyber Hunter", category: "Action", thumbnail: cyberHunter, driveLink: "#", developer: "Neon Labs", description: defaultDescription, screenshots: [cyberHunter, shadowStrike, mech] },
  { id: "3", title: "Neon Ninja", category: "Action", thumbnail: ninja, driveLink: "#", developer: "Pixel Forge", description: defaultDescription, screenshots: [ninja, mech, shadowStrike] },
  { id: "4", title: "Mech Riot", category: "Action", thumbnail: mech, driveLink: "#", developer: "IronCore", description: defaultDescription, screenshots: [mech, ninja, cyberHunter] },
  { id: "5", title: "Pixel Blast", category: "Arcade", thumbnail: pixelBlast, driveLink: "#", developer: "RetroByte", description: defaultDescription, screenshots: [pixelBlast, brainTease, puzzle] },
  { id: "6", title: "Arcade Fury", category: "Arcade", thumbnail: mech, driveLink: "#", developer: "BitBoom", description: defaultDescription, screenshots: [mech, pixelBlast, neonRacing] },
  { id: "7", title: "Block Rush", category: "Arcade", thumbnail: pixelBlast, driveLink: "#", developer: "Tinycade", description: defaultDescription, screenshots: [pixelBlast, puzzle, brainTease] },
  { id: "8", title: "Brain Tease", category: "Puzzle", thumbnail: brainTease, driveLink: "#", developer: "Mindwave", description: defaultDescription, screenshots: [brainTease, puzzle, pixelBlast] },
  { id: "9", title: "Cube Logic", category: "Puzzle", thumbnail: puzzle, driveLink: "#", developer: "Geometry Co.", description: defaultDescription, screenshots: [puzzle, brainTease, neonRacing] },
  { id: "10", title: "Synapse", category: "Puzzle", thumbnail: brainTease, driveLink: "#", developer: "Thinkbox", description: defaultDescription, screenshots: [brainTease, puzzle, horror] },
  { id: "11", title: "Dread Hall", category: "Horror", thumbnail: horror, driveLink: "#", developer: "Nightmare Inc", description: defaultDescription, screenshots: [horror, shadowStrike, cyberHunter] },
  { id: "12", title: "Lost Signal", category: "Horror", thumbnail: horror, driveLink: "#", developer: "Static Games", description: defaultDescription, screenshots: [horror, mech, ninja] },
  { id: "13", title: "Neon Racing", category: "Racing", thumbnail: neonRacing, driveLink: "#", developer: "Velocity X", description: defaultDescription, screenshots: [neonRacing, cyberHunter, shadowStrike] },
  { id: "14", title: "Hyper Drift", category: "Racing", thumbnail: neonRacing, driveLink: "#", developer: "Apex Lab", description: defaultDescription, screenshots: [neonRacing, pixelBlast, brainTease] },
];

export const CATEGORIES = ["Action", "Arcade", "Puzzle", "Horror", "Racing"] as const;
