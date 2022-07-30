import { MainSlider } from '../../components/mainSlider/MainSlider';
import { Contacts } from '../../components/contacts/contacts';
import { Map } from '../../components/map/Map';
import { MainInfo } from '../../components/mainInfo/mainInfo';
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
      <MainInfo />
      <Map place="main-map" />
    </div>
  );
};
