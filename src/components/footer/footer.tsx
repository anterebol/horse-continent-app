import { boxFooterInf, footerLink } from './footerCss';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/system';
import horseImg from '../../assets/horse-white.svg';
import { Avatar } from '@mui/material';
import './footer.css';

// const footerLink = 'footer-link';

export const Footer = () => (
  <div className="footer">
    <Box sx={boxFooterInf}>
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
    </Box>
  </div>
);
