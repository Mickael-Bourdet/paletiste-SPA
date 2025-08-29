import { useEffect, useState } from "react";
import type { IEvents } from "../@types/event";
import { getAllEvents } from "../api/eventAPI";
import EventCard from "../components/EventCard";

export default function HomePage() {
  const [eventsList, setEventsList] = useState<IEvents>([]);
  useEffect(() => {
    async function loadEvents() {
      const events = await getAllEvents();

      setEventsList(events);
    }
    loadEvents();
  }, []);
  return (
    <>
      <div className="flex flex-wrap mx-auto justify-center">
        {eventsList.map((event) => (
          <EventCard event={event} />
        ))}
      </div>
    </>
  );
}
