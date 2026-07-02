import { todayISO } from "./date";

export const HABIT_COLORS = ["teal", "amber", "rose", "blue", "violet", "emerald"] as const;

export type HabitColor = (typeof HABIT_COLORS)[number];

export type Habit = {
  id: string;
  name: string;
  color: HabitColor;
  createdAt: string;
};

export type CompletionsMap = Record<string, string[]>;

export function createHabit(name: string, color: HabitColor): Habit {
  return {
    id: crypto.randomUUID(),
    name,
    color,
    createdAt: todayISO(),
  };
}

export function toggleCompletion(dates: string[], dateISO: string): string[] {
  return dates.includes(dateISO)
    ? dates.filter((d) => d !== dateISO)
    : [...dates, dateISO];
}

export function isCompletedOn(dates: string[], dateISO: string): boolean {
  return dates.includes(dateISO);
}
