import type { HabitColor } from "./habits";

export const COLOR_STYLES: Record<HabitColor, { dot: string; fill: string; text: string }> = {
  teal: { dot: "bg-teal-500", fill: "bg-teal-500", text: "text-teal-600" },
  amber: { dot: "bg-amber-500", fill: "bg-amber-500", text: "text-amber-600" },
  rose: { dot: "bg-rose-500", fill: "bg-rose-500", text: "text-rose-600" },
  blue: { dot: "bg-blue-500", fill: "bg-blue-500", text: "text-blue-600" },
  violet: { dot: "bg-violet-500", fill: "bg-violet-500", text: "text-violet-600" },
  emerald: { dot: "bg-emerald-500", fill: "bg-emerald-500", text: "text-emerald-600" },
};
