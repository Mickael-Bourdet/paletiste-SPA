import { useState } from "react";
import { useThemeMode } from "../../utils/useThemeMode";
import NavLink from "./NavLink";
import ToggleThemeMode from "./ToggleThemeMode";
import { Link } from "react-router-dom";

export default function Header() {
  const { theme } = useThemeMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };
  return (
    <header className="py-4 px-8 bg-body border-b border-gray-300 dark:border-gray-700 xlg:px-24 xl:px-50 mdl:flex items-center mdl:sticky mdl:top-0 mdl:z-20">
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
      <div className="hidden mdl:flex items-baseline justify-center gap-4 flex-wrap ">
        <i className="fa-solid fa-magnifying-glass border p-2 border-gray-300 bg-gray-300 dark:border-gray-700 dark:bg-gray-700 cursor-pointer"></i>
        <i className="fa-solid fa-user border p-2 border-gray-300 bg-gray-300 dark:border-gray-700 dark:bg-gray-700 cursor-pointer"></i>
        <button className="flex items-baseline rounded-full py-1 px-4 bg-royal text-body dark:text-primary text-sm cursor-pointer hover:outline-2 hover:outline-primary">
          <i className="fa-solid fa-plus"></i>
          <span className="pl-2 text-lg">Poster</span>
        </button>
        <button
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="params-menu"
          aria-label="Ouvrir le menu des paramètres"
        >
          <i className="fa-solid fa-gear text-xl"></i>
        </button>
        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            ></div>
            <div
              id="params-menu"
              role="menu"
              aria-hidden={!isMenuOpen}
              className={`absolute h-auto top-20 right-1 xl:right-20 pt-4 pr-6 w-auto  bg-sideMenu shadow-lg transition-transform duration-300 font-subtitle z-20 ${
                isMenuOpen ? "translate-y-0" : "-translate-y-full"
              }`}
            >
              <ToggleThemeMode />
            </div>
          </>
        )}
      </div>
    </header>
  );
}
