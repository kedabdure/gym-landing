"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Community() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      id="community"
      className="relative bg-[#0a0a0b] overflow-hidden"
      aria-label="The IRONFORGE community"
    >
      {/* Full-viewport community image */}
      <div className="relative h-[75vh] min-h-[500px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=85&fit=crop"
            alt="IRONFORGE community — members training together"
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={85}
          />
          {/* Dark gradient layering */}
          <div className="absolute inset-0 bg-[#0a0a0b]/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b] via-transparent to-[#0a0a0b]" />
        </motion.div>

        {/* Center text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="overflow-hidden mb-2">
              <h2 className="text-display md:text-hero font-display text-[#f0ede8] leading-none">
                STRONGER
              </h2>
            </div>
            <div className="overflow-hidden">
              <h2 className="text-display md:text-hero font-display text-[#ff5500] leading-none">
                TOGETHER.
              </h2>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-[#a1a1aa] text-base md:text-lg mt-6 max-w-md leading-relaxed"
          >
            Train with people who push you.
            <br />
            Grow beyond what you thought possible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8"
          >
            <Link
              href="/register"
              id="community-join-cta"
              className="text-label bg-[#ff5500] text-[#0a0a0b] px-8 py-4 rounded-sm hover:bg-[#d94800] transition-all duration-200 font-semibold tracking-widest inline-flex items-center gap-2 group"
            >
              JOIN THE COMMUNITY
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Program quick-links below */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#1f1f22]">
        {["GYM", "KICKBOXING", "AEROBICS", "TAEKWONDO"].map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
            className={`py-6 px-8 text-center border-[#1f1f22] hover:bg-[#131315] transition-colors duration-300 group ${
              i < 3 ? "border-r" : ""
            } ${i < 2 ? "border-b md:border-b-0" : ""}`}
          >
            <Link
              href={`/register?program=${name.toLowerCase()}`}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-label text-[#8a8a8a] group-hover:text-[#ff5500] transition-colors duration-200">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-xl text-[#c4c0b8] group-hover:text-[#f0ede8] transition-colors duration-200">
                {name}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
