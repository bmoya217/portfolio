"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type IconProps = {
  mounted: boolean;
  theme?: string;
};

const Icon = ({ mounted, theme }: IconProps) => {
  if (!mounted) return <div className="w-[18px] h-[18px]" />;
  if (theme === "dark") return <Moon size={18} />;
  return <Sun size={18} />;
};

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="border p-1 rounded-full"
    >
      <Icon mounted={mounted} theme={theme} />
    </button>
  );
};
