import { useState } from "react";

export default function PresentationBis() {
  const [query, setQuery] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: brancher la recherche réelle quand l'API/route sera prête
    // Pour l'instant, on redirige vers la page des événements avec le terme de recherche dans l'URL si nécessaire
    const searchParams = new URLSearchParams();
    if (query.trim()) searchParams.set("q", query.trim());
    const url = `/events${
      searchParams.toString() ? `?${searchParams.toString()}` : ""
    }`;
    window.location.assign(url);
  }

  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      {/* Décor de fond */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-body-second/60 to-transparent dark:from-white/5"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-royal/15 blur-3xl dark:bg-royal/25"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-hover/10 blur-3xl dark:bg-white/10"
      />

      <div className="wrapper">
        <div className="bodyWrapper grid grid-cols-1 items-center gap-8">
          <header className="text-center md:text-left">
            <h2 className="titleStyle">
              Tous les concours de palet au même endroit
            </h2>
            <p className="mx-auto md:mx-0 max-w-3xl text-lg text-gray-700 leading-relaxed dark:text-placeholder">
              Amateurs, passionnés ou compétiteurs, découvrez facilement les
              tournois de palet près de chez vous. Du tournoi local à la Coupe
              de France, trouvez l’événement qui vous correspond, quel que soit
              votre niveau ou votre type de palet.
            </p>
          </header>

          {/* Barre de recherche moderne */}
          <div className="mx-auto md:mx-0 w-full max-w-3xl">
            <form
              onSubmit={handleSubmit}
              className="group relative rounded-2xl border border-slate-300/50 dark:border-white/10 bg-white/70 dark:bg-slate-900/30 backdrop-blur-md shadow-xl focus-within:shadow-2xl transition-shadow duration-300"
            >
              {/* Accent gradient border */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)]"
                style={{
                  background:
                    "linear-gradient(120deg, rgba(58,95,205,0.35), rgba(74,108,247,0.15), rgba(191,91,4,0.2))",
                }}
              />

              <div className="relative flex items-center gap-3 px-4 md:px-5 py-3 md:py-4">
                <span className="relative grid place-items-center h-9 w-9 rounded-xl bg-royal/15 text-royal dark:text-white/90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 1 0 4.243 11.964l3.771 3.772a.75.75 0 1 0 1.06-1.06l-3.772-3.772A6.75 6.75 0 0 0 10.5 3.75Zm-5.25 6.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>

                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  placeholder="Chercher un concours, une ville, une date…"
                  className="peer w-full bg-transparent outline-none text-primary dark:text-primary placeholder-gray-400 md:text-lg"
                  aria-label="Chercher un concours"
                />

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="hidden md:inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-200 hover:bg-slate-300/30 dark:hover:bg-white/10 transition-colors"
                    aria-label="Effacer la recherche"
                  >
                    Effacer
                  </button>
                  <button
                    type="submit"
                    className="relative inline-flex items-center justify-center gap-2 rounded-xl bg-royal hover:bg-royal-hover text-white font-title px-4 py-2 md:px-5 md:py-2.5 transition-colors"
                    aria-label="Soumettre la recherche"
                  >
                    Rechercher
                  </button>
                </div>
              </div>
            </form>

            {/* Aide contextuelle */}
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-600 dark:text-slate-300">
              <span className="px-2 py-1 rounded-md bg-slate-200/60 dark:bg-white/10">
                Ex: fonte
              </span>
              <span className="px-2 py-1 rounded-md bg-slate-200/60 dark:bg-white/10">
                Ex: doublette
              </span>
              <span className="px-2 py-1 rounded-md bg-slate-200/60 dark:bg-white/10">
                Ex: Coupe de France
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
