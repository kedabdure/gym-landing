"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { programs } from "@/lib/programs";
import { ArrowRight, Loader2, ArrowLeft } from "lucide-react";

const schema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name")
    .max(80, "Name is too long"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(6, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[+\d\s\-()]+$/, "Please enter a valid phone number"),
});

type FormValues = z.infer<typeof schema>;

interface PersonalInfoProps {
  selectedProgram: string;
  onSubmit: (data: FormValues) => Promise<void>;
  onBack: () => void;
  isSubmitting: boolean;
}

export default function PersonalInfo({
  selectedProgram,
  onSubmit,
  onBack,
  isSubmitting,
}: PersonalInfoProps) {
  const program = programs.find((p) => p.id === selectedProgram);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const fields = [
    {
      id: "fullName",
      label: "FULL NAME",
      type: "text",
      placeholder: "Your full name",
      autocomplete: "name",
    },
    {
      id: "email",
      label: "EMAIL ADDRESS",
      type: "email",
      placeholder: "your@email.com",
      autocomplete: "email",
    },
    {
      id: "phone",
      label: "PHONE NUMBER",
      type: "tel",
      placeholder: "+000 000 000 000",
      autocomplete: "tel",
    },
  ] as const;

  return (
    <div className="min-h-[calc(100dvh-4rem)] bg-[#0a0a0b] flex flex-col lg:flex-row">
      {/* Left panel — selected program visual */}
      <div className="lg:w-2/5 xl:w-1/3 bg-[#131315] border-b lg:border-b-0 lg:border-r border-[#1f1f22] p-8 md:p-12 flex flex-col justify-between">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="rule-accent" />
            <span className="text-label text-[#4a4a4a]">YOUR SELECTION</span>
          </motion.div>

          {program && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="program-number text-[#ff5500] block mb-3">
                {program.number}
              </span>
              <h2 className="font-display text-6xl md:text-7xl text-[#f0ede8] leading-none mb-4">
                {program.name}
              </h2>
              <p className="text-[#4a4a4a] text-sm leading-relaxed mb-8">
                {program.tagline}
              </p>

              {/* Benefits */}
              <div className="space-y-3">
                {program.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#ff5500] mt-2 flex-shrink-0" />
                    <span className="text-[#8a8a8a] text-xs leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={onBack}
          className="flex items-center gap-2 text-label text-[#4a4a4a] hover:text-[#8a8a8a] transition-colors mt-8 lg:mt-0"
        >
          <ArrowLeft size={14} />
          CHANGE PROGRAM
        </motion.button>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-start lg:items-center justify-center p-6 md:p-12 lg:p-16">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="rule-accent" />
            <span className="text-label text-[#4a4a4a]">STEP 02 OF 02</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="font-display text-section text-[#f0ede8] mb-2"
          >
            TELL US
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="font-display text-section text-[#ff5500] mb-8"
          >
            ABOUT YOU.
          </motion.h1>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-5"
          >
            {fields.map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="text-label text-[#8a8a8a] block mb-2"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  autoComplete={field.autocomplete}
                  className={`input-field ${errors[field.id] ? "error" : ""}`}
                  {...register(field.id)}
                />
                {errors[field.id] && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-1.5"
                    role="alert"
                  >
                    {errors[field.id]?.message}
                  </motion.p>
                )}
              </div>
            ))}

            <div className="pt-4">
              <button
                type="submit"
                id="submit-registration"
                disabled={isSubmitting}
                className="w-full text-label bg-[#ff5500] text-[#0a0a0b] px-8 py-4 rounded-sm hover:bg-[#d94800] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 font-semibold tracking-widest inline-flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    PROCESSING...
                  </>
                ) : (
                  <>
                    COMPLETE REGISTRATION
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </div>

            <p className="text-[#4a4a4a] text-xs text-center leading-relaxed">
              By registering, you agree to be contacted by IRONFORGE regarding your selected program.
            </p>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
