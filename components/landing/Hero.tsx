"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";

const headlineLines = [
  "YOUR STRONGEST",
  "SELF STARTS",
  "NOW."
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  // Single unified overlay: fades in as the hero scrolls out — one clean cover, no double-fade
  const overlayOpacity = useTransform(scrollYProgress, [0.3, 0.85], [0, 1]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[100dvh] pt-32 pb-20 px-6 md:px-10 lg:px-16 flex flex-col justify-end overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: imgScale, y: imgY }}
      >
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85&fit=crop"
          alt="IRONFORGE training floor — powerful, cinematic gym environment"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={85}
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b]/90 via-[#0a0a0b]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-[#0a0a0b]/40" />
      </motion.div>

      {/* Single scroll-driven fade-to-black overlay — fires once, cleanly */}
      <motion.div
        className="absolute inset-0 z-20 bg-[#0a0a0b] pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content — no scroll-driven opacity here to avoid double fade */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-end"
      >
        {/* Small label — top left */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3 mb-6 md:mb-8"
        >
          <span className="rule-accent" />
          <span className="text-label text-[#8a8a8a]">
            WHERE STRENGTH IS FORGED
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="mb-6 md:mb-8">
          {headlineLines.map((line, i) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
              transition={{
                delay: 0.6 + i * 0.12,
                duration: 0.6,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="overflow-hidden"
            >
              <span className="text-hero text-[#f0ede8] font-display block leading-[0.9] tracking-tight">
                {line}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Sub copy + CTAs + Program indicator */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-4 border-t border-[#1f1f22]/80"
        >
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full">
            <div className="max-w-xs">
              <p className="text-[#8a8a8a] text-sm md:text-base leading-relaxed">
                Four specialized programs. One destination.
                <br />
                Unlimited human potential.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/register"
                id="hero-join-cta"
                className="text-label bg-[#ff5500] text-[#0a0a0b] px-7 py-3.5 rounded-sm hover:bg-[#d94800] transition-all duration-200 font-semibold tracking-widest inline-flex items-center justify-center gap-2 group w-full sm:w-auto whitespace-nowrap"
              >
                JOIN NOW
                <ChevronRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
              <a
                href="#programs"
                id="hero-programs-cta"
                className="text-label text-[#8a8a8a] hover:text-[#f0ede8] transition-colors duration-200 border border-[#2a2a2d] px-7 py-3.5 rounded-sm hover:border-[#4a4a4a] inline-flex items-center justify-center w-full sm:w-auto whitespace-nowrap text-center"
              >
                EXPLORE PROGRAMS
              </a>
            </div>
          </div>

          {/* Program count badge */}
          <div className="hidden sm:flex items-center gap-4 self-start md:self-end">
            <div className="text-right">
              <div className="font-display text-4xl text-[#ff5500] leading-none">04</div>
              <div className="text-label text-[#8a8a8a] mt-0.5">PROGRAMS</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="hidden md:flex absolute bottom-6 right-10 z-10 items-center gap-2"
      >
        <span className="text-label text-[#4a4a4a]">SCROLL</span>
        <ArrowDown size={14} className="text-[#4a4a4a] scroll-indicator" />
      </motion.div>

      {/* Bottom noise grain */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0b] to-transparent z-10" />
    </section>
  );
}
