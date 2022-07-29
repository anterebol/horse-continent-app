import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { openModal } from '../../store/appReducer';
import './modal.css';
import { Contacts } from '../contacts/contacts';
import CloseIcon from '@mui/icons-material/Close';
import { GalleryModal } from '../galleryModal/GalleryModal';
import { Mail } from '../mail/Mail';
import { Map } from '../map/Map';

const checkModal = (type: string) => {
  switch (type) {
    case 'contacts':
      return <Contacts />;
    case 'mail':
      return <Mail />;
    case 'map':
      <Map />;
      return;
    default:
      return <GalleryModal />;
  }
};

export const Modal = (props: { modalType: string }) => {
  const dispatch = useAppDispatch();
  const { modal } = useAppSelector((state) => state.appReducer);
  return (
    <>
      <div className={['modal', modal ? 'open' : ''].join(' ')}></div>
      <div
        className={['modal-box', modal ? 'open' : ''].join(' ')}
        onClick={(e) => {
          dispatch(openModal());
        }}
      >
        <div
          className={['modal-body', modal ? 'open' : '', props.modalType].join(' ')}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <CloseIcon
            onClick={() => dispatch(openModal())}
            className={['close', props.modalType].join(' ')}
          />
          {checkModal(props.modalType)}
        </div>
      </div>
    </>
  );
};
