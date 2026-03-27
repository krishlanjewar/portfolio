// About.jsx – bio + animated stat counters
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { SectionWrapper, SectionHeading } from "../components/layout/SectionWrapper";
import { about } from "../data/portfolioConfig";

function Counter({ value, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(value / (duration / 16));
    const interval = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [inView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function About() {
  const { ref: statsRef, inView } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <SectionWrapper id="about" label="About Me">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Bio */}
        <div>
          <SectionHeading eyebrow="Who I Am" title="About Me" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {about.bio.map((para, i) => (
              <motion.p
                key={i}
                variants={item}
                className="text-[var(--color-text-muted)] leading-relaxed text-base md:text-lg"
              >
                {para}
              </motion.p>
            ))}
          </motion.div>

          {/* Accent bar */}
          <div
            className="mt-8 h-1 w-20 rounded-full"
            style={{ background: "var(--gradient-primary)" }}
          />
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 gap-5">
          {about.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="rounded-2xl p-6 border border-[var(--color-border-subtle)] bg-[var(--color-surface)] hover:border-[var(--color-border)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <p
                className="text-4xl font-black mb-1 gradient-text"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Counter value={stat.value} suffix={stat.suffix} inView={inView} />
              </p>
              <p className="text-sm text-[var(--color-text-muted)] font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
