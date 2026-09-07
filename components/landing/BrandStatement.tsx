"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const lines = ["THIS ISN'T", "JUST A GYM."];

export default function BrandStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      ref={ref}
      id="brand-statement"
      className="relative py-32 md:py-48 px-6 md:px-10 lg:px-16 overflow-hidden bg-[#0a0a0b]"
      aria-label="Brand statement"
    >
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#e8ff00]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="rule-accent" />
          <span className="text-label text-[#8a8a8a]">THE IRONFORGE PHILOSOPHY</span>
        </motion.div>

        {/* Main massive headline */}
        <div className="mb-10 md:mb-14">
          {lines.map((line, i) => (
            <div key={line} className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%", opacity: 0 }}
                animate={inView ? { y: "0%", opacity: 1 } : {}}
                transition={{
                  delay: 0.15 + i * 0.12,
                  duration: 0.75,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="text-display text-[#f0ede8] font-display block"
              >
                {line}
              </motion.h2>
            </div>
          ))}
        </div>

        {/* Horizontal rule */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.45, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="h-px bg-[#2a2a2d] mb-10 md:mb-14"
        />

        {/* Supporting paragraph — max width for readability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55, duration: 0.7, ease: "easeOut" }}
            className="text-[#a1a1aa] text-base md:text-lg leading-relaxed max-w-md"
          >
            It&apos;s where discipline becomes strength,
            movement becomes confidence, and every drop
            of effort becomes the person you&apos;ve always
            wanted to be.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.65, duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-4 md:items-end"
          >
            {["TRAIN WITH PURPOSE", "PUSH YOUR LIMITS", "BECOME MORE"].map(
              (principle, i) => (
                <div key={principle} className="flex items-center gap-4">
                  <span className="font-display text-4xl text-[#3f3f46]">
                    0{i + 1}
                  </span>
                  <span className="text-label text-[#f0ede8]">{principle}</span>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
