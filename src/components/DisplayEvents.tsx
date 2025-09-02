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
      <section className="px-4 xxs:px-16 xlg:px-32 xl:px-60 pt-10">
        <h2 className="text-3xl mb-4 font-title text-center xxs:text-left">
          {title}
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            300: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            850: { slidesPerView: 2 },
            1450: { slidesPerView: 3 },
            1750: { slidesPerView: 4 },
          }}
          modules={[Pagination, Navigation, A11y]}
          className="mySwiper h-180"
        >
          {eventsList.map((event) => (
            <SwiperSlide>
              <EventCard event={event} key={event.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
