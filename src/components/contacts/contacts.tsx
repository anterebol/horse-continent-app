import './contacts.css';
import { useAppDispatch } from '../../hooks/hooks';
import { chengeModal, openModal } from '../../store/appReducer';

export const Contacts = () => {
  const dispatch = useAppDispatch();
  const openMail = () => {
    dispatch(chengeModal({ modalType: 'mail' }));
    dispatch(openModal());
  };
  return (
    <div className="contacts">
      <ul className="contacts_links">
        <li className="messenger call_ico"></li>
        <li className="messenger letters_ico" onClick={openMail}></li>
        <li>
          <a href="https://www.instagram.com/k.klub.kontinent/">
            <div className="messenger instagram_ico"></div>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com">
            <div className="messenger facebook_ico"></div>
          </a>
        </li>
        <li>
          <a href="https://vk.com/k.klub.kontinent">
            <div className="messenger vk_ico"></div>
          </a>
        </li>
      </ul>
    </div>
  );
};
