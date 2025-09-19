import { useEffect, useMemo, useState } from "react";
import type { IEvent } from "../@types/event";
import { getMajorEvent } from "../api/eventAPI";
import { Link } from "react-router-dom";

export default function DisplayMajorEvent() {
  const [event, setEvent] = useState<IEvent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const apiBaseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function load() {
      try {
        const major: IEvent = await getMajorEvent();
        setEvent(major ?? null);
      } catch {
        setEvent(null);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const daysLeft = useMemo(() => {
    if (!event?.date) return null;
    const now = new Date();
    const d = new Date(event.date);
    const diff = Math.ceil(
      (d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
    );
    return diff >= 0 ? diff : null;
  }, [event]);

  if (loading) {
    return (
      <section className="wrapper py-8">
        <h2 className="titleStyle">Prochain concours majeur</h2>
        <div className="bodyWrapper h-80 rounded-2xl bg-body-second/60 dark:bg-sideMenu/10 animate-pulse" />
      </section>
    );
  }

  if (!event) {
    return null;
  }

  return (
    <section className="py-8">
      <div className="wrapper">
        <h2 className="titleStyle">Prochain concours majeur</h2>
        <div className="bodyWrapper">
          <article className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch rounded-3xl border border-slate-300/40 dark:border-white/10 bg-white/70 dark:bg-slate-800/40 backdrop-blur-md shadow-xl">
            <div className="flex items-center justify-center relative pt-4 sm:pt-0  min-h-[220px] sm:min-h-[300px] md:min-h-[340px] lg:min-h-[520px]  ">
              <img
                src={`${apiBaseUrl}${event.poster}`}
                alt={event.title}
                className="
                  w-auto h-full max-h-[340px] sm:max-h-[380px] md:max-h-[420px] lg:max-h-[500px]
                  object-contain mx-auto transition-transform duration-700 ease-out
                  group-hover:scale-105 group-hover:rotate-[0.5deg]
                  rounded-2xl
                  shadow-lg
                  "
              />
            </div>
            <div className="relative  p-6 md:p-8 flex flex-col justify-between">
              <h3 className="font-title text-2xl md:text-4xl text-primary dark:text-primary leading-tight">
                {event.title}
              </h3>
              <p className="mt-3 text-slate-700 dark:text-slate-200 font-body md:text-lg">
                {event.description?.slice(0, 220) ||
                  "Un rendez-vous d'exception qui rassemble joueurs confirmés et public passionné."}
                {event.description && event.description.length > 220 ? "…" : ""}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {event.tags?.slice(0, 2).map((tag) => (
                  <span
                    key={tag.id}
                    className="px-2 py-1 rounded-xl bg-royal/10 text-royal dark:text-white/90 border border-royal/30 text-xs md:text-sm"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl p-3 bg-body-second/70 dark:bg-white/5 border border-slate-300/40 dark:border-white/10">
                  <p className="text-xs text-slate-500 dark:text-slate-300">
                    Organisateur
                  </p>
                  <p className="font-semibold text-primary dark:text-primary">
                    {event.organizer}
                  </p>
                </div>
                <div className="rounded-xl p-3 bg-body-second/70 dark:bg-white/5 border border-slate-300/40 dark:border-white/10">
                  <p className="text-xs text-slate-500 dark:text-slate-300">
                    Date
                  </p>
                  <p className="font-semibold text-primary dark:text-primary">
                    {event.dateFormatted}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-col xxs:flex-row md:flex-col mdl:flex-row items-center justify-between gap-3">
                <Link
                  to={`/events/${event.slug}`}
                  className="flex-1 group relative inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300/60 dark:border-white/10 font-title md:text-lg bg-white/80 dark:bg-slate-800/40 backdrop-blur-sm shadow-sm hover:shadow-md dark:shadow-[#2c2f42] transition-all duration-300 hover:border-royal/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-royal/30"
                >
                  <span className="relative z-[1]">Voir les informations</span>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-xl overflow-hidden"
                  >
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-b from-slate-50/40 to-transparent dark:from-white/5" />
                  </span>
                </Link>
                <Link
                  to={`/events/${event.slug}/register`}
                  className="flex-1 bg-royal hover:bg-royal-hover text-white font-title md:text-lg px-5 py-3 rounded-xl shadow-md transition-colors duration-200 text-center"
                >
                  S'inscrire
                </Link>
              </div>
              <div className="mt-6 flex items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-300">
                <div className="flex items-center gap-2 ">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-royal animate-pulse" />
                  {daysLeft !== null ? (
                    <span>Départ dans J-{daysLeft}</span>
                  ) : (
                    <span>Inscription ouverte</span>
                  )}
                </div>
                <span className="px-2 py-1 rounded-md bg-slate-300/50 backdrop-blur-sm text-xs md:text-sm">
                  {event.city}
                </span>
                {event.category?.name ? (
                  <span
                    className={`badge badge-${event.category.name} !text-white/95 bg-white/15 !px-2 !py-1 !text-xs md:!text-sm`}
                  >
                    {event.category.name}
                  </span>
                ) : null}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
