// SectionWrapper.jsx – consistent section layout with fade-in
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function SectionWrapper({ id, children, className, label }) {
  return (
    <motion.section
      id={id}
      aria-label={label}
      className={cn("section", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeUp}
    >
      <div className="container">{children}</div>
    </motion.section>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={cn("mb-12", center && "text-center")}>
      {eyebrow && (
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--color-text)] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--color-text-muted)] text-lg max-w-2xl" style={center ? { margin: "0 auto" } : {}}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
