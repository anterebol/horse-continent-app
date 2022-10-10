import { EventType } from '../../../types/eventType';
import cameraImg from '../../../assets/camera.svg';
import { mounth } from '../../../constants/date';
import './eventItem.css';
import { arrFoto } from '../../../fotos/fotos';
import { useEffect, useState } from 'react';
import spinner from '../../../assets/spinner.gif';
import { JsxElement } from 'typescript';

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

  const [loaded, setLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      const img = document.createElement('img');
      img.src = event.img || cameraImg;
      img.onload = () => {
        setLoader(true);
      };
    }, 500);
  }, []);
  return (
    <>
      <li className="event-box">
        {/* <div
          className="event-over"
          // style={{
          //   background: `url(${event.img}) no-repeat center`,
          //   backgroundSize: 'cover',
          // }}
        >
          <img src={event.img} alt="" />
        </div> */}
        <div className="event-img-box">
          {!loaded ? (
            <img
              src={spinner}
              alt=""
              className={['event-img', !loaded ? 'load-event' : ''].join(' ')}
            />
          ) : (
            <img
              src={event.img || cameraImg}
              alt=""
              className={['event-img', !loaded ? 'load-event' : ''].join(' ')}
            />
          )}
        </div>
        <div className="event-info-box">
          <h2 className="event-text">{event.name}</h2>
          <p className="event-text description">{event.description}</p>
        </div>
        <div className="event-main-info">
          <p className="event-text">{addCorrectDate()}</p>
          <button className="event-btn">Детали...</button>
        </div>
      </li>
    </>
  );
};
