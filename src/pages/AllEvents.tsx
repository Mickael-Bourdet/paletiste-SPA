import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import type { IEvent } from "../@types/event";
import { getAllEvents } from "../api/eventAPI";
import EventCard from "../components/EventCard";
import { useErrorHandler } from "../utils/useErrorHandler";
import DepartmentFilter from "../components/modals/DepartmentFilter";

const PAGE_SIZE = 20;

type Filters = {
  date: string; // ISO (yyyy-mm-dd)
  month: number | null; // 0-11
  department: string[]; // multi
  paletType: string[]; // multi (Fonte, Laiton, Bois, Terre)
  teamType: string[]; // multi
  organizerType: string[]; // multi (club, association, federation, autres)
};

const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

function getInitialFilters(searchParams: URLSearchParams): Filters {
  const category = searchParams.get("category");
  const date = searchParams.get("date") || "";
  const month = searchParams.get("month");
  const department =
    searchParams.get("department")?.split(",").filter(Boolean) || [];
  const teamType =
    searchParams.get("teamType")?.split(",").filter(Boolean) || [];
  const organizerType =
    searchParams.get("organizerType")?.split(",").filter(Boolean) || [];

  // Convertir le nom du mois en index
  const monthIndex = month
    ? months.findIndex((m) => m.toLowerCase() === month.toLowerCase())
    : null;

  return {
    date,
    month: monthIndex !== -1 ? monthIndex : null,
    department,
    paletType: category ? [category] : [],
    teamType,
    organizerType,
  };
}

