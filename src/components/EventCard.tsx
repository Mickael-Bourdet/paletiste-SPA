import { Link } from "react-router-dom";
import type { IEvent } from "../@types/event";

const apiBaseUrl = import.meta.env.VITE_API_URL;
interface IEventCardProps {
  event: IEvent;
}
export default function EventCard({ event }: IEventCardProps) {
  return (
    <>
      <Link to="#" className="block w-70 mx-auto py-2">
        <div
          key={event.id}
          className="cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow"
        >
          <img
            src={`${apiBaseUrl}${event.poster}`}
            alt={`Couverture de ${event.title}`}
            className="h-90 w-full object-contain mb-2 mx-auto"
            width={180}
            height={340}
            loading="lazy"
          />
          <p className="text-center text-lg font-body tracking-wider">
            {event.title}
          </p>
        </div>
      </Link>
    </>
  );
}
