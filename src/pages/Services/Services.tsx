import './services.css';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { getAllEvents } from '../../store/api/api';
import { useEffect, useState } from 'react';
import { EventList } from '../../components/ServiceList/EventList';
import { EventType } from '../../types/eventType';
import { Service } from '../../components/service/service';

export const Services = () => {
  const { events } = useAppSelector((state) => state.apiReducer);
  const dispatch = useAppDispatch();
  const [eventTime, eventTimeSet] = useState('future');
  useEffect(() => {
    dispatch(getAllEvents());
  }, []);
  const updateEventTime = (time) => {
    if (time === 'future') {
      eventTimeSet('future');
    } else {
      eventTimeSet('past');
    }
  };
  const isFuture = () => (eventTime === 'future' ? true : false);
  return (
    <>
      <section className="service-box">
        <Service />
        <div className="main-info-service">
          <p>Основными услугами клуба является аренда лошади и обучение с опытным инструктором.</p>
          <p>
            Наш клуб периодически организовывает мероприятия, на которые мы приглашаем всех желающих
            поучаствовать.
          </p>
        </div>
      </section>
      <section className="events-box">
        <div className="controll-events">
          <button
            className="controll-events__button"
            onClick={() => updateEventTime('future')}
            type="button"
            disabled={isFuture()}
          >
            Будущие мероприятия
          </button>
          <button
            className="controll-events__button"
            onClick={() => updateEventTime('past')}
            type="button"
            disabled={!isFuture()}
          >
            Прошедшие мероприятия
          </button>
        </div>
        <h2 className="service-title">{isFuture() ? 'Будущие' : 'Прошедшие'} мероприятия</h2>
        {isFuture() ? (
          <EventList events={events.filter((event) => !wasEvent(event))} />
        ) : (
          <EventList events={events.filter((event) => wasEvent(event))} />
        )}
      </section>
    </>
  );
};

function wasEvent(event: EventType) {
  const eventTime = new Date(event.date).getTime();
  const currentTime = Date.now();
  return event.was || eventTime < currentTime;
}
