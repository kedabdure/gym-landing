"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      id="join"
      className="relative bg-[#0a0a0b] py-32 md:py-48 px-6 md:px-10 lg:px-16 overflow-hidden grain-overlay"
      aria-label="Join IRONFORGE"
    >
      {/* Accent glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#ff5500]/5 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — headline */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="rule-accent" />
              <span className="text-label text-[#4a4a4a]">START TODAY</span>
            </motion.div>

            <div className="overflow-hidden mb-2">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{ delay: 0.1, duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
                className="text-display font-display text-[#f0ede8] leading-none"
              >
                YOUR NEXT
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-2">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{ delay: 0.18, duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
                className="text-display font-display text-[#ff5500] leading-none"
              >
                LEVEL
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{ delay: 0.26, duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
                className="text-display font-display text-[#f0ede8] leading-none"
              >
                STARTS HERE.
              </motion.h2>
            </div>
          </div>

          {/* Right — sub-copy + CTAs */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-[#8a8a8a] text-base md:text-lg leading-relaxed mb-10 max-w-sm"
            >
              Choose your program. Show up.
              Put in the work. The rest takes care of itself.
            </motion.p>

            {/* CTA steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="space-y-3 mb-10"
            >
              {[
                "Choose your program",
                "Fill in your details",
                "We&apos;ll reach out with next steps",
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="w-6 h-6 rounded-full border border-[#ff5500] text-[#ff5500] text-xs flex items-center justify-center font-semibold flex-shrink-0">
                    {i + 1}
                  </span>
                  <span
                    className="text-[#8a8a8a] text-sm"
                    dangerouslySetInnerHTML={{ __html: step }}
                  />
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/register"
                id="final-cta-join"
                className="text-label bg-[#ff5500] text-[#0a0a0b] px-8 py-4 rounded-sm hover:bg-[#d94800] transition-all duration-200 font-semibold tracking-widest inline-flex items-center justify-center gap-2 group"
              >
                JOIN NOW
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
              <a
                href="#programs"
                id="final-cta-programs"
                className="text-label text-[#8a8a8a] border border-[#2a2a2d] px-8 py-4 rounded-sm hover:border-[#8a8a8a] hover:text-[#f0ede8] transition-all duration-200 tracking-widest inline-flex items-center justify-center"
              >
                EXPLORE PROGRAMS
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="mt-20 md:mt-28 h-px bg-gradient-to-r from-[#ff5500] via-[#ff5500]/30 to-transparent"
        />
      </div>
    </section>
  );
}
