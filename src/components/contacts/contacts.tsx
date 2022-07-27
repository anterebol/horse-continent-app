import './contacts.css';
export const Contacts = () => {
  return (
    <div className="contacts">
      <ul className="contacts_links">
        <li className="messenger call_ico"></li>
        <li className="messenger letters_ico"></li>
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
