import { useThemeMode } from "../../utils/useThemeMode";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";

export default function Header() {
  const { theme, toggleTheme } = useThemeMode();
  return (
    <header className="py-4 px-8 bg-body border-b border-gray-300 dark:border-gray-700  mdl:sticky mdl:top-0 mdl:z-90">
      <div className="wrapper mdl:flex items-center">
        <div className="flex justify-center items-center mdl:hidden">
          <img
            src={
              theme === "dark"
                ? "/img/logo/logo_paletiste_blanc.webp"
                : "/img/logo/logo_paletiste_noir.webp"
            }
            className="w-16 h-16 "
            alt="Logo du site paletiste"
          />
          <p className="text-4xl font-title ml-2">Paletiste</p>
        </div>
        <Link
          to="/"
          className="hidden mdl:flex justify-center items-center mdl:justify-start"
        >
          <img
            src={
              theme === "dark"
                ? "/img/logo/logo_paletiste_blanc.webp"
                : "/img/logo/logo_paletiste_noir.webp"
            }
            className="w-12 h-12"
            alt="Logo du site paletiste"
          />
          <p className="text-4xl font-title ml-2 mdl:text-2xl">Paletiste</p>
        </Link>
        <nav className="hidden mdl:flex flex-1 justify-center gap-6">
          <NavLink linkTo="/concours" label="Les concours" />
          <NavLink linkTo="/categories" label="Types de concours" />
          <NavLink linkTo="/calendrier" label="Calendrier" />
        </nav>
        <div className="hidden mdl:flex items-center justify-center gap-2 xl:gap-3 whitespace-nowrap">
          <Link
            to="/search"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-200/70 dark:bg-gray-700/60 px-2 py-2 hover:bg-gray-300/80 dark:hover:bg-gray-700 transition-colors"
            aria-label="Rechercher des concours"
            title="Rechercher"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
            <span className="hidden xl:inline text-sm">Rechercher</span>
          </Link>

          <Link
            to="/auth"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-200/70 dark:bg-gray-700/60 px-2 py-2 hover:bg-gray-300/80 dark:hover:bg-gray-700 transition-colors"
            aria-label="Se connecter ou s'inscrire"
            title="Se connecter / S'inscrire"
          >
            <i className="fa-solid fa-user"></i>
            <span className="hidden xl:inline text-sm">Se connecter</span>
          </Link>

          <Link
            to="/poster"
            className="inline-flex items-center gap-2 rounded-xl bg-royal hover:bg-royal-hover text-white px-3 py-2 transition-colors"
            aria-label="Publier un nouvel évènement"
            title="Publier un évènement"
          >
            <i className="fa-solid fa-plus"></i>
            <span className="hidden xl:inline text-sm font-title">Publier</span>
          </Link>

          <button
            onClick={toggleTheme}
            aria-label="Basculer le thème clair/sombre"
            title={theme === "dark" ? "Mode sombre" : "Mode clair"}
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-200/70 dark:bg-gray-700/60 px-2 py-2 hover:bg-gray-300/80 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === "dark" ? (
              <>
                <i className="fa-solid fa-moon"></i>
                <span className="hidden xl:inline text-sm">Sombre</span>
              </>
            ) : (
              <>
                <i className="fa-solid fa-sun"></i>
                <span className="hidden xl:inline text-sm">Clair</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
