import { Suspense } from "react";
import type { Metadata } from "next";
import RegistrationFlow from "@/components/registration/RegistrationFlow";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Register — IRONFORGE Fitness Center",
  description:
    "Register for IRONFORGE fitness programs: Gym, Kickboxing, Aerobics, or Taekwondo. Join today and start your transformation.",
};

export default function RegisterPage() {
  return (
    <main>
      {/* Minimal registration nav */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-[#0a0a0b] border-b border-[#1f1f22] flex items-center justify-between px-6 md:px-10 h-16">
        <Link
          href="/"
          className="font-display text-xl tracking-widest text-[#f0ede8] hover:text-[#e8ff00] transition-colors"
          aria-label="Back to IRONFORGE home"
        >
          IRONFORGE
        </Link>
      </div>

      <Suspense
        fallback={
          <div className="min-h-dvh bg-[#0a0a0b] flex items-center justify-center">
            <div className="text-label text-[#4a4a4a] animate-pulse">
              LOADING...
            </div>
          </div>
        }
      >
        <RegistrationFlow />
      </Suspense>
    </main>
  );
}
