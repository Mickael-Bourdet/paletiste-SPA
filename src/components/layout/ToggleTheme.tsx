import { useThemeMode } from "../../utils/useThemeMode";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useThemeMode();

  return (
    <>
      <span className="pl-6">
        Thème : {theme === "light" ? "Clair" : "Sombre"}
      </span>
      <button
        onClick={toggleTheme}
        className="cursor-pointer text-lg"
        aria-label="Bouton pour passer en mode sombre/clair"
      >
        <i
          className={`pb-4 pl-2 ${
            theme === "light" ? "fa-solid fa-sun" : "fa-solid fa-moon"
          }`}
        />
      </button>
    </>
  );
}
