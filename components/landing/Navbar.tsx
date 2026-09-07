"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "About", href: "#why-us" },
  { label: "Facility", href: "#facility" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScroll = useRef(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 60);
      setHidden(current > lastScroll.current && current > 300);
      lastScroll.current = current;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden && !menuOpen ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0b]/90 backdrop-blur-md border-b border-[#2a2a2d]"
            : "bg-transparent"
        }`}
      >
        <nav
          className={`mx-auto flex items-center justify-between px-6 md:px-10 transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-2xl tracking-widest text-[#f0ede8] hover:text-[#ff5500] transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#ff5500] focus-visible:outline-offset-4"
            aria-label="IRONFORGE — Home"
          >
            IRONFORGE
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-label text-[#8a8a8a] hover:text-[#f0ede8] transition-colors duration-200 relative group cursor-pointer"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#ff5500] group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/register"
              id="nav-join-cta"
              className="text-label bg-[#ff5500] text-[#0a0a0b] px-5 py-2.5 rounded-sm hover:bg-[#d94800] transition-all duration-200 font-semibold tracking-widest cursor-pointer"
            >
              JOIN NOW
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#f0ede8] p-2 rounded-sm hover:text-[#ff5500] transition-colors cursor-pointer"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#0a0a0b] flex flex-col items-start justify-center px-8"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Accent line */}
            <div className="rule-accent mb-10" />

            <nav aria-label="Mobile navigation">
              <ul className="space-y-6" role="list">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-section text-[#f0ede8] hover:text-[#ff5500] transition-colors duration-200 block cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + navLinks.length * 0.07 + 0.05, duration: 0.4 }}
              className="mt-12"
            >
              <Link
                href="/register"
                onClick={() => setMenuOpen(false)}
                className="text-label bg-[#ff5500] text-[#0a0a0b] px-8 py-4 rounded-sm hover:bg-[#d94800] transition-colors inline-block font-semibold tracking-widest cursor-pointer"
              >
                JOIN NOW
              </Link>
            </motion.div>

            <div className="absolute bottom-8 left-8 text-label text-[#4a4a4a]">
              IRONFORGE FITNESS
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
