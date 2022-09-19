import { EventType } from '../../../types/eventType';
import cameraImg from '../../../assets/camera.svg';
import './eventItem.css';

export const EventItem = (props: { event: EventType }) => {
  const { event } = props;
  return (
    <li className="event-box">
      <div className="event-img-box">
        <img className="event-img" src={event.img || cameraImg} alt="event-img" />
      </div>
      <div className="event-info-box">
        <div className="event-main-info">
          <p className="event-text">{event.name}</p>
          <p className="event-text">{event.date}</p>
        </div>
        <p className="event-text">{event.description}</p>
      </div>
    </li>
  );
};
