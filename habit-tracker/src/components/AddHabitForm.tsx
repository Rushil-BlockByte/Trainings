"use client";

import { useState, type FormEvent } from "react";
import { HABIT_COLORS, type Habit, type HabitColor } from "@/lib/habits";
import { COLOR_STYLES } from "@/lib/colors";

export function AddHabitForm({
  initialHabit,
  onSubmit,
  onCancel,
}: {
  initialHabit?: Habit;
  onSubmit: (name: string, color: HabitColor) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState(initialHabit?.name ?? "");
  const [color, setColor] = useState<HabitColor>(initialHabit?.color ?? HABIT_COLORS[0]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    onSubmit(trimmed, color);
  }

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center bg-black/30 px-4"
      onClick={onCancel}
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-5 shadow-lg"
      >
        <h2 className="mb-3 text-lg font-semibold text-gray-900">
          {initialHabit ? "Edit habit" : "Add habit"}
        </h2>

        <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none"
          autoFocus
        />

        <label className="mb-2 block text-sm font-medium text-gray-700">Color</label>
        <div className="mb-5 flex gap-2">
          {HABIT_COLORS.map((c) => (
            <button
              type="button"
              key={c}
              onClick={() => setColor(c)}
              aria-label={c}
              className={`h-6 w-6 rounded-full ${COLOR_STYLES[c].dot} ${
                color === c ? "ring-2 ring-gray-400 ring-offset-2" : ""
              }`}
            />
          ))}
        </div>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-teal-600 px-3 py-2 text-sm font-medium text-white hover:bg-teal-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
