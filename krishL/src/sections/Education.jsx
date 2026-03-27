// Education.jsx – education timeline cards
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { SectionWrapper, SectionHeading } from "../components/layout/SectionWrapper";
import { education } from "../data/portfolioConfig";

export default function Education() {
  return (
    <SectionWrapper id="education" label="Education">
      <SectionHeading eyebrow="Background" title="Education" />

      <div className="space-y-5">
        {education.items.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="flex gap-6 group"
          >
            {/* Timeline line */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[#ec4899] flex items-center justify-center shrink-0 shadow-[var(--shadow-glow)]">
                <GraduationCap size={18} className="text-white" aria-hidden />
              </div>
              {i < education.items.length - 1 && (
                <div className="w-px flex-1 mt-3 bg-gradient-to-b from-[var(--color-border)] to-transparent" />
              )}
            </div>

            {/* Card */}
            <div className="flex-1 pb-8 rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-5 hover:border-[var(--color-border)] hover:-translate-y-0.5 transition-all duration-300 mb-2">
              <h3 className="text-base font-bold text-[var(--color-text)] mb-1">{edu.degree}</h3>
              <p className="text-sm font-semibold text-[var(--color-primary)] mb-2">
                {edu.institution}
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-[var(--color-text-muted)]">
                <span className="flex items-center gap-1">
                  <MapPin size={11} aria-hidden /> {edu.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={11} aria-hidden /> {edu.period}
                </span>
                <span className="font-semibold text-[var(--color-accent)]">{edu.grade}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
