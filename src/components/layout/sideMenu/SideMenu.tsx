import ToggleThemeMode from "../ToggleThemeMode";
import MenuItems from "./MenuItems";

interface ISideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
const menuItems = [
  { label: "Types de concours", link: "/categories" },
  { label: "Connexion / inscription", link: "/register" },
];
export default function SideMenu({ isOpen, onClose }: ISideMenuProps) {
  return (
    <>
      {/* Overlay to handle close menu on click outside the menu*/}
      <div
        className="fixed inset-0 z-10"
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <div
        id="side-menu"
        role="menu"
        aria-hidden={!isOpen}
        className={`fixed h-auto bottom-[70px] w-full xs:w-[50vw] right-0 bg-sideMenu shadow-lg transition-transform duration-300 font-subtitle z-20 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button
          aria-label="Fermer le menu"
          className="ml-auto flex items-baseline mx-6 my-2"
          onClick={onClose}
        >
          <span className="">Fermé</span>
          <i className="fa-solid fa-xmark ml-2 border rounded-sm"></i>
        </button>

        <MenuItems items={menuItems} onItemClick={onClose} />
        <ToggleThemeMode />
      </div>
    </>
  );
}
