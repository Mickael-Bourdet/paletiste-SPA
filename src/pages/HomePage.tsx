import { getAllEvents } from "../api/eventAPI";
import DisplayEvents from "../components/DisplayEvents";
import Presentation from "../components/Presentation";

export default function HomePage() {
  return (
    <>
      <Presentation />
      <DisplayEvents title="Évènements à venir" fetchEvents={getAllEvents} />
      <DisplayEvents
        title="Prochain évènement majeur"
        fetchEvents={getAllEvents}
      />
      <DisplayEvents
        title="Derniers concours enregistrés"
        fetchEvents={getAllEvents}
      />
    </>
  );
}
