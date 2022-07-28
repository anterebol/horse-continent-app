import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { openModal, chengeModal } from '../../store/appReducer';
import horse1 from '../../assets/horse/horse1.jpg';
import horse2 from '../../assets/horse/horse2.jpg';
import horse3 from '../../assets/horse/horse3.jpg';
import horse4 from '../../assets/horse/horse4.jpg';
const arrHorse = [horse1, horse2, horse3, horse4];
import './gallery-box.css';
export const GalleryImage = (props: { number: number }) => {
  const dispath = useAppDispatch();
  return (
    <div
      className="gallery-box"
      onClick={() => {
        dispath(chengeModal({ modalType: 'gallery-modal', image: props.number }));
        dispath(openModal());
      }}
    >
      <div className="gallery-box-image">
        <img className="gallery-image" src={arrHorse[props.number]} />
      </div>
    </div>
  );
};
