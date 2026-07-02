"use client";

import { useEffect, useState } from "react";
import { readJSON, writeJSON } from "@/lib/storage";
import {
  type Habit,
  type CompletionsMap,
  type HabitColor,
  createHabit,
  toggleCompletion,
  isCompletedOn,
} from "@/lib/habits";
import { currentStreak } from "@/lib/streak";
import { todayISO } from "@/lib/date";

const HABITS_KEY = "habit-tracker:habits";
const COMPLETIONS_KEY = "habit-tracker:completions";

export function useHabits() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [completions, setCompletions] = useState<CompletionsMap>({});
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setHabits(readJSON<Habit[]>(HABITS_KEY, []));
    setCompletions(readJSON<CompletionsMap>(COMPLETIONS_KEY, {}));
    setIsReady(true);
  }, []);

  function addHabit(name: string, color: HabitColor) {
    const next = [...habits, createHabit(name, color)];
    setHabits(next);
    writeJSON(HABITS_KEY, next);
  }

  function editHabit(id: string, name: string, color: HabitColor) {
    const next = habits.map((h) => (h.id === id ? { ...h, name, color } : h));
    setHabits(next);
    writeJSON(HABITS_KEY, next);
  }

  function deleteHabit(id: string) {
    const nextHabits = habits.filter((h) => h.id !== id);
    setHabits(nextHabits);
    writeJSON(HABITS_KEY, nextHabits);

    const nextCompletions = { ...completions };
    delete nextCompletions[id];
    setCompletions(nextCompletions);
    writeJSON(COMPLETIONS_KEY, nextCompletions);
  }

  function toggleToday(habitId: string) {
    const dates = completions[habitId] ?? [];
    const next = { ...completions, [habitId]: toggleCompletion(dates, todayISO()) };
    setCompletions(next);
    writeJSON(COMPLETIONS_KEY, next);
  }

  function isCompletedToday(habitId: string): boolean {
    return isCompletedOn(completions[habitId] ?? [], todayISO());
  }

  function streakFor(habitId: string): number {
    return currentStreak(completions[habitId] ?? [], todayISO());
  }

  return {
    habits,
    completions,
    isReady,
    addHabit,
    editHabit,
    deleteHabit,
    toggleToday,
    isCompletedToday,
    streakFor,
  };
}
