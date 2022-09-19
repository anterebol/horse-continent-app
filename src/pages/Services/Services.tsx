import './services.css';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { getAllEvents } from '../../store/api/api';
import { useEffect } from 'react';
import { EventList } from '../../components/ServiceList/EventList';
export const Service = () => {
  const { events } = useAppSelector((state) => state.apiReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllEvents());
  }, []);
  return (
    <>
      <section className="service-box">
        <h2 className="service-title">Услуги клуба</h2>
      </section>
      <section>
        <button className="future-events-btn"></button>
        <button className="past-events-btn"></button>
      </section>
      <section className="service-box">
        <h2 className="service-title">Будущие мероприятия</h2>
        <EventList events={events} />
      </section>
      <section className="service-box">
        <h2 className="service-title">Прошедшие мероприятия</h2>
        <EventList events={events} />
      </section>
    </>
  );
};
