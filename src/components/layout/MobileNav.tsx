import MobileNavLink from "./MobileNavLink";

export default function MobileNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-around items-baseline font-title p-2 z-10 border-t border-primary">
      <MobileNavLink
        linkTo="/"
        icon="fa-solid fa-house-chimney"
        label="Accueil"
      />
      <MobileNavLink
        linkTo="/concours"
        icon="fa-solid fa-calendar-days"
        label="Concours"
      />
      <MobileNavLink
        linkTo="/search"
        icon="fa-solid fa-magnifying-glass"
        label="Recherche"
      />
      <MobileNavLink linkTo="/profil" icon="fa-solid fa-user" label="Profil" />
    </div>
  );
}
