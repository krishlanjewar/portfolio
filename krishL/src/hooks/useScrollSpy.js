// useScrollSpy.js – tracks which section is currently in view
import { useEffect, useState } from "react";

/**
 * @param {string[]} sectionIds - Array of section element IDs to spy on
 * @param {{ rootMargin?: string }} options
 * @returns {string} activeId - The currently active section ID
 */
export function useScrollSpy(sectionIds, { rootMargin = "-30% 0px -60% 0px" } = {}) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, rootMargin]);

  return activeId;
}
