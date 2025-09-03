import { useEffect, useState } from "react";
import type { IEvents } from "../@types/event";
import EventCard from "../components/EventCard";
import { useErrorHandler } from "../utils/useErrorHandler";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
          <h2 className="text-3xl mb-4 font-title text-center md:text-left md:pl-6 mdl:pl-14 xlg:p-0">
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
              1450: { slidesPerView: 3 },
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
      </section>
    </>
  );
}
