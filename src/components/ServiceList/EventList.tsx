import { EventType } from '../../types/eventType';
import { EventItem } from './EventItem/EventItem';
import './eventList.css';
export const EventList = (props: { events: EventType[] }) => {
  const { events } = props;
  const checkEvents = (events) =>
    events.length > 0 ? events : <p className="empty-text">Список мероприятий пуст</p>;
  return (
    <ul className="event-list">
      {checkEvents(
        events.filter((event) => event).map((event) => <EventItem key={event.id} event={event} />)
      )}
    </ul>
  );
};
