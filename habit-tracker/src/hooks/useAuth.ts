"use client";

import { useEffect, useState } from "react";
import { verifyCredentials } from "@/lib/auth";

const AUTH_KEY = "habit-tracker:auth";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsAuthenticated(sessionStorage.getItem(AUTH_KEY) === "true");
    setIsReady(true);
  }, []);

  function login(username: string, password: string): boolean {
    if (!verifyCredentials(username, password)) return false;
    sessionStorage.setItem(AUTH_KEY, "true");
    setIsAuthenticated(true);
    return true;
  }

  function logout() {
    sessionStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
  }

  return { isAuthenticated, isReady, login, logout };
}
