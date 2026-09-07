"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const facilityImages = [
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&q=85&fit=crop",
    alt: "IRONFORGE main training floor with premium equipment",
    label: "THE FORGE",
    large: true,
  },
  {
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=85&fit=crop",
    alt: "IRONFORGE free weights and strength zone",
    label: "STRENGTH ZONE",
    large: false,
  },
  {
    src: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&q=85&fit=crop",
    alt: "IRONFORGE combat and kickboxing area",
    label: "COMBAT AREA",
    large: false,
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=85&fit=crop",
    alt: "IRONFORGE group fitness area for aerobics",
    label: "GROUP SPACE",
    large: false,
  },
];

export default function Facility() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      id="facility"
      className="relative bg-[#131315] py-24 md:py-36 overflow-hidden"
      aria-label="IRONFORGE facility"
    >
      <div className="px-6 md:px-10 lg:px-16 max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="rule-accent" />
              <span className="text-label text-[#4a4a4a]">THE FACILITY</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              className="text-section font-display text-[#f0ede8]"
            >
              WHERE IT HAPPENS.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-[#8a8a8a] text-sm leading-relaxed max-w-xs"
          >
            Purpose-built spaces for every program.
            Every corner of IRONFORGE is designed to
            help you perform at your best.
          </motion.p>
        </div>

        {/* Editorial asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-4">
          {/* Large primary image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-7 relative group img-zoom-container rounded-sm overflow-hidden"
          >
            <div className="relative h-[50vh] md:h-[65vh]">
              <Image
                src={facilityImages[0].src}
                alt={facilityImages[0].alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 58vw, 100vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131315]/80 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-5 left-5 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <span className="rule-accent" />
                <span className="text-label text-[#f0ede8]">
                  {facilityImages[0].label}
                </span>
              </div>
              {/* Always visible label */}
              <div className="absolute bottom-5 left-5">
                <span className="font-display text-4xl text-white/10 select-none">
                  {facilityImages[0].label}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right column — 3 smaller images */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
            {facilityImages.slice(1).map((img, i) => (
              <motion.div
                key={img.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.25 + i * 0.1,
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="relative group img-zoom-container rounded-sm overflow-hidden"
              >
                <div className="relative h-40 md:h-48 lg:h-44">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-[#131315]/40 group-hover:bg-[#131315]/20 transition-colors duration-400" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-label text-white/60 group-hover:text-white transition-colors duration-300">
                      {img.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
