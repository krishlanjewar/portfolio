// cn.js – classnames utility (lightweight clsx alternative)
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
