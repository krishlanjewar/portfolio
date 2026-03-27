// Tag.jsx – simple tag label
import { cn } from "../../utils/cn";

export function Tag({ children, className }) {
  return (
    <span
      className={cn(
        "inline-block px-2.5 py-0.5 text-xs font-medium rounded-md",
        "bg-[var(--color-surface-2)] text-[var(--color-text-muted)] border border-[var(--color-border-subtle)]",
        className
      )}
    >
      {children}
    </span>
  );
}
