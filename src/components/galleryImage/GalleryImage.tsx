import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { openModal, chengeModal } from '../../store/appReducer';
import { arrFoto } from '../../fotos/fotos';
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
