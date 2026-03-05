"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuSun, LuMoon } from "react-icons/lu";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  if (!mounted) {
    return (
      <span
        className="inline-flex h-8 w-8 items-center justify-center rounded-md"
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition-all duration-200 hover:scale-105 hover:border-[var(--color-accent-500)] hover:text-[var(--color-accent-500)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-500)]"
    >
      {isDark ? <LuSun size={15} /> : <LuMoon size={15} />}
    </button>
  );
}
