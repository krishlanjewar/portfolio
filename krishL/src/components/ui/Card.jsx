// Card.jsx – glassmorphism surface card
import { cn } from "../../utils/cn";

export function Card({ children, className, hover = true, glow = false, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-300 relative overflow-hidden",
        "bg-[var(--color-surface)] border-[var(--color-border-subtle)]",
        hover && "hover:border-[var(--color-border)] hover:-translate-y-1 hover:shadow-[var(--shadow-card)]",
        glow && "hover:shadow-[var(--shadow-glow)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
