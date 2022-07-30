import './contacts.css';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { chengeModal, openModal } from '../../store/appReducer';
import mapImg from '../../assets/map.svg';

export const Contacts = () => {
  const dispatch = useAppDispatch();
  const { modal } = useAppSelector((state) => state.appReducer);
  const open = (type: string) => {
    if (modal) {
      dispatch(openModal());
    }
    dispatch(chengeModal({ modalType: type }));
    dispatch(openModal());
  };
  return (
    <div className="contacts">
      <ul className="contacts_links">
        <li className="messenger call_ico"></li>
        <li className="messenger letters_ico" onClick={() => open('mail')}></li>
        <li className="messenger map_ico" onClick={() => open('map')}>
          <img src={mapImg} />
        </li>
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
