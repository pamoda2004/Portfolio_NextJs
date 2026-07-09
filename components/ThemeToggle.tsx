"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="h-10 w-10 rounded-full border border-black/10 bg-white/70 shadow-sm backdrop-blur-md dark:border-white/15 dark:bg-white/10"
      />
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/80 text-black shadow-sm backdrop-blur-md transition hover:scale-105 active:scale-95 dark:border-white/15 dark:bg-white/10 dark:text-white"
    >
      {isDark ? (
        <Sun className="h-4 w-4 transition group-hover:rotate-12" />
      ) : (
        <Moon className="h-4 w-4 transition group-hover:-rotate-12" />
      )}
    </button>
  );
}