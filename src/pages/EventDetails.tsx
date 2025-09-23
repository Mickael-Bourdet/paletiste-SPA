import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IEvent } from "../@types/event";
import { getEventBySlug, getEventsByCategory } from "../api/eventAPI";
import { useErrorHandler } from "../utils/useErrorHandler";
import DisplayEvents from "../components/DisplayEvents";

export default function EventDetails() {
  const typeLabels: Record<string, string> = {
    url: "Via adresse internet",
    phone: "Par téléphone",
    info: "Information(s)",
    email: "Email",
  };

  const { slug } = useParams<{ slug: string }>();
  const [event, setEvent] = useState<IEvent | null>(null);
  const { handleError } = useErrorHandler();
  const apiBaseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function load() {
      if (!slug) return;
      try {
        const data = await getEventBySlug(slug);
        setEvent(data);
      } catch (error) {
        handleError(error);
      }
    }
    load();
  }, [slug, handleError]);

  if (!event) return <div className="wrapper p-6 md:p-10">Chargement...</div>;

  const address = `${event.streetAddress}, ${event.postalCode} ${event.city}`;

  return (
    <>
      <section className="wrapper py-8 md:py-12">
        {/* En-tête: Titre, catégorie, tags, organisateur */}
        <header className="mb-6 md:mb-8">
          <h1 className="titleStyle text-3xl md:text-4xl font-title leading-tight">
            {event.title}
          </h1>
          <div className="bodyWrapper mt-3 flex flex-col items-start gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`font-body text-body font-bold px-2 py-1 rounded-xl dark:text-primary badge-${event.category.name}`}
              >
                {event.category.name}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {event.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="px-2 py-0.5 font-subtitle rounded-lg text-sm border border-royal text-royal dark:border-[#9BB5FF] dark:text-[#9BB5FF]"
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <div className="font-subtitle text-base md:text-lg text-slate-700 dark:text-slate-300">
              Organisé par {event.organizer}
            </div>
          </div>
        </header>

        {/* Grille responsive: mobile empilé, >=768px affiche à droite */}
        <div className="bodyWrapper grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Bloc affiche: en mobile placé avant les détails; en desktop colonne droite */}
          <aside className="md:col-span-5 md:col-start-8 order-1 md:order-2">
            <div className="md:px-0">
              <img
                src={`${apiBaseUrl}${event.poster}`}
                alt={`Affiche ${event.title}`}
                className="w-auto h-full max-h-[340px] sm:max-h-[380px] md:max-h-[420px] lg:max-h-[500px] xl:max-h-[700px]
                  object-contain mx-auto transition-transform duration-700 ease-out
                  group-hover:scale-105 group-hover:rotate-[0.5deg]
                  rounded-2xl
                  shadow-lg md:-mt-20 lg:-mt-30 xl:-mt-45"
                loading="lazy"
              />
            </div>
          </aside>

          {/* Détails */}
          <main className="md:col-span-7 order-2 md:order-1 flex flex-col gap-4 md:gap-5">
            <div className="flex items-center gap-3 text-slate-800 dark:text-slate-200">
              <i className="fa-solid fa-calendar-days"></i>
              <span>{event.dateFormatted}</span>
            </div>
            <div className="flex items-start gap-3 text-slate-800 dark:text-slate-200">
              <i className="fa-solid fa-location-dot mt-0.5"></i>
              <span>{address}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {event.registrationTime && (
                <div className="flex items-center gap-2">
                  <i className="fa-regular fa-clock"></i>
                  <span>Inscriptions: {event.registrationTime}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-hourglass-start"></i>
                <span>Début: {event.startTime}</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {typeof event.maxTeams === "number" && (
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-people-group"></i>
                  <span>Max équipes: {event.maxTeams}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-euro-sign"></i>
                <span>Tarif: {event.price} € / joueur</span>
              </div>
              {typeof event.creditCard === "boolean" && (
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-credit-card"></i>
                  <span>
                    TPE: {event.creditCard ? "Disponible" : "Non disponible"}
                  </span>
                </div>
              )}
            </div>
            {Array.isArray(event.reservation) &&
              event.reservation.length > 0 && (
                <div className="mt-2">
                  <h2 className="font-title text-xl mb-2">Réservations</h2>
                  <ul className="space-y-1">
                    {event.reservation.map((r, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <i className="fa-solid fa-arrow-right mt-1 text-royal"></i>
                        <span className="text-slate-800 dark:text-slate-200">
                          {r.type && typeLabels[r.type]
                            ? `${typeLabels[r.type]} : `
                            : ""}
                          {r.label ? `${r.label} - ` : ""}
                          {r.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            {event.description && (
              <div className="pt-2 md:pt-4">
                <h2 className="font-title text-xl mb-2">Description</h2>
                <p className="leading-relaxed text-slate-800 dark:text-slate-200">
                  {event.description}
                </p>
              </div>
            )}
            {/* Placeholders pour futurs ajouts (carte, carrousel) */}
            {/* // TODO : maps later */}
            {/* <div className="mt-6 md:mt-8 text-sm text-slate-500 dark:text-slate-400">
            Localisation (Google Maps) — à venir
          </div> */}
          </main>
        </div>
      </section>
      <DisplayEvents
        title="Concours qui peuvent vous intéressés"
        fetchEvents={() => getEventsByCategory(event.category.name)}
        hasButton={true}
        buttonLink="/events"
        currentEventId={event.id}
      />
    </>
  );
}
