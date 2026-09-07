import type { Program } from "./types";

export const programs: Program[] = [
  {
    id: "gym",
    number: "01",
    name: "GYM",
    slug: "gym",
    tagline: "Build the foundation. Own the floor.",
    description:
      "The original pursuit. Strength training, conditioning, and personal progress on your terms. Whether you're lifting for the first time or chasing a new personal best, this is where you build the body and mindset that carry you through everything else.",
    benefits: [
      "Full strength & conditioning access",
      "Free weights, machines & functional zones",
      "Personal progress tracking",
      "Expert coaching on demand",
      "Programs for all levels",
    ],
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=85&fit=crop",
    accent: "#ff5500",
  },
  {
    id: "kickboxing",
    number: "02",
    name: "KICKBOXING",
    slug: "kickboxing",
    tagline: "Hit harder. Move faster. Feel unstoppable.",
    description:
      "Combat meets conditioning. Kickboxing at IRONFORGE is where discipline is built one combination at a time. You'll gain technique, explosive fitness, and a confidence that follows you out of the gym and into every room you walk into.",
    benefits: [
      "Technique & combination training",
      "Full-body conditioning",
      "Core strength & agility",
      "Mental discipline & focus",
      "Suitable for all skill levels",
    ],
    image:
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1600&q=85&fit=crop",
    accent: "#ff5500",
  },
  {
    id: "aerobics",
    number: "03",
    name: "AEROBICS",
    slug: "aerobics",
    tagline: "Move with energy. Train with purpose.",
    description:
      "High-energy group fitness that makes cardio something you look forward to. Aerobics at IRONFORGE fuses movement, rhythm, and endurance into sessions that push your limits and leave you feeling alive — every single time.",
    benefits: [
      "Cardiovascular endurance training",
      "Full-body movement patterns",
      "High-energy group sessions",
      "Improved stamina & coordination",
      "Energizing, motivating atmosphere",
    ],
    image:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=1600&q=85&fit=crop",
    accent: "#ff5500",
  },
  {
    id: "taekwondo",
    number: "04",
    name: "TAEKWONDO",
    slug: "taekwondo",
    tagline: "Discipline forged. Character built.",
    description:
      "More than a martial art — Taekwondo is a complete system of physical and mental development. Precision, power, and respect define every session. You'll leave stronger, sharper, and more in control than when you arrived.",
    benefits: [
      "Traditional & modern technique",
      "Flexibility & explosive power",
      "Mental discipline & focus",
      "Personal development & respect",
      "Structured progression system",
    ],
    image:
      "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1600&q=85&fit=crop",
    accent: "#ff5500",
  },
];

export function getProgramById(id: string): Program | undefined {
  return programs.find((p) => p.id === id);
}

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
