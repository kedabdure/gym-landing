"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const experienceSteps = [
  { label: "WALK IN.", sub: "Leave everything at the door." },
  { label: "TRAIN.", sub: "No excuses. Just work." },
  { label: "PUSH HARDER.", sub: "Your limit is further than you think." },
  { label: "WALK OUT STRONGER.", sub: "Every session changes you." },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      id="experience"
      className="relative bg-[#0a0a0b] py-32 md:py-40"
      aria-label="The IRONFORGE experience"
    >
      {/* Full bleed image with text overlay */}
      <div className="relative h-[60vh] md:h-[75vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.06 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1920&q=85&fit=crop"
            alt="Athlete training hard at IRONFORGE — pushing limits"
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b]/70 via-[#0a0a0b]/30 to-[#0a0a0b]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent" />
        </motion.div>

        {/* Overlaid large quote */}
        <div className="absolute inset-0 flex items-center px-6 md:px-10 lg:px-16">
          <motion.blockquote
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="font-display text-4xl md:text-6xl lg:text-7xl text-[#f0ede8] leading-tight">
              &ldquo;THE ONLY WORKOUT
              <br />
              YOU REGRET IS THE ONE
              <br />
              <span className="text-[#ff5500]">YOU DIDN&apos;T DO.&rdquo;</span>
            </p>
          </motion.blockquote>
        </div>
      </div>

      {/* Steps sequence */}
      <div className="px-6 md:px-10 lg:px-16 mt-20 md:mt-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="rule-accent" />
          <span className="text-label text-[#8a8a8a]">THE SESSION</span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#1f1f22]">
          {experienceSteps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              className={`p-8 md:p-10 group hover:bg-[#131315] transition-colors duration-300 cursor-default ${
                i < experienceSteps.length - 1
                  ? "border-b sm:border-b-0 sm:border-r border-[#1f1f22]"
                  : ""
              }`}
            >
              <div className="font-display text-5xl text-[#3a3a3e] group-hover:text-[#ff5500] transition-colors duration-300 mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-display text-xl md:text-2xl text-[#f0ede8] leading-tight mb-2">
                {step.label}
              </div>
              <p className="text-[#a1a1aa] text-sm leading-relaxed group-hover:text-[#f0ede8] transition-colors duration-300">
                {step.sub}
              </p>
              <div className="mt-4 w-0 h-px bg-[#ff5500] group-hover:w-8 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
