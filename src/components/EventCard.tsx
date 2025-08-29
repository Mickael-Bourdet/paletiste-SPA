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
        to="#"
        className="block w-80 mx-auto pt-6 cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow"
      >
        <div className="h-130">
          <div key={event.id}>
            <img
              src={`${apiBaseUrl}${event.poster}`}
              alt={`Couverture de ${event.title}`}
              className="h-90 w-full object-contain mb-2 mx-auto"
              width={180}
              height={340}
              loading="lazy"
            />
            <p className="font-body tracking-wider pb-2 pl-2">{event.date}</p>
            <p className="text-lg font-subtitle tracking-wider pb-2 pl-2">
              {event.title}
            </p>
            <p className="font-body tracking-wider pb-2 pl-2">
              {event.location}
            </p>
          </div>
        </div>
        <button className="bg-primary text-body p-2 px-4 mx-auto block my-4 rounded-xl">
          Voir les détails
        </button>
      </Link>
    </>
  );
}