export default function AllEvents() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { handleError } = useErrorHandler();
  const [events, setEvents] = useState<IEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<Filters>(() =>
    getInitialFilters(searchParams)
  );
  const [open, setOpen] = useState<string | null>(null);
  const [displayMonth, setDisplayMonth] = useState<number>(
    new Date().getMonth()
  );
  const [displayYear, setDisplayYear] = useState<number>(
    new Date().getFullYear()
  );

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const data = await getAllEvents(searchParams);
        setEvents(data);
      } catch (e) {
        handleError(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [handleError, searchParams]);

  // Options dynamiques issues des données
  const departmentOptions = useMemo(() => {
    const set = new Set<string>();
    events.forEach((e) => {
      if (e.postalCode?.length >= 2) set.add(e.postalCode.substring(0, 2));
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [events]);

  // Liste fixe des catégories de palets disponibles
  const paletOptions = ["Fonte", "Laiton", "Bois", "Terre", "Multi"];

  const teamTypeOptions = ["Individuel", "Doublette", "Triplette"];
  const organizerTypeOptions = ["Club", "Association", "Fédération", "Autres"];

  // Pagination
  const totalPages = Math.max(1, Math.ceil(events.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageSlice = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return events.slice(start, start + PAGE_SIZE);
  }, [events, currentPage]);

  function updateFilter<K extends keyof Filters>(key: K, value: Filters[K]) {
    setPage(1);
    setFilters((prev) => ({ ...prev, [key]: value }));
    const newParams = new URLSearchParams(searchParams);

    // Gestion des différents types de filtres
    if (key === "date") {
      if (value) {
        newParams.set("date", value as string);
      } else {
        newParams.delete("date");
      }
    } else if (key === "month") {
      if (value !== null) {
        newParams.set("month", months[value as number]); // Index → "Janvier"
      } else {
        newParams.delete("month");
      }
    } else if (key === "paletType") {
      if (Array.isArray(value) && value.length > 0) {
        newParams.set("category", value[0]);
      } else {
        newParams.delete("category");
      }
    } else if (key === "department") {
      if (Array.isArray(value) && value.length > 0) {
        newParams.set("department", value.join(","));
      } else {
        newParams.delete("department");
      }
    } else if (key === "teamType") {
      if (Array.isArray(value) && value.length > 0) {
        newParams.set("teamType", value.join(","));
      } else {
        newParams.delete("teamType");
      }
    } else if (key === "organizerType") {
      if (Array.isArray(value) && value.length > 0) {
        newParams.set("organizerType", value.join(","));
      } else {
        newParams.delete("organizerType");
      }
    }

    setSearchParams(newParams);
  }

  function updateMultiFilter(
    key: "department" | "paletType" | "teamType" | "organizerType",
    values: string[]
  ) {
    updateFilter(key, values);
  }

  function clearFilters() {
    setFilters({
      date: "",
      month: null,
      department: [],
      paletType: [],
      teamType: [],
      organizerType: [],
    });
    setPage(1);
    // Réinitialiser l'URL vers /concours sans paramètres
    setSearchParams(new URLSearchParams());
  }

  function prevMonth() {
    setDisplayMonth((m) => (m === 0 ? 11 : m - 1));
    setDisplayYear((y, i = displayMonth) => (i === 0 ? y - 1 : y));
  }
  function nextMonth() {
    setDisplayMonth((m) => (m === 11 ? 0 : m + 1));
    setDisplayYear((y, i = displayMonth) => (i === 11 ? y + 1 : y));
  }

  const monthDays = useMemo(() => {
    const firstDay = new Date(displayYear, displayMonth, 1);
    const startWeekday = (firstDay.getDay() + 6) % 7; // 0=Mon
    const daysInMonth = new Date(displayYear, displayMonth + 1, 0).getDate();
    const days = [] as { date: Date; past: boolean }[];
    const today = new Date();
    // Fill leading blanks
    for (let i = 0; i < startWeekday; i++)
      days.push({ date: new Date(NaN), past: true });
    for (let d = 1; d <= daysInMonth; d++) {
      const dt = new Date(displayYear, displayMonth, d);
      const past =
        dt < new Date(today.getFullYear(), today.getMonth(), today.getDate());
      days.push({ date: dt, past });
    }
    return days;
  }, [displayMonth, displayYear]);

  if (loading) return <div className="wrapper p-6 md:p-10">Chargement...</div>;

  return (
    <section className="wrapper py-8 md:py-12">
      {/* Title + Filters */}
      <header className="mb-6 md:mb-8">
        <h1 className="titleStyle text-3xl md:text-4xl font-title leading-tight">
          Tous les concours
        </h1>
        <div className="bodyWrapper mt-4 grid grid-cols-1 sm:grid-cols-2 mdl:grid-cols-3 xlg:grid-cols-5 gap-3 md:gap-4 items-end">
          <div className="flex flex-col gap-1">
            {/* Date */}
            <label className="text-sm text-slate-600 dark:text-slate-300">
              Date
            </label>
            <div className="relative inline-block">
              <button
                type="button"
                onClick={() => setOpen(open === "date" ? null : "date")}
                className="relative z-50 px-3 py-2 rounded-xl border bg-white/70 dark:bg-slate-900/30 border-slate-300 dark:border-white/10"
              >
                Sélectionner une date
              </button>

              {/* Date Modal */}
              {open === "date" && (
                <div className="absolute left-0 mt-2 z-50 w-[320px] p-4 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-white/20">
                  {/* Navigation mois */}
                  <div className="flex items-center justify-between mb-3">
                    <button
                      onClick={prevMonth}
                      className="px-2 py-1 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10"
                    >
                      <i className="fa-solid fa-chevron-left" />
                    </button>
                    <div className="font-subtitle">
                      {months[displayMonth]} {displayYear}
                    </div>
                    <button
                      onClick={nextMonth}
                      className="px-2 py-1 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10"
                    >
                      <i className="fa-solid fa-chevron-right" />
                    </button>
                  </div>

                  {/* Calendar */}
                  <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                    {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map(
                      (d) => (
                        <div
                          key={d}
                          className="text-slate-500 dark:text-slate-400"
                        >
                          {d}
                        </div>
                      )
                    )}
                  </div>
                  <div className="grid grid-cols-7 gap-1 mb-3">
                    {monthDays.map((cell, idx) =>
                      isNaN(cell.date.getTime()) ? (
                        <div key={idx} />
                      ) : (
                        <button
                          key={idx}
                          type="button"
                          disabled={cell.past}
                          onClick={() => {
                            const yyyy = cell.date.getFullYear();
                            const mm = String(
                              cell.date.getMonth() + 1
                            ).padStart(2, "0");
                            const dd = String(cell.date.getDate()).padStart(
                              2,
                              "0"
                            );
                            updateFilter("date", `${yyyy}-${mm}-${dd}`);
                            setOpen(null);
                          }}
                          className={`h-8 w-8 rounded-lg mx-auto text-sm ${
                            cell.past
                              ? "opacity-40 cursor-not-allowed"
                              : "hover:bg-slate-100 dark:hover:bg-white/10"
                          }`}
                        >
                          {cell.date.getDate()}
                        </button>
                      )
                    )}
                  </div>

                  {/* Month selector with buttons */}
                  <div className="grid grid-cols-3 gap-1.5">
                    {months.map((m, idx) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => {
                          updateFilter("month", idx);
                          setOpen(null);
                        }}
                        className={`px-2.5 py-1.5 rounded-lg border text-xs ${
                          filters.month === idx
                            ? "bg-royal text-white border-royal"
                            : "border-slate-300 dark:border-white/10 hover:bg-slate-200/60 dark:hover:bg-white/10"
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {open && (
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setOpen(null)}
                />
              )}
            </div>
          </div>

          {/* Department */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-600 dark:text-slate-300">
              Département
            </label>

            <div className="relative inline-block">
              <button
                type="button"
                onClick={() =>
                  setOpen(open === "department" ? null : "department")
                }
                className="relative z-50 px-3 py-2 rounded-xl border bg-white/70 hover:bg-slate-200 dark:bg-slate-900/30 border-slate-300 dark:border-white/10"
              >
                Choisir un département
              </button>

              {open === "department" && (
                <DepartmentFilter
                  options={departmentOptions}
                  selected={filters.department}
                  onChange={(next) =>
                    setFilters({ ...filters, department: next })
                  }
                />
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-600 dark:text-slate-300">
              Type de palet
            </label>
            <div className="grid grid-cols-2 gap-2 rounded-xl border border-slate-300 dark:border-white/10 p-3 bg-white/70 dark:bg-slate-900/30">
              {paletOptions.map((c) => {
                const id = `palet-${c}`;
                const checked = filters.paletType.includes(c);
                return (
                  <label
                    key={c}
                    htmlFor={id}
                    className="inline-flex items-center gap-2 text-sm"
                  >
                    <input
                      id={id}
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => {
                        const next = e.target.checked
                          ? [...filters.paletType, c]
                          : filters.paletType.filter((x) => x !== c);
                        updateMultiFilter("paletType", next);
                      }}
                      className="h-4 w-4 accent-royal"
                    />
                    <span>{c}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-600 dark:text-slate-300">
              Type d'équipe
            </label>
            <div className="grid grid-cols-2 gap-2 rounded-xl border border-slate-300 dark:border-white/10 p-3 bg-white/70 dark:bg-slate-900/30">
              {teamTypeOptions.map((t) => {
                const id = `team-${t}`;
                const checked = filters.teamType.includes(t);
                return (
                  <label
                    key={t}
                    htmlFor={id}
                    className="inline-flex items-center gap-2 text-sm"
                  >
                    <input
                      id={id}
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => {
                        const next = e.target.checked
                          ? [...filters.teamType, t]
                          : filters.teamType.filter((x) => x !== t);
                        updateMultiFilter("teamType", next);
                      }}
                      className="h-4 w-4 accent-royal"
                    />
                    <span>{t}</span>
                  </label>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-600 dark:text-slate-300">
              Organisateur
            </label>
            <div className="grid grid-cols-2 gap-2 rounded-xl border border-slate-300 dark:border-white/10 p-3 bg-white/70 dark:bg-slate-900/30">
              {organizerTypeOptions.map((o) => {
                const id = `org-${o}`;
                const checked = filters.organizerType.includes(o);
                return (
                  <label
                    key={o}
                    htmlFor={id}
                    className="inline-flex items-center gap-2 text-sm"
                  >
                    <input
                      id={id}
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => {
                        const next = e.target.checked
                          ? [...filters.organizerType, o]
                          : filters.organizerType.filter((x) => x !== o);
                        updateMultiFilter("organizerType", next);
                      }}
                      className="h-4 w-4 accent-royal"
                    />
                    <span>{o}</span>
                  </label>
                );
              })}
            </div>
          </div>
          <div className="sm:col-span-2 mdl:col-span-3 xlg:col-span-5">
            <div className="flex flex-wrap gap-2 mt-2">
              {filters.date && (
                <span className="px-2 py-1 rounded-lg bg-slate-200/60 dark:bg-white/10 text-sm inline-flex items-center gap-2">
                  Date :{" "}
                  {new Date(filters.date).toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  <button
                    onClick={() => updateFilter("date", "")}
                    aria-label="Supprimer filtre date"
                  >
                    <i className="fa-solid fa-xmark" />
                  </button>
                </span>
              )}
              {filters.month !== null && (
                <span className="px-2 py-1 rounded-lg bg-slate-200/60 dark:bg-white/10 text-sm inline-flex items-center gap-2">
                  Mois: {months[filters.month]}
                  <button
                    onClick={() => updateFilter("month", null)}
                    aria-label="Supprimer filtre mois"
                  >
                    <i className="fa-solid fa-xmark" />
                  </button>
                </span>
              )}
              {filters.department.map((d) => (
                <span
                  key={d}
                  className="px-2 py-1 rounded-lg bg-slate-200/60 dark:bg-white/10 text-sm inline-flex items-center gap-2"
                >
                  Dep: {d}
                  <button
                    onClick={() =>
                      updateFilter(
                        "department",
                        filters.department.filter((x) => x !== d)
                      )
                    }
                    aria-label={`Supprimer département ${d}`}
                  >
                    <i className="fa-solid fa-xmark" />
                  </button>
                </span>
              ))}
              {filters.paletType.map((p) => (
                <span
                  key={p}
                  className="px-2 py-1 rounded-lg bg-slate-200/60 dark:bg-white/10 text-sm inline-flex items-center gap-2"
                >
                  Palet: {p}
                  <button
                    onClick={() =>
                      updateFilter(
                        "paletType",
                        filters.paletType.filter((x) => x !== p)
                      )
                    }
                    aria-label={`Supprimer type ${p}`}
                  >
                    <i className="fa-solid fa-xmark" />
                  </button>
                </span>
              ))}
              {filters.teamType.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded-lg bg-slate-200/60 dark:bg-white/10 text-sm inline-flex items-center gap-2"
                >
                  Équipe: {t}
                  <button
                    onClick={() =>
                      updateFilter(
                        "teamType",
                        filters.teamType.filter((x) => x !== t)
                      )
                    }
                    aria-label={`Supprimer équipe ${t}`}
                  >
                    <i className="fa-solid fa-xmark" />
                  </button>
                </span>
              ))}
              {filters.organizerType.map((o) => (
                <span
                  key={o}
                  className="px-2 py-1 rounded-lg bg-slate-200/60 dark:bg-white/10 text-sm inline-flex items-center gap-2"
                >
                  Organisateur: {o}
                  <button
                    onClick={() =>
                      updateFilter(
                        "organizerType",
                        filters.organizerType.filter((x) => x !== o)
                      )
                    }
                    aria-label={`Supprimer organisateur ${o}`}
                  >
                    <i className="fa-solid fa-xmark" />
                  </button>
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-2 sm:col-span-2 mdl:col-span-3 xlg:col-span-5 mt-1">
            <button
              onClick={clearFilters}
              className="rounded-xl border border-slate-300 dark:border-white/10 px-4 py-2 hover:bg-slate-200/60 dark:hover:bg-white/10"
            >
              Réinitialiser
            </button>
            <div className="ml-auto text-sm text-slate-600 dark:text-slate-300 self-center">
              {events.length} résultat(s)
            </div>
          </div>
        </div>
      </header>

      {/* Grille d'événements */}
      <div className="bodyWrapper grid grid-cols-1 xxs:grid-cols-2 md:grid-cols-3 xlg:grid-cols-4 gap-4 md:gap-6">
        {pageSlice.map((ev) => (
          <EventCard key={ev.id} event={ev} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="bodyWrapper mt-8 flex items-center justify-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="rounded-lg px-3 py-2 border border-slate-300 dark:border-white/10 disabled:opacity-50"
          >
            Précédent
          </button>
          {Array.from({ length: totalPages }).map((_, i) => {
            const n = i + 1;
            const active = n === currentPage;
            return (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`rounded-lg px-3 py-2 border border-slate-300 dark:border-white/10 ${
                  active
                    ? "bg-royal text-white"
                    : "hover:bg-slate-200/60 dark:hover:bg-white/10"
                }`}
              >
                {n}
              </button>
            );
          })}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="rounded-lg px-3 py-2 border border-slate-300 dark:border-white/10 disabled:opacity-50"
          >
            Suivant
          </button>
        </nav>
      )}
    </section>
  );
}
