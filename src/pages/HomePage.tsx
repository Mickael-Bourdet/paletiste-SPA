import { getLatestAddedEvents, getUpcomingEvents } from "../api/eventAPI";
import DisplayCalendar from "../components/DisplayCalendar";
import DisplayCategories from "../components/DisplayCategories";
import DisplayEvents from "../components/DisplayEvents";
import DisplayMajorEvent from "../components/DisplayMajorEvent";
import Presentation from "../components/Presentation";

export default function HomePage() {
  return (
    <>
      <Presentation />
      <DisplayEvents
        title="Concours à venir"
        fetchEvents={getUpcomingEvents}
        hasButton={true}
        buttonLink="/concours"
      />
      <DisplayMajorEvent />
      <DisplayCategories />
      <DisplayCalendar />
      <DisplayEvents
        title="Derniers concours enregistrés"
        fetchEvents={getLatestAddedEvents}
        hasButton={true}
        buttonLink="/concours"
      />
    </>
  );
}
