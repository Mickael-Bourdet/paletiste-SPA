import { useEffect } from "react";
import { useAuthStore } from "./useAuthStore";

export const useThemeMode = () => {
  const theme = useAuthStore((state) => state.theme);
  const setTheme = useAuthStore((state) => state.setTheme);
  useEffect(() => {
    const root = document.documentElement;

    // If no define theme, init on system preference
    if (!theme) {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme:dark)"
      ).matches;
      const initialTheme = prefersDark ? "dark" : "light";
      root.classList.add(initialTheme);
      setTheme(initialTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme, setTheme]);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newTheme = theme === "dark" ? "light" : "dark";

    root.classList.remove("light", "dark");
    root.classList.add(newTheme);
    setTheme(newTheme);
  };

  return { theme, toggleTheme };
};
