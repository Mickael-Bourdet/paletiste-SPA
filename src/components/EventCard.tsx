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
        to={`/concours/${event.slug}`}
        className="group block w-full max-w-70 mx-auto cursor-pointer"
      >
        <article
          className="rounded-2xl overflow-hidden border-2 border-slate-300/40 dark:border-white/10 bg-white/70 dark:bg-slate-800/40 backdrop-blur-sm 
        shadow transition-all duration-300 hover:shadow-lg hover:shadow-primary/40 hover:border-primary/30"
        >
          <div className="relative h-70">
            <img
              src={`${apiBaseUrl}${event.poster}`}
              alt={`Couverture de ${event.title}`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] group-hover:brightness-95"
              loading="lazy"
            />
          </div>

          <div className="px-2 pb-4">
            <div className="flex justify-between items-baseline">
              <span className="font-body text-sm font-semibold">
                {event.dateFormatted}
              </span>
              <div className="flex items-baseline pb-4 gap-1">
                {event.teamType ? (
                  <div className="mt-2">
                    <span className="px-2 py-0.5 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-300/40 dark:border-white/10 text-[11px] text-primary font-subtitle">
                      {event.teamType}
                    </span>
                  </div>
                ) : null}
                <span className={`badge badge-${event.category.name} `}>
                  {event.category.name}
                </span>
              </div>
            </div>

            <h3 className="font-title text-base md:text-lg text-primary dark:text-primary leading-snug line-clamp-2 ">
              {event.title}
            </h3>
            <span className="font-subtitle italic">
              {event.city} ({event.postalCode.substring(0, 2)})
            </span>

            <div className="mt-2 flex items-center justify-end">
              <span
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg 
              border border-slate-300/60 dark:border-white/10 bg-white/70 dark:bg-slate-800/40 backdrop-blur-sm text-sm font-title 
              transition-colors duration-300 group-hover:border-royal/60"
              >
                Détails
                <svg
                  className="h-4 w-4 text-royal/80 transition-transform duration-300 group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
}
