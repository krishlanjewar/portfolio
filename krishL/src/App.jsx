// App.jsx – layout shell, theme state, lazy-loaded sections + SEO
import { useState, lazy, Suspense } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { meta } from "./data/portfolioConfig";

// Eager load hero & about (above the fold)
import Hero from "./sections/Hero";
import About from "./sections/About";

// Lazy load below-fold sections
const Education = lazy(() => import("./sections/Education"));
const Skills = lazy(() => import("./sections/Skills"));
const Projects = lazy(() => import("./sections/Projects"));
const BeyondCode = lazy(() => import("./sections/BeyondCode"));
const Achievements = lazy(() => import("./sections/Achievements"));
const Contact = lazy(() => import("./sections/Contact"));

function SectionFallback() {
  return (
    <div className="flex items-center justify-center py-24" aria-hidden>
      <div
        className="w-8 h-8 rounded-full border-2 border-[var(--color-primary)] border-t-transparent animate-spin"
      />
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>{meta.name} – {meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`${meta.name} – ${meta.title}`} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.ogImage} />
        <meta property="og:url" content={meta.url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${meta.name} – ${meta.title}`} />
        <meta name="twitter:description" content={meta.description} />
        <link rel="canonical" href={meta.url} />
      </Helmet>

      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main id="main-content" tabIndex={-1}>
        {/* Above the fold – eager */}
        <Hero />
        <About />

        {/* Below the fold – lazy */}
        <Suspense fallback={<SectionFallback />}>
          <Education />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <BeyondCode />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Achievements />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </HelmetProvider>
  );
}
