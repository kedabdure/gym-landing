"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { programs } from "@/lib/programs";
import { Check, ArrowRight } from "lucide-react";

interface ProgramSelectorProps {
  selectedProgram?: string;
  onSelect: (programId: string) => void;
}

export default function ProgramSelector({
  selectedProgram,
  onSelect,
}: ProgramSelectorProps) {
  return (
    <div className="min-h-[calc(100dvh-4rem)] bg-[#0a0a0b] flex flex-col">
      {/* Header */}
      <div className="px-6 md:px-10 lg:px-16 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="rule-accent" />
          <span className="text-label text-[#4a4a4a]">STEP 01 OF 02</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="font-display text-section text-[#f0ede8]"
        >
          CHOOSE YOUR
          <br />
          <span className="text-[#ff5500]">PROGRAM.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[#8a8a8a] text-sm mt-4 max-w-sm"
        >
          Select the program that matches your goals. You can always explore others later.
        </motion.p>
      </div>

      {/* Program grid */}
      <div className="flex-1 px-6 md:px-10 lg:px-16 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {programs.map((program, i) => {
            const isSelected = selectedProgram === program.id;
            return (
              <motion.button
                key={program.id}
                id={`select-program-${program.id}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.55 }}
                onClick={() => onSelect(program.id)}
                className={`relative group text-left rounded-sm overflow-hidden border-2 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#ff5500] focus-visible:outline-offset-2 ${
                  isSelected
                    ? "border-[#ff5500]"
                    : "border-[#1f1f22] hover:border-[#2a2a2d]"
                }`}
                aria-label={`Select ${program.name} program`}
                aria-pressed={isSelected}
              >
                {/* Background image */}
                <div className="relative h-52 sm:h-60 xl:h-64">
                  <Image
                    src={program.image}
                    alt={`${program.name} training`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                    quality={80}
                  />
                  <div
                    className={`absolute inset-0 transition-colors duration-300 ${
                      isSelected
                        ? "bg-[#0a0a0b]/50"
                        : "bg-[#0a0a0b]/60 group-hover:bg-[#0a0a0b]/40"
                    }`}
                  />

                  {/* Selected indicator */}
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="absolute top-4 right-4 w-8 h-8 bg-[#ff5500] rounded-full flex items-center justify-center"
                    >
                      <Check size={14} strokeWidth={3} className="text-[#0a0a0b]" />
                    </motion.div>
                  )}

                  {/* Program number */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`program-number transition-colors duration-300 ${
                        isSelected ? "text-[#ff5500]" : "text-[#4a4a4a]"
                      }`}
                    >
                      {program.number}
                    </span>
                  </div>
                </div>

                {/* Content below image */}
                <div className="bg-[#131315] p-5">
                  <h2
                    className={`font-display text-2xl transition-colors duration-300 ${
                      isSelected ? "text-[#ff5500]" : "text-[#f0ede8]"
                    }`}
                  >
                    {program.name}
                  </h2>
                  <p className="text-[#4a4a4a] text-xs leading-relaxed mt-2 line-clamp-2">
                    {program.tagline}
                  </p>

                  <div
                    className={`mt-4 flex items-center gap-2 text-label transition-colors duration-300 ${
                      isSelected ? "text-[#ff5500]" : "text-[#2a2a2d] group-hover:text-[#4a4a4a]"
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check size={12} strokeWidth={3} />
                        <span>SELECTED</span>
                      </>
                    ) : (
                      <>
                        <span>SELECT</span>
                        <ArrowRight size={12} />
                      </>
                    )}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Back to home */}
      <div className="px-6 md:px-10 lg:px-16 pb-8">
        <Link
          href="/"
          className="text-label text-[#4a4a4a] hover:text-[#8a8a8a] transition-colors"
        >
          ← BACK TO HOME
        </Link>
      </div>
    </div>
  );
}
