import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IEvent } from "../@types/event";
import { getEventBySlug } from "../api/eventAPI";
import { useErrorHandler } from "../utils/useErrorHandler";

export default function EventDetails() {
  const { slug } = useParams<{ slug: string }>();
  const [event, setEvent] = useState<IEvent | null>(null);
  const { handleError } = useErrorHandler();

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

  if (!event) return <div className="wrapper py-10">Chargement...</div>;

  return (
    <div className="wrapper py-10">
      <h1 className="text-3xl font-title mb-4">{event.title}</h1>
      <p className="mb-2">{event.date}</p>
      <p className="mb-6">{event.location}</p>
      <div className="prose max-w-none">
        <p>{event.description}</p>
      </div>
    </div>
  );
}
