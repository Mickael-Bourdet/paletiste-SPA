import {
  getLatestAddedEvents,
  getMajorEvents,
  getUpcomingEvents,
} from "../api/eventAPI";
import DisplayCalendar from "../components/DisplayCalendar";
import DisplayCategories from "../components/DisplayCategories";
import DisplayEvents from "../components/DisplayEvents";
import Presentation from "../components/Presentation";

export default function HomePage() {
  return (
    <>
      <Presentation />
      <DisplayEvents
        title="Concours à venir"
        fetchEvents={getUpcomingEvents}
        hasButton={true}
        buttonLink="/events"
      />
      <DisplayEvents
        title="Prochain concours majeur"
        fetchEvents={getMajorEvents}
        hasButton={false}
      />

      <DisplayCategories />
      <DisplayCalendar />
      <DisplayEvents
        title="Derniers concours enregistrés"
        fetchEvents={getLatestAddedEvents}
        hasButton={true}
        buttonLink="/events"
      />
    </>
  );
}
