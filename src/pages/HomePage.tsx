import {
  getLatestAddedEvents,
  getMajorEvents,
  getUpcomingEvents,
} from "../api/eventAPI";
import DisplayEvents from "../components/DisplayEvents";
import Presentation from "../components/Presentation";

export default function HomePage() {
  return (
    <>
      <Presentation />
      <DisplayEvents
        title="Évènements à venir"
        fetchEvents={getUpcomingEvents}
        hasButton={true}
        buttonLink="/events"
      />
      <DisplayEvents
        title="Prochain évènement majeur"
        fetchEvents={getMajorEvents}
        hasButton={false}
      />
      <DisplayEvents
        title="Derniers concours enregistrés"
        fetchEvents={getLatestAddedEvents}
        hasButton={true}
        buttonLink="/events"
      />
    </>
  );
}
