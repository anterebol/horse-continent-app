import { boxFooterInf, footerLink } from './footerCss';
import { NavLink } from 'react-router-dom';
import horseImg from '../../assets/horse-white.svg';
import { Avatar } from '@mui/material';
import './footer.css';
import '../../assets/map.svg';

// const footerLink = 'footer-link';

export const Footer = () => (
  <div className="footer">
    <div style={boxFooterInf}>
      <NavLink to={'/'} className="icon-horse">
        <Avatar src={horseImg} />
      </NavLink>
      <NavLink to={'/service'} style={footerLink}>
        Услуги
      </NavLink>
      <NavLink to={'/gallary'} style={footerLink}>
        Галерея
      </NavLink>
      <NavLink to={'/abour-us'} style={footerLink}>
        О нас
      </NavLink>
    </div>
  </div>
);
