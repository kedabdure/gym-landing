"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { RegistrationData } from "@/lib/types";
import { programs } from "@/lib/programs";
import { CheckCircle, ArrowRight } from "lucide-react";

interface RegistrationSuccessProps {
  data: RegistrationData;
}

export default function RegistrationSuccess({ data }: RegistrationSuccessProps) {
  const program = programs.find((p) => p.id === data.program);

  const details = [
    { label: "PROGRAM", value: program?.name ?? data.program },
    { label: "NAME", value: data.fullName },
    { label: "EMAIL", value: data.email },
    { label: "PHONE", value: data.phone },
  ];

  return (
    <div className="min-h-dvh bg-[#0a0a0b] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-lg text-center">
        {/* Success icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.6,
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="flex justify-center mb-8"
        >
          <div className="w-20 h-20 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/30 flex items-center justify-center">
            <CheckCircle size={36} className="text-[#ff5500]" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="font-display text-display text-[#f0ede8] leading-none"
          >
            YOU&apos;RE IN.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="text-[#8a8a8a] text-base md:text-lg leading-relaxed mb-10"
        >
          Your journey starts now.
          <br />
          Welcome to IRONFORGE.
        </motion.p>

        {/* Summary card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="bg-[#131315] border border-[#1f1f22] rounded-sm p-6 md:p-8 mb-8 text-left"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="rule-accent" />
            <span className="text-label text-[#4a4a4a]">REGISTRATION SUMMARY</span>
          </div>
          <div className="space-y-4">
            {details.map((detail) => (
              <div
                key={detail.label}
                className="flex items-center justify-between gap-4 py-3 border-b border-[#1f1f22] last:border-0"
              >
                <span className="text-label text-[#4a4a4a]">{detail.label}</span>
                <span
                  className={`text-sm font-medium ${
                    detail.label === "PROGRAM"
                      ? "font-display text-xl text-[#ff5500]"
                      : "text-[#f0ede8]"
                  }`}
                >
                  {detail.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Next steps message */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="bg-[#ff5500]/5 border border-[#ff5500]/20 rounded-sm p-5 mb-10"
        >
          <p className="text-[#8a8a8a] text-sm leading-relaxed">
            <span className="text-[#ff5500] font-medium">What happens next?</span>
            <br />
            Our team will reach out to you within 24 hours with everything
            you need to begin your training at IRONFORGE.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            id="success-back-home"
            className="text-label bg-[#ff5500] text-[#0a0a0b] px-8 py-4 rounded-sm hover:bg-[#d94800] transition-all duration-200 font-semibold tracking-widest inline-flex items-center justify-center gap-2 group"
          >
            BACK TO HOME
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            href="/"
            className="text-label text-[#8a8a8a] border border-[#2a2a2d] px-8 py-4 rounded-sm hover:border-[#4a4a4a] hover:text-[#f0ede8] transition-all duration-200 tracking-widest inline-flex items-center justify-center"
          >
            EXPLORE PROGRAMS
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
