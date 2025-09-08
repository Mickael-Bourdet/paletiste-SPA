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
      />
      <DisplayEvents
        title="Prochain évènement majeur"
        fetchEvents={getMajorEvents}
      />
      <DisplayEvents
        title="Derniers concours enregistrés"
        fetchEvents={getLatestAddedEvents}
      />
    </>
  );
}
