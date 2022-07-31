import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { openModal } from '../../store/appReducer';
import './modal.css';
import { Contacts } from '../contacts/contacts';
import CloseIcon from '@mui/icons-material/Close';
import { GalleryModal } from '../galleryModal/GalleryModal';
import { Mail } from '../mail/Mail';
import { Map } from '../map/Map';
import { ModalService } from '../modalService/modalService';
import { MAIL, MAP, GALLERY, CONTACTS } from '../../constants/modalType';

const checkModal = (type: string) => {
  switch (type) {
    case CONTACTS:
      return <Contacts />;
    case MAIL:
      return <Mail />;
    case MAP:
      return <Map place="modal-map" />;
    case GALLERY:
      return <GalleryModal />;
    default:
      return <ModalService />;
  }
};

export const Modal = (props: { modalType: string }) => {
  const dispatch = useAppDispatch();
  const typeModal = props.modalType !== MAP ? props.modalType : 'yandex';
  const { modal } = useAppSelector((state) => state.appReducer);
  return (
    <>
      <div className={['modal', modal ? 'open' : ''].join(' ')}></div>
      <div
        className={['modal-box', modal ? 'open' : ''].join(' ')}
        onClick={() => {
          dispatch(openModal());
        }}
      >
        <div
          className={['modal-body', modal ? 'open' : '', typeModal].join(' ')}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <CloseIcon
            onClick={() => dispatch(openModal())}
            className={['close', typeModal].join(' ')}
          />
          {checkModal(props.modalType)}
        </div>
      </div>
    </>
  );
};
