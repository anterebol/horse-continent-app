import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { openModal } from '../../store/appReducer';
import './modal.css';
import { Contacts } from '../contacts/contacts';
import CloseIcon from '@mui/icons-material/Close';
import { GalleryModal } from '../galleryModal/GalleryModal';

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
          {props.modalType === 'contacts' ? <Contacts /> : <GalleryModal />}
        </div>
      </div>
    </>
  );
};
