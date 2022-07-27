import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { openModal } from '../../store/appReducer';
import './modal.css';
import { Contacts } from '../contacts/contacts';
import CloseIcon from '@mui/icons-material/Close';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 500,
  width: '100%',
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 2.5,
  overflow: 'hidden',
};

export const Modal = () => {
  const dispatch = useAppDispatch();
  const { modal } = useAppSelector((state) => state.appReducer);
  return (
    <>
      <div className={['modal', modal ? 'open' : ''].join(' ')}></div>
      <div
        className={['modal-box', modal ? 'open' : ''].join(' ')}
        onClick={() => dispatch(openModal())}
      >
        <div className={['modal-body', modal ? 'open' : ''].join(' ')}>
          <button
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <CloseIcon />
          </button>
          <Contacts />
        </div>
      </div>
    </>
  );
};
