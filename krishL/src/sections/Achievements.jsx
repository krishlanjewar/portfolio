// Achievements.jsx – glow card grid
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { SectionWrapper, SectionHeading } from "../components/layout/SectionWrapper";
import { achievements } from "../data/portfolioConfig";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const card = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" label="Achievements">
      <SectionHeading
        eyebrow="Recognition"
        title={achievements.heading}
        subtitle={achievements.subheading}
        center
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {achievements.items.map((ach) => {
          const Icon = LucideIcons[ach.icon] ?? LucideIcons.Star;
          return (
            <motion.div
              key={ach.id}
              variants={card}
              className="group relative rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-6 overflow-hidden hover:border-[var(--color-border)] hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              {/* Shimmer overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer pointer-events-none"
                aria-hidden
              />

              {/* Glow blob */}
              <div
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{ background: ach.color }}
                aria-hidden
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${ach.color}20`, border: `1px solid ${ach.color}40` }}
              >
                <Icon size={22} style={{ color: ach.color }} aria-hidden />
              </div>

              <h3 className="font-bold text-[var(--color-text)] mb-2">{ach.title}</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {ach.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
