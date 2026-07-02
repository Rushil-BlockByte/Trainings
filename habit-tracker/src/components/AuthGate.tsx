"use client";

import type { ReactNode } from "react";
import { useAuth } from "@/hooks/useAuth";
import { LoginForm } from "./LoginForm";

export function AuthGate({
  children,
}: {
  children: (logout: () => void) => ReactNode;
}) {
  const { isAuthenticated, isReady, login, logout } = useAuth();

  if (!isReady) return null;

  if (!isAuthenticated) {
    return <LoginForm onLogin={login} />;
  }

  return <>{children(logout)}</>;
}
