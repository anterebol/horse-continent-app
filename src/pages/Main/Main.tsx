import { MainSlider } from '../../components/mainSlider/MainSlider';
import { Contacts } from '../../components/contacts/contacts';
import { Map } from '../../components/map/Map';
import { Service } from '../../components/service/service';
import { ImagesSlider } from '../../components/imagesSlider/ImagesSlider';
import arrowDown from '../../assets/arrow-down.svg';
import './main.css';

export const Main = () => {
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
          если ты еще не с нами, посмотри фото наших счастливых клиентов...
        </p>
        <img className="arrow-down" src={arrowDown} alt="" />
      </div>
      <ImagesSlider />
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
