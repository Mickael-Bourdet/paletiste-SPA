import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IEvent } from "../@types/event";
import { getEventBySlug } from "../api/eventAPI";
import { useErrorHandler } from "../utils/useErrorHandler";

export default function EventDetails() {
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

  if (!event) return <div className="wrapper p-10">Chargement...</div>;
  console.log(event);
  return (
    <div className="wrapper p-10 pb-20">
      <h1 className="text-3xl font-title mb-4">{event.title}</h1>
      <div className="flex flex-col items-start gap-2">
        <span
          className={`font-body text-body font-bold px-2 py-1 rounded-xl dark:text-primary badge-${event.category.name}`}
        >
          {event.category.name}
        </span>

        <div className="flex flex-wrap gap-2 py-2">
          {event.tags.map((tag) => (
            <span
              key={tag.id}
              className={`px-2 py-0.5 font-subtitle rounded-lg text-sm border border-royal text-royal dark:border-[#9BB5FF] dark:text-[#9BB5FF]`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
      <span className="mb-2 font-subtitle text-lg">
        Organisé par : {event.organizer}
      </span>
      <img
        src={`${apiBaseUrl}${event.poster}`}
        alt={`Couverture de ${event.title}`}
        className="h-95 max-w-70 w-full object-cover mb-4 rounded-lg my-4 mx-auto"
        loading="lazy"
      />
      <div>
        <i className="fa-solid fa-calendar-days mr-2 mb-4"></i>
        <span className="mb-2">{event.date}</span>
      </div>
      <div>
        <i className="fa-solid fa-location-dot mr-2 mb-4"></i>
        <span>{event.location}</span>
      </div>
      <p className="pb-2">Heure d'inscription : {event.registration_time}</p>
      <p>Heure du début : {event.start_time}</p>
      <p>
        Réservation :{" "}
        {event.reservation.map((r) => (
          <p key={r.id}>{r.value}</p>
        ))}
      </p>
      <p>Limité à {event.nb_teams} équipes</p>
      <p>Prix d'inscription : {event.price}€ /joueur </p>
      <p>TPE disponible : {event.credit_card}</p>

      <div className="pt-10">
        <p>{event.description}</p>
      </div>
    </div>
  );
}
