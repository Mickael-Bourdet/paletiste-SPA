import { useEffect, useState } from "react";
import type { IEvents } from "../@types/event";
import EventCard from "../components/EventCard";
import { useErrorHandler } from "../utils/useErrorHandler";

interface IDisplayEventsProps {
  title: string;
  fetchEvents: () => Promise<IEvents>;
}
export default function DisplayEvents({
  title,
  fetchEvents,
}: IDisplayEventsProps) {
  const [eventsList, setEventsList] = useState<IEvents>([]);
  const { handleError } = useErrorHandler();

  useEffect(() => {
    async function loadEvents() {
      try {
        const events = await fetchEvents();
        console.log(events);

        setEventsList(events);
      } catch (error) {
        handleError(error);
      }
    }
    loadEvents();
  }, [fetchEvents, handleError]);
  return (
    <>
      <section className="px-4 xxs:px-16 xl:px-64 pt-10">
        <h2 className="text-3xl mb-4 font-title text-center xxs:text-left">
          {title}
        </h2>
        <div className="xs:flex xs:flex-wrap mx-auto justify-center pb-20 xs:gap-2">
          {eventsList.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>
      </section>
    </>
  );
}
