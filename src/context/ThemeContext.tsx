"use client";

import * as React from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>("dark");

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem("alekhya_theme");
      const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (stored === "light") {
        setThemeState("light");
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
      } else if (stored === "dark") {
        setThemeState("dark");
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        // System preference default on first visit
        if (prefersLight && !prefersDark) {
          setThemeState("light");
          document.documentElement.classList.remove("dark");
          document.documentElement.classList.add("light");
        } else {
          setThemeState("dark");
          document.documentElement.classList.add("dark");
          document.documentElement.classList.remove("light");
        }
      }
    } catch (e) {
      // Fallback to dark if localStorage is inaccessible
      setThemeState("dark");
    }
  }, []);

  const setTheme = React.useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem("alekhya_theme", newTheme);
    } catch (e) {}

    if (newTheme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  // Listen to system preference changes if user hasn't explicitly set preference
  React.useEffect(() => {
    try {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e: MediaQueryListEvent) => {
        const stored = localStorage.getItem("alekhya_theme");
        if (!stored) {
          setTheme(e.matches ? "dark" : "light");
        }
      };
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } catch (e) {}
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
