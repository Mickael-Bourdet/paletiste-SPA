import { useEffect, useState } from "react";
import type { IEvents } from "../@types/event";
import { getAllEvents } from "../api/eventAPI";
const apiBaseUrl = import.meta.env.VITE_API_URL;

export default function HomePage() {
  const [eventsList, setEventsList] = useState<IEvents>([]);
  //   const { handleError } = useErrorHandler();

  useEffect(() => {
    async function loadEvents() {
      const events = await getAllEvents();

      setEventsList(events);
    }
    loadEvents();
  }, []);
  return (
    <>
      <div className="flex gap-10 justify-around px-48">
        {eventsList.map((event) => (
          <div
            key={event.id}
            className="cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow w-50"
          >
            <img
              src={`${apiBaseUrl}${event.poster}`}
              alt={`Couverture de ${event.title}`}
              className="h-80 w-auto object-contain mb-2 mx-auto rounded-4xl"
              width={160}
              height={320}
              loading="lazy"
            />
            <p className="text-center text-lg font-body tracking-wider">
              {event.title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
