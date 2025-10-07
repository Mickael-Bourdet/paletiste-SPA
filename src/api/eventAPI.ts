import type { IEvent, IEvents } from "../@types/event";

const apiBaseUrl = import.meta.env.VITE_API_URL;

/**
 * @function getAllEvents
 * @description Fetches all events from the API.
 *
 * @returns {Promise<IEvents>} A promise that resolves to an array of events object.
 *
 * @throws Throws an error if the request fails or if there is an issue with the network.
 */

export async function getAllEvents(params?: URLSearchParams): Promise<IEvents> {
  const queryString = params ? `?${params.toString()}` : "";
  const response = await fetch(`${apiBaseUrl}/events${queryString}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(
      `Erreur lors de la récupération des concours: ${response.statusText}`
    );
  }

  const events = await response.json();
  return events;
}

export async function getUpcomingEvents(): Promise<IEvents> {
  const response = await fetch(`${apiBaseUrl}/events/upcoming`);
  if (!response.ok) {
    throw new Error(
      `Erreur lors de la récupération des concours: ${response.statusText}`
    );
  }

  const events = await response.json();
  return events;
}
export async function getMajorEvent(): Promise<IEvent> {
  const response = await fetch(`${apiBaseUrl}/events/major`);
  if (!response.ok) {
    throw new Error(
      `Erreur lors de la récupération des concours: ${response.statusText}`
    );
  }

  const event = await response.json();
  return event as IEvent;
}
export async function getLatestAddedEvents(): Promise<IEvents> {
  const response = await fetch(`${apiBaseUrl}/events/latest`);
  if (!response.ok) {
    throw new Error(
      `Erreur lors de la récupération des concours: ${response.statusText}`
    );
  }

  const events = await response.json();
  return events;
}

/**
 * @function getEventBySlug
 * @description Fetches a single event from the API using its slug.
 *
 * @param {string} slug - The slug of the event.
 * @returns {Promise<IEvent>} A promise that resolves to the event object.
 *
 * @throws Throws an error if the request fails or if there is an issue with the network.
 */
export async function getEventBySlug(slug: string): Promise<IEvent> {
  const response = await fetch(`${apiBaseUrl}/events/slug/${slug}`);
  if (!response.ok) {
    throw new Error(
      `Erreur lors de la récupération du concours: ${response.statusText}`
    );
  }
  return response.json();
}

export async function getEventsByCategory(category: string): Promise<IEvents> {
  const response = await fetch(`${apiBaseUrl}/events?category=${category}`);
  if (!response.ok) {
    throw new Error(
      `Erreur lors de la récupération des concours: ${response.statusText}`
    );
  }
  const events = await response.json();
  return events;
}
