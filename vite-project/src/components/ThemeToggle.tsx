import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: root)"
    ).matches;

    const shouldBeDark = saved === "dark" || (!saved && prefersDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 transition-all hover:bg-gray-300 dark:hover:bg-neutral-800"
    >
      {isDark ? (
        <>
          <Moon className="w-5 h-5 text-wjote" />
          <span className="text-sm text-white">Dark</span>
        </>
      ) : (
        <>
          <Sun className="w-5 h-5 text-black" />
          <span className="text-sm text-black">Light</span>
        </>
      )}
    </button>
  );
}
