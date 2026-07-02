import { COLOR_STYLES } from "@/lib/colors";
import type { HabitColor } from "@/lib/habits";

export function RecentDaysStrip({
  dates,
  completedSet,
  color,
}: {
  dates: string[];
  completedSet: Set<string>;
  color: HabitColor;
}) {
  const styles = COLOR_STYLES[color];

  return (
    <div className="flex gap-1">
      {dates.map((date) => (
        <div
          key={date}
          title={date}
          className={`h-4 w-4 rounded-sm ${completedSet.has(date) ? styles.fill : "bg-gray-100"}`}
        />
      ))}
    </div>
  );
}
