import { useState } from "react";
import { useThemeMode } from "../../utils/useThemeMode";
import NavLink from "./NavLink";
import ToggleThemeMode from "./ToggleThemeMode";

export default function Header() {
  const { theme } = useThemeMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };
  return (
    <header className="py-4 px-8 border-b border-gray-300 dark:border-gray-700 md:px-16 xl:px-48 md:flex items-center">
      <div className="flex justify-center items-center md:justify-start">
        <img
          src={
            theme === "dark"
              ? "/img/logo/logo_paletiste_blanc.webp"
              : "/img/logo/logo_paletiste_noir.webp"
          }
          className="w-16 h-16 md:w-12 md:h-12"
          alt="Logo du site paletiste représentant deux joueurs se serrant la main autour d'une planche"
        />
        <p className="text-4xl font-title ml-2 md:text-2xl">Paletiste</p>
      </div>
      <nav className="hidden md:flex flex-1 justify-center gap-6">
        <NavLink linkTo="/concours" label="Les concours" />
        <NavLink linkTo="/categories" label="Types de concours" />
        <NavLink linkTo="/calendrier" label="Calendrier" />
      </nav>
      <div className="hidden md:flex items-baseline gap-4">
        <i className="fa-solid fa-magnifying-glass border p-2 border-gray-300 bg-gray-300"></i>
        <i className="fa-solid fa-user border p-2 border-gray-300 bg-gray-300"></i>
        <button className="rounded-full py-1 px-4 bg-royal text-body text-sm">
          <i className="fa-solid fa-plus"></i>
          <span className="pl-2 text-lg">Créer</span>
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
              className={`fixed h-auto bottom-[70px] w-full xxs:w-[50vw] right-0 bg-sideMenu shadow-lg transition-transform duration-300 font-subtitle z-20 ${
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
