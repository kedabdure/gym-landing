"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const principles = [
  {
    number: "01",
    name: "DISCIPLINE",
    description:
      "Consistency over motivation. Results come to those who show up — not just when they feel like it, but especially when they don't.",
  },
  {
    number: "02",
    name: "COMMUNITY",
    description:
      "You push harder when you're not alone. At IRONFORGE, every member is part of something larger than their individual workout.",
  },
  {
    number: "03",
    name: "PERFORMANCE",
    description:
      "We don't do mediocre. Every program, every session, every piece of equipment is chosen to help you reach your next level.",
  },
  {
    number: "04",
    name: "PROGRESS",
    description:
      "The only competition is who you were yesterday. Track it. Own it. Outdo it. Repeat.",
  },
];

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      id="why-us"
      className="relative bg-[#131315] py-28 md:py-40 overflow-hidden"
      aria-label="Why train at IRONFORGE"
    >
      {/* Faint bg text */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20vw] text-[#0a0a0b] select-none pointer-events-none leading-none pr-8 hidden lg:block"
        aria-hidden="true"
      >
        WHY
      </div>

      <div className="px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="rule-accent" />
            <span className="text-label text-[#4a4a4a]">THE IRONFORGE DIFFERENCE</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="text-section font-display text-[#f0ede8]"
          >
            WHY TRAIN HERE?
          </motion.h2>
        </div>

        {/* Principles list */}
        <div className="space-y-0">
          {principles.map((principle, i) => (
            <motion.div
              key={principle.name}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                delay: 0.15 + i * 0.1,
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group border-b border-[#1f1f22] py-8 md:py-10 grid grid-cols-12 gap-4 md:gap-8 items-start cursor-default hover:bg-[#0a0a0b]/50 transition-colors duration-300 px-0"
            >
              {/* Number */}
              <div className="col-span-2 md:col-span-1">
                <span className="program-number text-[#2a2a2d] group-hover:text-[#ff5500] transition-colors duration-300">
                  {principle.number}
                </span>
              </div>

              {/* Name */}
              <div className="col-span-10 md:col-span-4 lg:col-span-3">
                <h3 className="font-display text-3xl md:text-5xl lg:text-6xl text-[#f0ede8] leading-none group-hover:text-[#ff5500] transition-colors duration-300">
                  {principle.name}
                </h3>
              </div>

              {/* Description */}
              <div className="col-span-12 md:col-span-7 lg:col-span-8 md:pl-8">
                <p className="text-[#8a8a8a] text-sm md:text-base leading-relaxed max-w-xl group-hover:text-[#f0ede8] transition-colors duration-500">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
