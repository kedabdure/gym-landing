"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    id: "faq-1",
    question: "What programs does IRONFORGE offer?",
    answer:
      "We offer four elite training disciplines: GYM (strength & conditioning), KICKBOXING (combat fitness), AEROBICS (high-energy cardio), and TAEKWONDO (martial arts mastery). Each program is led by certified coaches and structured for all levels — from first-timers to competitive athletes.",
  },
  {
    id: "faq-2",
    question: "How do I get started?",
    answer:
      "Click 'JOIN NOW' anywhere on the site, select your program, and fill in your details. One of our team will reach out within 24 hours to schedule your first session and walk you through everything you need to know.",
  },
  {
    id: "faq-3",
    question: "Is there a trial session or free class?",
    answer:
      "Yes — new members get a complimentary first session in any program. This gives you the chance to meet your coach, experience the training environment, and decide which discipline fits your goals before committing.",
  },
  {
    id: "faq-4",
    question: "What membership plans are available?",
    answer:
      "We offer monthly, quarterly, and annual membership plans — each with flexible payment options. Multi-program access and family bundles are available too. Contact us directly or register online for a full breakdown of current rates.",
  },
  {
    id: "faq-5",
    question: "Do I need prior experience to join?",
    answer:
      "Absolutely not. Every program is designed to accommodate beginners and advanced members alike. Our coaches assess your level on day one and build a progressive plan that meets you where you are.",
  },
  {
    id: "faq-6",
    question: "What are your operating hours?",
    answer:
      "We're open seven days a week. Weekday sessions run from 6:00 AM to 10:00 PM, with weekend hours from 8:00 AM to 8:00 PM. Class schedules are posted monthly and available on request.",
  },
];

function FAQItem({
  faq,
  index,
  inView,
}: {
  faq: (typeof faqs)[0];
  index: number;
  inView: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.07, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="border-b border-[#1f1f22] last:border-b-0"
    >
      <button
        id={faq.id}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="w-full flex items-start justify-between gap-6 py-7 md:py-8 text-left group cursor-pointer"
      >
        <span
          className={`font-display text-xl md:text-2xl leading-snug transition-colors duration-300 ${
            open ? "text-[#f0ede8]" : "text-[#8a8a8a] group-hover:text-[#f0ede8]"
          }`}
        >
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-sm border flex items-center justify-center transition-all duration-300 mt-0.5 ${
            open
              ? "border-[#ff5500] text-[#ff5500] bg-[#ff5500]/10"
              : "border-[#2a2a2d] text-[#4a4a4a] group-hover:border-[#4a4a4a] group-hover:text-[#8a8a8a]"
          }`}
        >
          {open ? <Minus size={13} /> : <Plus size={13} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="text-[#8a8a8a] text-base md:text-xl leading-relaxed pb-8 max-w-3xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      id="faq"
      className="relative bg-[#0a0a0b] py-24 md:py-36 px-6 md:px-10 lg:px-16 overflow-hidden"
      aria-label="Frequently Asked Questions"
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#ff5500]/4 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 md:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="rule-accent" />
              <span className="text-label text-[#4a4a4a]">GOT QUESTIONS</span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{ delay: 0.1, duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
                className="text-display font-display text-[#f0ede8] leading-none"
              >
                FAQ
              </motion.h2>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-[#8a8a8a] text-base md:text-lg leading-relaxed self-end max-w-md"
          >
            Everything you need to know before you walk through the door. Can&apos;t find your
            answer? We&apos;re always a message away.
          </motion.p>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="h-px bg-[#1f1f22] mb-2"
        />

        {/* Accordion */}
        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={faq.id} faq={faq} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
