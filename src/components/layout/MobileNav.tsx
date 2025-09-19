import { useState } from "react";
import MobileNavLink from "./MobileNavLink";
import SideMenu from "./sideMenu/SideMenu";

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  return (
    <nav className="mdl:hidden fixed bottom-0 left-0 w-full flex justify-around items-baseline font-title p-2 z-30 border-t border-primary bg-body">
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
      <button
        className="flex flex-col"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls="side-menu"
        aria-label="Ouvrir le menu plus"
      >
        <i className="fa-solid fa-ellipsis text-2xl"></i>
        <span className=" text-sm">Plus</span>
      </button>
      {isMenuOpen && (
        <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      )}
      {/* <MobileNavLink linkTo="/profil" icon="fa-solid fa-user" label="Profil" /> */}
    </nav>
  );
}
