"use client";

import { useState, type FormEvent } from "react";

export function LoginForm({
  onLogin,
}: {
  onLogin: (username: string, password: string) => boolean;
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(!onLogin(username, password));
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
      >
        <h1 className="mb-4 text-xl font-semibold text-gray-900">Habit Tracker</h1>

        <label className="mb-1 block text-sm font-medium text-gray-700">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-3 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none"
          autoFocus
        />

        <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none"
        />

        {error && <p className="mb-3 text-sm text-rose-600">Invalid credentials</p>}

        <button
          type="submit"
          className="w-full rounded-md bg-teal-600 px-3 py-2 text-sm font-medium text-white hover:bg-teal-700"
        >
          Log in
        </button>
      </form>
    </div>
  );
}
