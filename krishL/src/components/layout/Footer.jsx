// Footer.jsx
import { Heart, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../ui/SocialIcons";
import { meta, social } from "../../data/portfolioConfig";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)]"
      role="contentinfo"
    >
      <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[#ec4899] flex items-center justify-center">
            <Code2 size={15} className="text-white" />
          </span>
          <span
            className="font-black gradient-text"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {meta.name}
          </span>
        </div>

        {/* Credit */}
        <p className="text-sm text-[var(--color-text-subtle)] flex items-center gap-1.5">
          Crafted with <Heart size={13} className="text-pink-500 fill-pink-500" aria-hidden /> ©{" "}
          {year}
        </p>

        {/* Socials */}
        <div className="flex items-center gap-3" aria-label="Social links">
          {[
            { href: social.github, Icon: GithubIcon, label: "GitHub" },
            { href: social.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
            { href: social.instagram, Icon: InstagramIcon, label: "Instagram" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)] border border-transparent hover:border-[var(--color-border)] transition-all duration-200"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
