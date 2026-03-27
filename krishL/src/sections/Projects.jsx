// Projects.jsx – filter tabs + project cards with hover overlay
import { useState, useId } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../components/ui/SocialIcons";
import { SectionWrapper, SectionHeading } from "../components/layout/SectionWrapper";
import { Badge } from "../components/ui/Badge";
import { projects } from "../data/portfolioConfig";

const FILTERS = ["All", "Mobile", "Web", "AI"];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, scale: 0.88, transition: { duration: 0.25 } },
};

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      className="group rounded-2xl overflow-hidden border border-[var(--color-border-subtle)] bg-[var(--color-surface)] hover:border-[var(--color-border)] hover:shadow-[var(--shadow-card)] transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`${project.title} project`}
    >
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden bg-[var(--color-surface-2)]">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)`,
          }}
        >
          <span
            className="text-5xl font-black opacity-20"
            style={{ fontFamily: "var(--font-display)", color: project.color }}
            aria-hidden
          >
            {project.title[0]}
          </span>
        </div>

        {/* Hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center"
              style={{ background: `${project.color}cc`, backdropFilter: "blur(4px)" }}
            >
              <p className="text-white text-sm font-medium leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label={`${project.title} GitHub repository`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <GithubIcon size={16} className="text-white" aria-hidden />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label={`${project.title} live demo`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} className="text-white" aria-hidden />
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category badge */}
        <span
          className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full text-white"
          style={{ background: project.color }}
        >
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-[var(--color-text)] mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} color={project.color}>
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filterGroupId = useId();

  const filtered =
    activeFilter === "All"
      ? projects.items
      : projects.items.filter((p) => p.category === activeFilter);

  return (
    <SectionWrapper id="projects" label="Projects">
      <SectionHeading
        eyebrow="My Work"
        title="Featured Projects"
        subtitle="Selected works across mobile, web, and AI domains."
        center
      />

      {/* Filter tabs */}
      <div
        className="flex justify-center gap-2 mb-10"
        role="tablist"
        aria-label="Project category filter"
      >
        <LayoutGroup id={filterGroupId}>
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-5 py-2 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-bg"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: "var(--gradient-primary)" }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative">{filter}</span>
              </button>
            );
          })}
        </LayoutGroup>
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
