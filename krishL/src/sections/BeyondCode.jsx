// BeyondCode.jsx – personal interests icon grid
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { SectionWrapper, SectionHeading } from "../components/layout/SectionWrapper";
import { beyondCode } from "../data/portfolioConfig";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

export default function BeyondCode() {
  return (
    <SectionWrapper
      id="beyond"
      label="Beyond the Code"
      className="bg-[var(--color-bg-alt)] relative overflow-hidden"
    >
      {/* Background texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, var(--color-primary) 0%, transparent 50%), radial-gradient(circle at 80% 50%, #ec4899 0%, transparent 50%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10">
        <SectionHeading
          eyebrow="Human Side"
          title={beyondCode.heading}
          subtitle={beyondCode.subheading}
          center
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 max-w-4xl mx-auto"
        >
          {beyondCode.items.map((interest) => {
            const Icon = LucideIcons[interest.icon] ?? LucideIcons.Star;
            return (
              <motion.div
                key={interest.label}
                variants={item}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)]/70 backdrop-blur-sm hover:border-[var(--color-border)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)] transition-all duration-300 group cursor-default"
              >
                <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[#ec4899] flex items-center justify-center shadow-[var(--shadow-glow)] group-hover:scale-110 transition-transform duration-300">
                  <Icon size={22} className="text-white" aria-hidden />
                </span>
                <p className="text-xs font-semibold text-[var(--color-text-muted)] text-center leading-tight">
                  {interest.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
