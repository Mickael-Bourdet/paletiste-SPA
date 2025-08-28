import { useThemeMode } from "../../utils/useThemeMode";

export default function Header() {
  const { theme } = useThemeMode();
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
      <nav className="hidden md:flex flex-1 justify-center">
        <p>lien 1</p>
        <p>lien 2</p>
        <p>lien 3</p>
      </nav>
      <div className="hidden md:flex items-baseline gap-4">
        <i className="fa-solid fa-magnifying-glass border p-2 border-gray-300 bg-gray-300"></i>
        <i className="fa-solid fa-user border p-2 border-gray-300 bg-gray-300"></i>
        <button className="rounded-full py-1 px-4 bg-royal text-body text-sm">
          <i className="fa-solid fa-plus"></i>
          <span className="pl-2 text-lg">Créer</span>
        </button>
        <i className="fa-solid fa-gear text-xl"></i>
      </div>
    </header>
  );
}
