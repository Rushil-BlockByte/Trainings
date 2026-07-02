"use client";

import { useState } from "react";
import { addDays, todayISO } from "@/lib/date";
import { COLOR_STYLES } from "@/lib/colors";
import type { Habit, HabitColor } from "@/lib/habits";
import { RecentDaysStrip } from "./RecentDaysStrip";
import { AddHabitForm } from "./AddHabitForm";

export function HabitCard({
  habit,
  completedDates,
  isCompletedToday,
  streak,
  onToggleToday,
  onEdit,
  onDelete,
}: {
  habit: Habit;
  completedDates: string[];
  isCompletedToday: boolean;
  streak: number;
  onToggleToday: () => void;
  onEdit: (name: string, color: HabitColor) => void;
  onDelete: () => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const styles = COLOR_STYLES[habit.color];
  const completedSet = new Set(completedDates);
  const recentDates = Array.from({ length: 7 }, (_, i) => addDays(todayISO(), i - 6));

  function handleDelete() {
    if (window.confirm(`Delete "${habit.name}"? This cannot be undone.`)) {
      onDelete();
    }
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-2">
          <span className={`h-2.5 w-2.5 rounded-full ${styles.dot}`} />
          <h3 className="font-medium text-gray-900">{habit.name}</h3>
        </div>
        <div className="flex gap-2 text-xs text-gray-400">
          <button onClick={() => setIsEditing(true)} className="hover:text-gray-700">
            Edit
          </button>
          <button onClick={handleDelete} className="hover:text-rose-600">
            Delete
          </button>
        </div>
      </div>

      <div className="mb-3 flex items-center justify-between">
        <button
          onClick={onToggleToday}
          className={`rounded-md px-3 py-1.5 text-sm font-medium ${
            isCompletedToday
              ? `${styles.fill} text-white`
              : "border border-gray-300 text-gray-600 hover:bg-gray-50"
          }`}
        >
          {isCompletedToday ? "Done today" : "Mark done"}
        </button>
        <span className={`text-sm font-semibold ${styles.text}`}>
          {streak} day{streak === 1 ? "" : "s"} streak
        </span>
      </div>

      <RecentDaysStrip dates={recentDates} completedSet={completedSet} color={habit.color} />

      {isEditing && (
        <AddHabitForm
          initialHabit={habit}
          onSubmit={(name, color) => {
            onEdit(name, color);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
}
