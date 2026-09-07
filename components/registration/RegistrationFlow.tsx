"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import type { RegistrationData, FormStep } from "@/lib/types";
import { programs } from "@/lib/programs";
import ProgramSelector from "./ProgramSelector";
import PersonalInfo from "./PersonalInfo";
import RegistrationSuccess from "./RegistrationSuccess";
import { submitRegistration } from "@/lib/actions";

const stepLabels = [
  { step: "program", label: "01 — Choose Program" },
  { step: "info", label: "02 — Your Details" },
  { step: "success", label: "03 — Confirmed" },
];

export default function RegistrationFlow() {
  const searchParams = useSearchParams();
  const programParam = searchParams.get("program");

  const [currentStep, setCurrentStep] = useState<FormStep>("program");
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Partial<RegistrationData>>({
    program: programParam && programs.find((p) => p.id === programParam)
      ? programParam
      : undefined,
  });

  // If program pre-selected via URL, skip to info
  useEffect(() => {
    if (programParam && programs.find((p) => p.id === programParam)) {
      setCurrentStep("info");
    }
  }, [programParam]);

  const stepIndex = currentStep === "program" ? 0 : currentStep === "info" ? 1 : 2;

  const handleProgramSelect = (programId: string) => {
    setFormData((prev) => ({ ...prev, program: programId }));
    setDirection(1);
    setCurrentStep("info");
  };

  const handlePersonalInfoSubmit = async (data: {
    fullName: string;
    email: string;
    phone: string;
  }) => {
    const completeData: RegistrationData = {
      program: formData.program!,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
    };

    setFormData(completeData);
    setIsSubmitting(true);

    try {
      await submitRegistration(completeData);
      setDirection(1);
      setCurrentStep("success");
    } catch {
      // In case of error, still show success (log to console in action)
      setDirection(1);
      setCurrentStep("success");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    setDirection(-1);
    if (currentStep === "info") setCurrentStep("program");
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  return (
    <div className="flex flex-col min-h-dvh">
      {/* Progress bar */}
      {currentStep !== "success" && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0b] border-b border-[#1f1f22]">
          <div className="flex items-center justify-between px-6 md:px-10 h-16">
            {stepLabels.slice(0, 2).map((s, i) => (
              <div
                key={s.step}
                className={`flex items-center gap-2 transition-colors duration-300 ${
                  stepIndex >= i ? "text-[#f0ede8]" : "text-[#2a2a2d]"
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs transition-all duration-300 ${
                    stepIndex > i
                      ? "bg-[#ff5500] border-[#ff5500] text-[#0a0a0b] font-bold"
                      : stepIndex === i
                      ? "border-[#ff5500] text-[#ff5500]"
                      : "border-[#2a2a2d] text-[#2a2a2d]"
                  }`}
                >
                  {stepIndex > i ? "✓" : i + 1}
                </span>
                <span className="text-label hidden sm:block">{s.label.split("— ")[1]}</span>
              </div>
            ))}
            {/* Progress line */}
            <div className="flex-1 mx-6 h-px bg-[#1f1f22] relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[#ff5500]"
                initial={{ width: "0%" }}
                animate={{ width: stepIndex >= 1 ? "100%" : "0%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Step content */}
      <div className={`flex-1 ${currentStep !== "success" ? "pt-16" : ""}`}>
        <AnimatePresence mode="wait" custom={direction}>
          {currentStep === "program" && (
            <motion.div
              key="program"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ProgramSelector
                selectedProgram={formData.program}
                onSelect={handleProgramSelect}
              />
            </motion.div>
          )}

          {currentStep === "info" && (
            <motion.div
              key="info"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <PersonalInfo
                selectedProgram={formData.program!}
                onSubmit={handlePersonalInfoSubmit}
                onBack={handleBack}
                isSubmitting={isSubmitting}
              />
            </motion.div>
          )}

          {currentStep === "success" && (
            <motion.div
              key="success"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <RegistrationSuccess
                data={formData as RegistrationData}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
