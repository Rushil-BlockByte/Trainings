"use client";

import { AuthGate } from "@/components/AuthGate";
import { HabitList } from "@/components/HabitList";

export default function Page() {
  return (
    <AuthGate>
      {(logout) => (
        <div className="mx-auto max-w-5xl px-4 py-8">
          <header className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">Habits</h1>
            <button
              onClick={logout}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Log out
            </button>
          </header>
          <HabitList />
        </div>
      )}
    </AuthGate>
  );
}
