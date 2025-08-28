import { useThemeMode } from "../../utils/useThemeMode";

export default function ToggleThemeMode() {
  const { theme, toggleTheme } = useThemeMode();

  return (
    <>
      <div className="flex gap-4 pb-4">
        <span className="pl-6">
          Thème :{" "}
          {theme === "light" ? (
            <>
              {" "}
              Clair <i className="fa-solid fa-sun pl-2"></i>
            </>
          ) : (
            <>
              {" "}
              Sombre <i className="fa-solid fa-moon pl-2 "></i>
            </>
          )}
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
