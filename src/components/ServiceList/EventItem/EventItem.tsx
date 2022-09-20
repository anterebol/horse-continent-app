import { EventType } from '../../../types/eventType';
import cameraImg from '../../../assets/camera.svg';
import { mounth } from '../../../constants/date';
import './eventItem.css';

export const EventItem = (props: { event: EventType }) => {
  const { event } = props;
  const addCorrectDate = () => {
    const { date } = event;
    const eventDate = new Date(date);
    const correctDate = `${eventDate.getDate()} ${
      mounth[eventDate.getMonth()]
    } ${eventDate.getFullYear()}`;
    return correctDate;
  };
  return (
    <li className="event-box">
      <div className="event-over"></div>
      <div className="event-img-box">
        <img className="event-img" src={event.img || cameraImg} alt="event-img" />
      </div>
      <div className="event-info-box">
        <div className="event-main-info">
          <p className="event-text">{event.name}</p>
          <p className="event-text">{addCorrectDate()}</p>
        </div>
        <p className="event-text description">{event.description}</p>
      </div>
    </li>
  );
};
