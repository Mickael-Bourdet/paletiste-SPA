import { useEffect, useState } from "react";
import type { IEvents } from "../@types/event";
import EventCard from "../components/EventCard";
import { useErrorHandler } from "../utils/useErrorHandler";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

interface IDisplayEventsProps {
  title: string;
  fetchEvents: () => Promise<IEvents>;
  hasButton: boolean;
  buttonLink?: string;
}
export default function DisplayEvents({
  title,
  fetchEvents,
  hasButton,
  buttonLink,
}: IDisplayEventsProps) {
  const [eventsList, setEventsList] = useState<IEvents>([]);
  const { handleError } = useErrorHandler();

  useEffect(() => {
    async function loadEvents() {
      try {
        const events = await fetchEvents();
        setEventsList(events);
      } catch (error) {
        handleError(error);
      }
    }
    loadEvents();
  }, [fetchEvents, handleError]);
  return (
    <>
      <section className="py-10">
        <div className="wrapper">
          <h2 className="text-3xl mb-6 font-title text-center md:text-left md:pl-6 mdl:pl-14 xlg:pl-10 2xl:pl-0">
            {title}
          </h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              300: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1750: { slidesPerView: 4 },
            }}
            modules={[Pagination, Navigation, A11y]}
            className="mySwiper h-160 overflow-visible"
          >
            {eventsList.map((event) => (
              <SwiperSlide key={event.id}>
                <EventCard event={event} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {hasButton ? (
          <div className="text-center mt-4">
            <Link
              to={buttonLink ?? "/events"}
              className="group relative inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300/60 dark:border-white/10 
            font-title md:text-lg bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm shadow-sm hover:shadow-md dark:shadow-[#2c2f42]
            transition-all duration-300 hover:border-royal/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-royal/30 "
            >
              <span className="relative z-[1]">Voir tous les concours</span>
              <svg
                className="relative z-[1] h-5 w-5 text-royal/80 transition-transform duration-300 ease-out translate-x-0 group-hover:translate-x-0.5"
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
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-xl overflow-hidden"
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-b from-slate-50/40 to-transparent dark:from-white/5" />
                <span className="absolute inset-0 rounded-xl -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-royal/10 to-transparent" />
              </span>
            </Link>
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
}
