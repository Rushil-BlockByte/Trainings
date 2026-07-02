import { addDays } from "./date";

export function currentStreak(dates: string[], todayISO: string): number {
  const set = new Set(dates);
  let cursor = set.has(todayISO) ? todayISO : addDays(todayISO, -1);
  let streak = 0;
  while (set.has(cursor)) {
    streak++;
    cursor = addDays(cursor, -1);
  }
  return streak;
}
