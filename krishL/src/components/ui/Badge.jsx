// Badge.jsx – tech stack / category pill
import { cn } from "../../utils/cn";

export function Badge({ children, color, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border",
        className
      )}
      style={{
        color: color ?? "var(--color-primary-light)",
        borderColor: color ? `${color}40` : "var(--color-border)",
        backgroundColor: color ? `${color}12` : "var(--color-surface-2)",
      }}
    >
      {children}
    </span>
  );
}
