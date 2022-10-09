import { EventType } from '../../../types/eventType';
import cameraImg from '../../../assets/camera.svg';
import { mounth } from '../../../constants/date';
import './eventItem.css';
import { arrFoto } from '../../../fotos/fotos';

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
    <>
      <li className="event-box">
        <div
          className="event-over"
          style={{
            background: `url(${event.img}) no-repeat center`,
            backgroundSize: 'cover',
          }}
        ></div>
        <div className="event-info-box">
          <h2 className="event-text">{event.name}</h2>
          <p className="event-text description">{event.description}</p>
        </div>
        <div className="event-main-info">
          <p className="event-text">{addCorrectDate()}</p>
          {/* <button className="event-btn">Детали...</button> */}
        </div>
      </li>
    </>
  );
};
