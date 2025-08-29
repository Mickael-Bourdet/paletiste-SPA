import { getAllEvents } from "../api/eventAPI";
import DisplayEvents from "../components/DisplayEvents";

export default function HomePage() {
  return (
    <>
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
