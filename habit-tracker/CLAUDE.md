# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-user habit tracker: add daily habits, mark them done each day, see a streak count per habit, on one dashboard page. Next.js (App Router) + TypeScript + Tailwind CSS v4. No backend and no database — all data lives in the browser's `localStorage`. A hardcoded username/password gate (in `sessionStorage`) is the only "auth," not real security.

## Commands

```bash
npm run dev     # start dev server (Turbopack) at localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # next lint (ESLint flat config, next/core-web-vitals + next/typescript)
```

There is no test suite.

## Architecture

Everything runs client-side; there is effectively one route (`src/app/page.tsx`). The interesting logic lives in `src/lib` as small pure functions, wrapped by two hooks that own the `localStorage`/`sessionStorage` I/O, consumed by components.

**`src/lib/`** — pure, no I/O, no React:
- `date.ts` — all date handling goes through `todayISO()`/`isoDate()`/`addDays()`, which build dates from local `getFullYear()/getMonth()/getDate()` components rather than parsing/formatting ISO strings with `Date`. This is deliberate: `new Date(isoString)` and `.toISOString()` are UTC and cause off-by-one-day bugs near midnight in non-UTC timezones. Never introduce a UTC-based date call elsewhere in this codebase.
- `streak.ts` — `currentStreak(dates, todayISO)` walks backward one day at a time from today (or yesterday, if today isn't marked yet) counting consecutive completed days, stopping at the first gap. This "anchor on yesterday if today is unmarked" rule is why a streak doesn't zero out just because you haven't checked in yet today.
- `habits.ts` — the `Habit`/`CompletionsMap` types and pure helpers (`createHabit`, `toggleCompletion`, `isCompletedOn`). Completions are stored as `Record<habitId, isoDateString[]>`, not a `Set`, because arrays serialize directly to JSON.
- `storage.ts` — generic `readJSON`/`writeJSON` wrapping `localStorage`. `readJSON` swallows parse errors and returns the fallback — the one intentionally defensive spot in the codebase, since malformed/edited localStorage shouldn't hard-crash the app.
- `auth.ts` — hardcoded `{ username: "user", password: "password" }` and `verifyCredentials()`.
- `colors.ts` — maps each `HabitColor` to static Tailwind class strings. These must stay fully-spelled-out class names (e.g. `"bg-teal-500"`), not dynamically constructed (e.g. `` `bg-${color}-500` ``), or Tailwind's build-time scanner won't pick them up.

**`src/hooks/`** — the only places that touch `localStorage`/`sessionStorage`:
- `useHabits.ts` — loads habits + completions on mount, and every mutation (`addHabit`, `editHabit`, `deleteHabit`, `toggleToday`) updates React state and writes through to `localStorage` in the same call (no debouncing). `streakFor()`/`isCompletedToday()` are computed fresh from `lib/streak.ts` on every call rather than cached. `deleteHabit` also removes that habit's entry from the completions map.
- `useAuth.ts` — reads/writes the `habit-tracker:auth` flag in `sessionStorage` (not `localStorage`, so the login prompt reappears each new browser session). Exposes `{ isAuthenticated, isReady, login, logout }`.

**localStorage/sessionStorage keys**: `habit-tracker:habits`, `habit-tracker:completions` (both in `localStorage`), `habit-tracker:auth` (in `sessionStorage`).

**Auth flow**: `AuthGate` (`src/components/AuthGate.tsx`) is the single owner of the `useAuth()` instance. It takes a render-prop child — `children: (logout: () => void) => ReactNode` — rather than a plain `ReactNode`, specifically so the dashboard can call `logout()` without a second, desynced `useAuth()` instance or a Context provider. `app/page.tsx` is the only consumer: it renders `<AuthGate>{(logout) => <Dashboard onLogout={logout} />}</AuthGate>`. There is no `/login` route — `AuthGate` swaps between `LoginForm` and the dashboard in place.

**Component tree**: `HabitList` owns the "is the add-habit modal open" state and calls `useHabits()`; it hands each `Habit` down to `HabitCard`, which renders the today-toggle, streak count, and a 7-day `RecentDaysStrip`. `AddHabitForm` is shared between add and edit (an optional `initialHabit` prop prefills it for edit).

## Conventions

- No external state library (Redux/Zustand/Context for data) — `useHabits()` plus one level of prop drilling is the pattern; keep it that way unless the component tree genuinely grows deeper.
- Styling is inline Tailwind utility classes only; `globals.css` stays minimal (Tailwind import + CSS variables), no custom `.button`/`.card` classes.
- Dependency versions are pinned to match the sibling `../SITE` project (same Next/React/Tailwind/ESLint majors) for consistency across the monorepo, with `next` bumped to `^15.5.20` specifically to pick up a security patch over the `create-next-app` default at the time this was scaffolded.

## Deployment

Deployed via the Vercel CLI (`vercel`), scoped to the `rdr28` team. Preview deployments are protected by Vercel's default Deployment Protection (SSO) — they 302 to a Vercel login unless you're signed into that team.
