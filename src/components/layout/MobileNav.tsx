import { useState } from "react";
import MobileNavLink from "./MobileNavLink";
import { NavLink } from "react-router-dom";

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-baseline font-title p-2 z-10 border-t border-primary">
      <MobileNavLink
        linkTo="/"
        icon="fa-solid fa-house-chimney"
        label="Accueil"
      />
      <MobileNavLink
        linkTo="/search"
        icon="fa-solid fa-magnifying-glass"
        label="Recherche"
      />
      <i className="fa-solid fa-plus rounded-full p-3 bg-royal text-body text-xl translate-y-1"></i>
      <MobileNavLink
        linkTo="/concours"
        icon="fa-solid fa-calendar-days"
        label="Concours"
      />
      <button className="flex flex-col" onClick={toggleMenu}>
        <i className="fa-solid fa-ellipsis text-2xl"></i>
        <span className=" text-sm">Plus</span>
      </button>
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 z-10" onClick={handleCloseMenu}></div>
          <div
            className={`fixed h-auto bottom-[72px] w-full xxs:w-[50vw] right-0 bg-white shadow-lg transition-transform duration-300 font-subtitle ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <button
              className="ml-auto flex items-baseline mx-6 my-2"
              onClick={handleCloseMenu}
            >
              <span className="">Fermé</span>
              <i className="fa-solid fa-xmark ml-2 border rounded-sm"></i>
            </button>

            <ul className="py-2 px-6 text-left">
              <li className="mb-1">
                <NavLink
                  to="/categories"
                  className="block w-full"
                  onClick={handleCloseMenu}
                >
                  Par thèmes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className="block w-full"
                  onClick={handleCloseMenu}
                >
                  Connexion/inscription
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
      {/* <MobileNavLink linkTo="/profil" icon="fa-solid fa-user" label="Profil" /> */}
    </nav>
  );
}
