"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "LOCATION",
    lines: ["[Your Street Address]", "[City, Region, ZIP]"],
  },
  {
    icon: Phone,
    label: "PHONE",
    lines: ["+000 000 000 000"],
    href: "tel:+00000000000",
  },
  {
    icon: Mail,
    label: "EMAIL",
    lines: ["info@ironforge.com"],
    href: "mailto:info@ironforge.com",
  },
  {
    icon: Clock,
    label: "HOURS",
    lines: ["Mon – Fri: 6:00 AM – 10:00 PM", "Sat – Sun: 8:00 AM – 8:00 PM"],
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    program: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="relative bg-[#0d0d0f] py-24 md:py-36 px-6 md:px-10 lg:px-16 overflow-hidden"
      aria-label="Contact IRONFORGE"
    >
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#ff5500]/4 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f22_1px,transparent_1px),linear-gradient(to_bottom,#1f1f22_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="rule-accent" />
            <span className="text-label text-[#4a4a4a]">GET IN TOUCH</span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{ delay: 0.1, duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
                className="text-display font-display text-[#f0ede8] leading-none"
              >
                CONTACT
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-[#8a8a8a] text-base md:text-lg leading-relaxed max-w-sm lg:mb-2"
            >
              Ready to take the first step? Drop us a message and we&apos;ll get back to you within 24 hours.
            </motion.p>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — info cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex items-start gap-4 p-5 border border-[#1f1f22] rounded-sm bg-[#0a0a0b]/60 hover:border-[#2a2a2d] transition-colors duration-300 group"
                >
                  <span className="flex-shrink-0 w-9 h-9 border border-[#2a2a2d] rounded-sm flex items-center justify-center text-[#ff5500] group-hover:border-[#ff5500]/40 transition-colors duration-300">
                    <Icon size={15} />
                  </span>
                  <div>
                    <p className="text-label text-[#4a4a4a] mb-1.5">{item.label}</p>
                    {item.lines.map((line, li) =>
                      item.href && li === 0 ? (
                        <a
                          key={li}
                          href={item.href}
                          className="block text-[#8a8a8a] text-sm hover:text-[#f0ede8] transition-colors duration-200"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={li} className="text-[#8a8a8a] text-sm leading-relaxed">
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-3 border border-[#1f1f22] rounded-sm p-8 md:p-10 bg-[#0a0a0b]/80 backdrop-blur-sm"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-14 h-14 rounded-full border border-[#ff5500] flex items-center justify-center text-[#ff5500] mb-6">
                  <ArrowRight size={22} />
                </div>
                <h3 className="font-display text-2xl text-[#f0ede8] mb-3">Message Sent</h3>
                <p className="text-[#8a8a8a] text-sm max-w-xs leading-relaxed">
                  We&apos;ve received your message and will follow up within 24 hours. Welcome to IRONFORGE.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                aria-label="Contact form"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-name" className="text-label text-[#4a4a4a]">
                      FULL NAME *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="bg-[#0d0d0f] border border-[#2a2a2d] rounded-sm px-4 py-3 text-sm text-[#f0ede8] placeholder-[#3a3a3d] focus:outline-none focus:border-[#ff5500] transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-email" className="text-label text-[#4a4a4a]">
                      EMAIL *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@email.com"
                      className="bg-[#0d0d0f] border border-[#2a2a2d] rounded-sm px-4 py-3 text-sm text-[#f0ede8] placeholder-[#3a3a3d] focus:outline-none focus:border-[#ff5500] transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-phone" className="text-label text-[#4a4a4a]">
                      PHONE
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+000 000 000 000"
                      className="bg-[#0d0d0f] border border-[#2a2a2d] rounded-sm px-4 py-3 text-sm text-[#f0ede8] placeholder-[#3a3a3d] focus:outline-none focus:border-[#ff5500] transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-program" className="text-label text-[#4a4a4a]">
                      INTERESTED IN
                    </label>
                    <select
                      id="contact-program"
                      name="program"
                      value={formState.program}
                      onChange={handleChange}
                      className="bg-[#0d0d0f] border border-[#2a2a2d] rounded-sm px-4 py-3 text-sm text-[#f0ede8] focus:outline-none focus:border-[#ff5500] transition-colors duration-200 appearance-none cursor-pointer"
                    >
                      <option value="" className="text-[#3a3a3d]">Select a program</option>
                      <option value="gym">GYM</option>
                      <option value="kickboxing">KICKBOXING</option>
                      <option value="aerobics">AEROBICS</option>
                      <option value="taekwondo">TAEKWONDO</option>
                      <option value="general">GENERAL INQUIRY</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-message" className="text-label text-[#4a4a4a]">
                    MESSAGE *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us about your goals or ask anything..."
                    className="bg-[#0d0d0f] border border-[#2a2a2d] rounded-sm px-4 py-3 text-sm text-[#f0ede8] placeholder-[#3a3a3d] focus:outline-none focus:border-[#ff5500] transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  id="contact-submit"
                  type="submit"
                  className="text-label bg-[#ff5500] text-[#0a0a0b] px-8 py-4 rounded-sm hover:bg-[#d94800] transition-all duration-200 font-semibold tracking-widest inline-flex items-center justify-center gap-2 group w-full sm:w-auto cursor-pointer"
                >
                  SEND MESSAGE
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
