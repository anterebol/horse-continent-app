import './service.css';
import { useAppDispatch } from '../../hooks/hooks';
import { openModal, chengeModal } from '../../store/appReducer';
import camera from '../../assets/services/camera.svg';
import rent from '../../assets/services/rent.svg';
import cup from '../../assets/services/cup.svg';
import student from '../../assets/services/student.svg';
import { RENT, PHOTO, STUDY, CONTEST } from '../../constants/modalType';
import {
  textOpportunity,
  textFotoSession,
  textContest,
  textRent,
  textTeach,
} from '../../constants/serviceText';
import { ServiceItem } from './serviceItem/serviceItem';

export const Service = () => {
  return (
    <div className="box-info">
      <div className="title-opp">{textOpportunity}</div>

      <div className="opportunites">
        <ServiceItem
          modalType={PHOTO}
          icon={camera}
          title={textFotoSession}
          color="blue"
          p="Съемка"
        />
        <ServiceItem modalType={RENT} icon={rent} title={textRent} color="orange" p="Аренда" />
        <ServiceItem
          modalType={CONTEST}
          icon={cup}
          title={textContest}
          color="blue"
          p="Мероприятия"
        />
        <ServiceItem
          modalType={STUDY}
          icon={student}
          title={textTeach}
          color="orange"
          p="Обучение"
        />
      </div>
    </div>
  );
};
