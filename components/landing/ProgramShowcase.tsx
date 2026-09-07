"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { programs } from "@/lib/programs";
import { ArrowRight } from "lucide-react";

export default function ProgramShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const activeProgram = programs[activeIndex] ?? programs[0];

  const handleSelect = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section
      ref={ref}
      id="programs"
      className="relative bg-[#0a0a0b] overflow-hidden"
      aria-label="Training programs"
    >
      {/* Section header */}
      <div className="px-6 md:px-10 lg:px-16 pt-20 pb-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="rule-accent" />
          <span className="text-label text-[#4a4a4a]">CHOOSE YOUR PATH</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="text-section font-display text-[#f0ede8]"
        >
          TRAIN YOUR WAY.
        </motion.h2>
      </div>

      {/* Desktop Layout — sidebar nav + full image */}
      <div className="hidden lg:flex h-[85vh] min-h-[600px]">
        {/* Left — Program selector */}
        <div className="w-[340px] xl:w-[380px] flex flex-col justify-center px-10 xl:px-16 py-16 border-r border-[#1f1f22] flex-shrink-0">
          <ul className="space-y-1" role="list">
            {programs.map((program, i) => (
              <li key={program.id}>
                <button
                  id={`program-tab-${program.id}`}
                  onClick={() => handleSelect(i)}
                  onMouseEnter={() => handleSelect(i)}
                  className={`w-full text-left py-5 border-b transition-all duration-300 group flex items-start gap-5 ${
                    activeIndex === i
                      ? "border-[#ff5500]"
                      : "border-[#1f1f22] hover:border-[#2a2a2d]"
                  }`}
                  aria-selected={activeIndex === i}
                  aria-controls="program-display"
                >
                  <span
                    className={`program-number transition-colors duration-300 mt-1 ${
                      activeIndex === i ? "text-[#ff5500]" : "text-[#2a2a2d]"
                    }`}
                  >
                    {program.number}
                  </span>
                  <div className="flex-1">
                    <div
                      className={`font-display text-3xl xl:text-4xl leading-none transition-colors duration-300 ${
                        activeIndex === i
                          ? "text-[#f0ede8]"
                          : "text-[#4a4a4a] group-hover:text-[#8a8a8a]"
                      }`}
                    >
                      {program.name}
                    </div>
                    <AnimatePresence>
                      {activeIndex === i && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="text-[#8a8a8a] text-xs leading-relaxed mt-2 overflow-hidden"
                        >
                          {program.tagline}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <ArrowRight
                    size={14}
                    className={`mt-2 flex-shrink-0 transition-all duration-300 ${
                      activeIndex === i
                        ? "text-[#ff5500] translate-x-0 opacity-100"
                        : "text-[#2a2a2d] -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <motion.div
            key={activeProgram.id + "-cta"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-8"
          >
            <Link
              href={`/register?program=${activeProgram.id}`}
              id={`program-register-${activeProgram.id}`}
              className="text-label bg-[#ff5500] text-[#0a0a0b] px-6 py-3 rounded-sm hover:bg-[#d94800] transition-colors font-semibold tracking-widest inline-flex items-center gap-2 group"
            >
              REGISTER — {activeProgram.name}
              <ArrowRight
                size={12}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </motion.div>
        </div>

        {/* Right — Full image display */}
        <div
          id="program-display"
          className="flex-1 relative overflow-hidden"
          aria-live="polite"
          aria-atomic="true"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProgram.id}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0"
            >
              <Image
                src={activeProgram.image}
                alt={`${activeProgram.name} program at IRONFORGE`}
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 70vw, 100vw"
                quality={85}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b]/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent" />

              {/* Program info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-10 xl:p-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <p className="text-[#8a8a8a] text-sm leading-relaxed max-w-lg">
                    {activeProgram.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {activeProgram.benefits.slice(0, 3).map((benefit) => (
                      <span
                        key={benefit}
                        className="text-label text-[#8a8a8a] border border-[#2a2a2d] px-3 py-1.5 rounded-sm"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Large program name watermark */}
              <div className="absolute top-6 right-6 xl:top-10 xl:right-10 text-right pointer-events-none">
                <span className="font-display text-[8rem] xl:text-[10rem] leading-none text-white/5 select-none">
                  {activeProgram.name}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Layout — stacked cards */}
      <div className="lg:hidden px-6 md:px-10 pb-20 mt-12 space-y-4">
        {programs.map((program, i) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
          >
            <button
              id={`program-mobile-${program.id}`}
              onClick={() => handleSelect(activeIndex === i ? -1 : i)}
              className={`w-full text-left rounded-sm overflow-hidden border transition-all duration-300 ${
                activeIndex === i
                  ? "border-[#ff5500]"
                  : "border-[#1f1f22]"
              }`}
              aria-expanded={activeIndex === i}
            >
              <div className="relative">
                <div className="h-48 relative">
                  <Image
                    src={program.image}
                    alt={`${program.name} program`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-[#0a0a0b]/50" />
                  <div className="absolute bottom-4 left-4 flex items-end gap-3">
                    <span className="program-number text-[#ff5500]">
                      {program.number}
                    </span>
                    <span className="font-display text-3xl text-[#f0ede8]">
                      {program.name}
                    </span>
                  </div>
                </div>

                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden bg-[#131315]"
                    >
                      <div className="p-4">
                        <p className="text-[#8a8a8a] text-sm leading-relaxed mb-4">
                          {program.tagline}
                        </p>
                        <p className="text-[#8a8a8a] text-xs leading-relaxed mb-5">
                          {program.description}
                        </p>
                        <Link
                          href={`/register?program=${program.id}`}
                          className="text-label bg-[#ff5500] text-[#0a0a0b] px-5 py-2.5 rounded-sm font-semibold tracking-widest inline-flex items-center gap-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          REGISTER
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
