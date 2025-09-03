import { Link } from "react-router-dom";
import type { IEvent } from "../@types/event";

const apiBaseUrl = import.meta.env.VITE_API_URL;
interface IEventCardProps {
  event: IEvent;
}
export default function EventCard({ event }: IEventCardProps) {
  return (
    <>
      <Link
        to={`/events/${event.slug}`}
        className="block w-full max-w-70 mx-auto pb-2 cursor-pointer hover:shadow-[0px_12px_15px_2px] hover:rounded-md hover:transition-shadow hover:shadow-primary"
      >
        <div className="h-130">
          <div key={event.id}>
            <img
              src={`${apiBaseUrl}${event.poster}`}
              alt={`Couverture de ${event.title}`}
              className="h-95 w-full object-cover mb-4 rounded-lg"
              loading="lazy"
            />
            <div className="flex justify-between pb-2 px-2">
              <p className="font-body tracking-wider text-sm ">{event.date}</p>
              <span className={`badge badge-${event.category.name}`}>
                {event.category.name}
              </span>
            </div>
            <p className="text-base font-subtitle font-bold tracking-wider pb-2 pl-2">
              {event.title.toUpperCase()}
            </p>
            <p className="font-body tracking-wider pb-2 pl-2 italic text-sm">
              85000 Saint-Martin-Lars-en-Sainte-Hermine
            </p>
          </div>
        </div>
        <button className="button-primary">Voir les détails</button>
      </Link>
    </>
  );
}
