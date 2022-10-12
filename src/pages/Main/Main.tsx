import { MainSlider } from '../../components/mainSlider/MainSlider';
import { Contacts } from '../../components/contacts/contacts';
import { Map } from '../../components/map/Map';
import { Service } from '../../components/service/service';
import { ImagesSlider } from '../../components/imagesSlider/ImagesSlider';
import arrowDown from '../../assets/arrow-down.svg';
import './main.css';
import { REVIEW } from '../../constants/modalType';
import { Review } from '../../components/review/review';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getAllReviews } from '../../store/api/api';
import { useEffect } from 'react';
import { chengeModal, openModal } from '../../store/appReducer';

export const Main = () => {
  const dispatch = useAppDispatch();
  const { reviews } = useAppSelector((state) => state.apiReducer);
  useEffect(() => {
    dispatch(getAllReviews());
  }, []);
  return (
    <div className="main-box">
      <MainSlider />
      <Contacts />
      <div className="short-info-box">
        <h1>КОННЫЙ КЛУБ КОННЫЙ КОНТИНЕНТ</h1>
        <p className="team-text">
          команда амбициозных творческих людей, сплочённых любовью и заботой к лошадям
        </p>
      </div>
      <Service />
      <div className="short-info-box">
        <p className="team-text">
          если вы еще не с нами, посмотрите фото наших счастливых клиентов...
        </p>
        <img className="arrow-down" src={arrowDown} alt="" />
      </div>
      <ImagesSlider />
      <div className="short-info-box">
        <p className="team-text">Мы ценим каждого клиента, клиенты ценят нас...</p>
        <img className="arrow-down" src={arrowDown} alt="" />
      </div>
      <button
        className="btn-review"
        onClick={() => {
          dispatch(chengeModal({ modalType: REVIEW }));
          dispatch(openModal());
        }}
      >
        Оставить отзыв
      </button>
      <div className="">
        {reviews.slice(0, 3).map((review) => {
          return (
            <Review
              key={review.id}
              name={review.name}
              countStars={review.stars as number}
              description={review.description}
            />
          );
        })}
      </div>
      <button
        className="btn-review"
        onClick={() => {
          dispatch(chengeModal({ modalType: REVIEW }));
          dispatch(openModal());
        }}
      >
        Посмотреть все отзывы
      </button>
      <div className="short-info-box last-main">
        <h1>Наши контактные данные</h1>
        <div className="contact-data">
          <p className="text-data">
            Телефон для связи:
            <span> +375295512947 (МТС)</span>
          </p>
          <p className="text-data">
            Emaill:
            <span> k.klub.kontinent@gmail.com</span>
          </p>
          <p className="text-data">
            Адрес:
            <span> Беларусь, Брестская область, Кобрин, Первомайская улица, 149</span>
          </p>
        </div>
      </div>
      <h2 className="gallery-title">Карта</h2>
      <Map place="main-map" />
    </div>
  );
};
