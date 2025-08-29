import type { IEvents } from "../@types/event";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

/**
 * @function getAllEvents
 * @description Fetches all events from the API.
 *
 * @returns {Promise<IEvents>} A promise that resolves to an array of events object.
 *
 * @throws Throws an error if the request fails or if there is an issue with the network.
 */

export async function getAllEvents(): Promise<IEvents> {
  const response = await fetch(`${apiBaseUrl}/events`);
  if (!response.ok) {
    throw new Error(
      `Erreur lors de la récupération des concours: ${response.statusText}`
    );
  }

  const events = await response.json();
  return events;
}
