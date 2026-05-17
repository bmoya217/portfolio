"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="border p-1 rounded-full"
    >
      {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
};
