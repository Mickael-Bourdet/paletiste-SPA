import { useEffect, useState } from "react";
import type { IEvents } from "../@types/event";
import EventCard from "../components/EventCard";

interface IDisplayEventsProps {
  title: string;
  fetchEvents: () => Promise<IEvents>;
}
export default function DisplayEvents({
  title,
  fetchEvents,
}: IDisplayEventsProps) {
  const [eventsList, setEventsList] = useState<IEvents>([]);
  useEffect(() => {
    async function loadEvents() {
      const events = await fetchEvents();

      setEventsList(events);
    }
    loadEvents();
  }, [fetchEvents]);
  return (
    <>
      <section className="px-4 xxs:px-16 xl:px-64 pt-10">
        <h2 className="text-3xl mb-4 font-title text-center xxs:text-left">
          {title}
        </h2>
        <div className="xs:flex xs:flex-wrap mx-auto justify-center pb-6 pb-20">
          {eventsList.map((event) => (
            <EventCard event={event} />
          ))}
        </div>
      </section>
    </>
  );
}
