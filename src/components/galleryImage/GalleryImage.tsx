import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { openModal, chengeModal } from '../../store/appReducer';
import foto1 from '../../assets/gallery/foto1.jpg';
import foto2 from '../../assets/gallery/foto2.jpg';
import foto3 from '../../assets/gallery/foto3.jpg';
import foto4 from '../../assets/gallery/foto4.jpg';
import foto5 from '../../assets/gallery/foto5.jpg';
const arrFoto = [foto1, foto2, foto3, foto4, foto5];
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
        <img className="gallery-image" src={arrFoto[props.number]} />
      </div>
    </div>
  );
};
