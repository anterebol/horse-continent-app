import { EventType } from '../../types/eventType';
import { EventItem } from './EventItem/EventItem';
import './eventList.css';
export const EventList = (props: { events: EventType[] }) => {
  const { events } = props;
  return (
    <ul className="event-list">
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
};
