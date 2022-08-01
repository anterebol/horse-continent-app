import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { serviceInfo } from '../../constants/serviceText';
import camera from '../../assets/services/camera.svg';
import rent from '../../assets/services/rent.svg';
import cup from '../../assets/services/cup.svg';
import student from '../../assets/services/student.svg';
import { RENT, PHOTO, STUDY, CONTEST, CONTACTS } from '../../constants/modalType';
import { textFotoSession, textContest, textRent, textTeach } from '../../constants/serviceText';
import { ServiceItem } from '../service/serviceItem/serviceItem';
import { chengeModal, openModal } from '../../store/appReducer';
import './modalService.css';

const checkServise = (modalType: string) => {
  switch (modalType) {
    case RENT:
      return { icon: rent, title: textRent, color: 'orange', p: 'Аренда' };
    case CONTEST:
      return {
        icon: cup,
        title: textContest,
        color: 'blue',
        p: 'Мероприятия',
      };
    case PHOTO:
      return {
        icon: camera,
        title: textFotoSession,
        color: 'blue',
        p: 'Съемка',
      };
    case STUDY:
      return {
        icon: student,
        title: textTeach,
        color: 'orange',
        p: 'Обучение',
      };
    default:
      return { icon: '', title: '', color: '', p: '' };
  }
};
export const ModalService = () => {
  const dispatch = useAppDispatch();
  const { modalType } = useAppSelector((state) => state.appReducer);
  const { icon, title, color, p } = checkServise(modalType);
  return (
    <div className="modal-service">
      <div className="first-modal-floor">
        <ServiceItem modalType={modalType} icon={icon} title={title} color={color} p={p} />
        <h2 className="modal-service-title">{serviceInfo[modalType].title}</h2>
      </div>
      <p className="modal-service-question">{serviceInfo[modalType].question}</p>
      <p className="modal-service-answer">{serviceInfo[modalType].answer}</p>
      <button
        className="modal-contakts-link"
        onClick={() => {
          dispatch(openModal());
          dispatch(chengeModal({ modalType: CONTACTS }));
          dispatch(openModal());
        }}
      >
        Контакты
      </button>
    </div>
  );
};
