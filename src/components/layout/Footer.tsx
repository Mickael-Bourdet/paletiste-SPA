import { Link } from "react-router-dom";

export default function Footer() {
  const categories = [
    { name: "Fonte", slug: "fonte" },
    { name: "Laiton", slug: "laiton" },
    { name: "Bois", slug: "bois" },
    { name: "Terre", slug: "terre" },
    { name: "Multi", slug: "multi" },
  ];

  return (
    <footer className="mt-auto border-t font-body border-slate-300/40 dark:border-white/10 bg-white/60 dark:bg-slate-900 backdrop-blur-sm pb-20 mdl:pb-0">
      <div className="wrapper py-10">
        <div className="bodyWrapper grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/img/logo/logo_paletiste_noir.webp"
                alt="Paletiste"
                className="h-9 dark:hidden"
                loading="lazy"
              />
              <img
                src="/img/logo/logo_paletiste_blanc.webp"
                alt="Paletiste"
                className="h-9 hidden dark:block"
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 max-w-prose">
              La plateforme pour découvrir, suivre et participer aux concours de
              palets partout en France. Retrouvez les majeurs, les catégories et
              les dernières actualités de la scène.
            </p>
          </div>

          <div>
            <h4 className="font-title text-lg mb-3">Types de concours</h4>
            <ul className="space-y-2">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/events?category=${c.slug}`}
                    className="underline-link text-slate-700 dark:text-slate-200"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-title text-lg mb-3">En savoir plus</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="underline-link text-slate-700 dark:text-slate-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/confidentialite"
                  className="underline-link text-slate-700 dark:text-slate-200"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  to="/conditions"
                  className="underline-link text-slate-700 dark:text-slate-200"
                >
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link
                  to="/mentions-legales"
                  className="underline-link text-slate-700 dark:text-slate-200"
                >
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-300/40 dark:border-white/10">
        <div className="wrapper py-4">
          <div className="bodyWrapper flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600 dark:text-slate-300">
            <p>© {new Date().getFullYear()} Paletiste. Tous droits réservés.</p>
            <p className="opacity-80">Conçu avec passion pour la communauté.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
