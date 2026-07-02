"use client";

import { useState } from "react";
import { useHabits } from "@/hooks/useHabits";
import { HabitCard } from "./HabitCard";
import { AddHabitForm } from "./AddHabitForm";

export function HabitList() {
  const {
    habits,
    completions,
    isReady,
    addHabit,
    editHabit,
    deleteHabit,
    toggleToday,
    isCompletedToday,
    streakFor,
  } = useHabits();
  const [isAdding, setIsAdding] = useState(false);

  if (!isReady) return null;

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <button
          onClick={() => setIsAdding(true)}
          className="rounded-md bg-teal-600 px-3 py-2 text-sm font-medium text-white hover:bg-teal-700"
        >
          + Add habit
        </button>
      </div>

      {habits.length === 0 ? (
        <p className="rounded-lg border border-dashed border-gray-300 p-8 text-center text-sm text-gray-500">
          No habits yet — add your first one.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {habits.map((habit) => (
            <HabitCard
              key={habit.id}
              habit={habit}
              completedDates={completions[habit.id] ?? []}
              isCompletedToday={isCompletedToday(habit.id)}
              streak={streakFor(habit.id)}
              onToggleToday={() => toggleToday(habit.id)}
              onEdit={(name, color) => editHabit(habit.id, name, color)}
              onDelete={() => deleteHabit(habit.id)}
            />
          ))}
        </div>
      )}

      {isAdding && (
        <AddHabitForm
          onSubmit={(name, color) => {
            addHabit(name, color);
            setIsAdding(false);
          }}
          onCancel={() => setIsAdding(false)}
        />
      )}
    </div>
  );
}
