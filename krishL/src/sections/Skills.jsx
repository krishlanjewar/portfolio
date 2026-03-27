// Skills.jsx – animated skill bars + experience timeline
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { SectionWrapper, SectionHeading } from "../components/layout/SectionWrapper";
import { skills, experience } from "../data/portfolioConfig";
import { Tag } from "../components/ui/Tag";

function SkillBar({ name, level, inView, delay }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-[var(--color-text)]">{name}</span>
        <span className="text-[var(--color-text-muted)]">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-[var(--color-surface-2)] overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: "var(--gradient-primary)" }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.9, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <SectionWrapper id="skills" label="Skills and Experience">
      <SectionHeading
        eyebrow="What I Know"
        title="Skills & Experience"
        subtitle="Technologies I work with daily and the experiences that shaped me."
      />

      <div ref={ref} className="grid md:grid-cols-3 gap-8 mb-16">
        {skills.categories.map((cat, ci) => {
          const Icon = LucideIcons[cat.icon] ?? LucideIcons.Code;
          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.15, duration: 0.5 }}
              className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-6 hover:border-[var(--color-border)] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[#ec4899] flex items-center justify-center shadow-[var(--shadow-glow)]">
                  <Icon size={17} className="text-white" aria-hidden />
                </span>
                <h3 className="font-bold text-[var(--color-text)]">{cat.category}</h3>
              </div>
              <div className="space-y-4">
                {cat.items.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    inView={inView}
                    delay={ci * 0.1 + si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Experience timeline */}
      <SectionHeading eyebrow="My Journey" title="Experience" />
      <div className="space-y-5">
        {experience.items.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-6 hover:border-[var(--color-border)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="font-bold text-[var(--color-text)]">{exp.role}</h3>
                <p className="text-[var(--color-primary)] text-sm font-semibold">{exp.company}</p>
              </div>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--color-surface-2)] text-[var(--color-text-muted)] border border-[var(--color-border-subtle)]">
                {exp.period}
              </span>
            </div>
            <p className="text-[var(--color-text-muted)] text-sm mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
