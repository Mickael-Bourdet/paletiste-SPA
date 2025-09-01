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
        className="block w-full max-w-80 mx-auto pb-2 cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow hover:shadow-primary"
      >
        <div className="h-160">
          <div key={event.id}>
            <img
              src={`${apiBaseUrl}${event.poster}`}
              alt={`Couverture de ${event.title}`}
              className="h-110 w-full object-cover mb-4"
              width={160}
              height={320}
              loading="lazy"
            />
            <div className="flex justify-between pb-2 px-2">
              <p className="font-body tracking-wider ">{event.date}</p>
              <span className="bg-delete font-body text-sm text-body px-2 py-1 rounded-xl">
                {event.category.name}
              </span>
            </div>
            <p className="text-lg font-subtitle font-bold tracking-wider pb-2 pl-2">
              {event.title.toUpperCase()}
            </p>
            <p className="font-body tracking-wider pb-2 pl-2">
              Test d'une adresse assez longue sur 2 lignes (85)
            </p>
          </div>
        </div>
        <button className="bg-primary text-body py-2 px-4 mx-auto block my-4 rounded-xl cursor-pointer hover:bg-primary-hover">
          Voir les détails
        </button>
      </Link>
    </>
  );
}
