import { useThemeMode } from "../../utils/useThemeMode";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useThemeMode();

  return (
    <>
      <div className="flex gap-10 pb-4">
        <span className="pl-6">
          Thème : {theme === "light" ? "Clair" : "Sombre"}
        </span>
        <label className="flex cursor-pointer select-none items-center">
          <div className="relative">
            <input
              type="checkbox"
              checked={theme === "dark"}
              className="sr-only"
              onClick={toggleTheme}
            />
            <div className="block h-4 w-12 rounded-full bg-[#E5E7EB]"></div>
            <div
              className={`dot absolute top-0 h-4 w-4 rounded-full bg-royal transition-transform duration-300 ${
                theme === "dark" ? "translate-x-8" : "translate-x-0"
              }`}
            ></div>
          </div>
        </label>
      </div>
    </>
  );
}
