// Hero.jsx – typewriter + parallax photo + CTA
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Briefcase } from "lucide-react";
import { Button } from "../components/ui/Button";
import { hero, meta } from "../data/portfolioConfig";
import krishPhoto from "../assets/krish photo.png";

function useTypewriter(words, speed = 80, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }

    setText(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return text;
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const typedRole = useTypewriter(hero.roles);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero – Introduction"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />

      {/* Decorative blobs */}
      <div
        aria-hidden
        className="absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-[100px] opacity-25"
        style={{ background: "var(--color-primary)", animation: "blob 8s infinite" }}
      />
      <div
        aria-hidden
        className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-[120px] opacity-20"
        style={{ background: "#ec4899", animation: "blob 10s infinite 2s" }}
      />

      <div className="container relative z-10 grid md:grid-cols-2 items-center gap-12 pt-24 pb-16">
        {/* Text column */}
        <motion.div style={{ y: textY }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[var(--color-primary)] font-semibold tracking-widest uppercase text-sm mb-4"
          >
            {hero.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="block text-[var(--color-text)]">KRISH</span>
            <span className="block gradient-text">LANJEWAR</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 mb-8 h-10"
            aria-label={`Currently: ${typedRole}`}
            aria-live="polite"
          >
            <span className="text-xl sm:text-2xl text-[var(--color-text-muted)] font-light italic">
              {typedRole}
            </span>
            <span
              className="w-0.5 h-7 bg-[var(--color-primary)] rounded-full"
              style={{ animation: "blink 1s infinite" }}
              aria-hidden
            />
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <Button as="a" href={hero.cta.primary.href} size="lg" aria-label="View my projects">
              <Briefcase size={18} aria-hidden />
              {hero.cta.primary.label}
            </Button>
            <Button
              as="a"
              href={hero.cta.secondary.href}
              variant="outline"
              size="lg"
              download
              aria-label="Download my resume"
            >
              <Download size={18} aria-hidden />
              {hero.cta.secondary.label}
            </Button>
          </motion.div>

          {/* Scroll hint */}
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-14 flex items-center gap-2 text-xs text-[var(--color-text-subtle)] uppercase tracking-widest hover:text-[var(--color-primary)] transition-colors w-fit"
            aria-label="Scroll to About section"
          >
            <span className="w-px h-8 bg-current opacity-40" />
            Scroll
            <ArrowDown size={12} aria-hidden />
          </motion.a>
        </motion.div>

        {/* Photo column */}
        <motion.div
          style={{ y: photoY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-3xl blur-2xl opacity-40"
              style={{
                background: "var(--gradient-primary)",
                transform: "scale(0.9)",
                animation: "glow-pulse 3s ease-in-out infinite",
              }}
              aria-hidden
            />

            <div
              className="relative w-72 h-96 sm:w-80 sm:h-[28rem] rounded-3xl overflow-hidden border-2 border-[var(--color-border)]"
              style={{ animation: "float 6s ease-in-out infinite" }}
            >
              <img
                src={krishPhoto}
                alt="Krish Lanjewar – App Developer"
                width={320}
                height={448}
                loading="eager"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-4 -left-6 glass rounded-2xl px-4 py-3 border border-[var(--color-border)] shadow-[var(--shadow-card)]"
            >
              <p className="text-xs text-[var(--color-text-muted)]">Currently</p>
              <p className="text-sm font-bold text-[var(--color-text)]">Building cool apps 🚀</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
