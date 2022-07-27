import { headerCss, boxHeaderInf } from './headerCss';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { openModal } from '../../store/appReducer';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/system';
import horseImg from '../../assets/horse.svg';
import { Avatar } from '@mui/material';
import './header.css';
import { useState } from 'react';
import { Modal } from '../modal/Modal';
import { loadPage } from '../../store/appReducer';

const headerLink = 'header-link';

const hoveredCls = (state: boolean) => (state ? 'orange' : '');

type HoveredType = {
  [key: string]: boolean;
};

export const Header = () => {
  const dispatch = useAppDispatch();
  const [hovered, setHover] = useState({
    service: false,
    gallery: false,
    about: false,
    contacts: false,
    main: false,
  } as HoveredType);
  const mouseHovered = (prop: string) => {
    const obj = { ...hovered };
    for (const key in obj) {
      if (key === prop) {
        obj[key] = !obj[key];
      }
    }
    return setHover({ ...obj });
  };

  const onLoad = () => dispatch(loadPage());

  return (
    <Box sx={headerCss}>
      <Modal />
      <Box sx={boxHeaderInf}>
        <NavLink to={'/'} className="icon-horse">
          <Avatar src={horseImg} />
        </NavLink>
        <NavLink
          to={'/'}
          className={headerLink}
          style={{ color: hoveredCls(hovered.main) ? hoveredCls(hovered.main) : 'black' }}
          onMouseEnter={() => mouseHovered('main')}
          onMouseLeave={() => mouseHovered('main')}
          onClick={onLoad}
        >
          Главная
        </NavLink>
        <NavLink
          to={''}
          className={headerLink}
          style={{ color: hoveredCls(hovered.contacts) ? hoveredCls(hovered.contacts) : 'black' }}
          onMouseEnter={() => mouseHovered('contacts')}
          onMouseLeave={() => mouseHovered('contacts')}
          onClick={() => {
            dispatch(openModal());
          }}
          // onClick={onLoad}
        >
          Контакты
        </NavLink>
        <NavLink
          to={'/service'}
          className={headerLink}
          style={{ color: hoveredCls(hovered.service) ? hoveredCls(hovered.service) : 'black' }}
          onMouseEnter={() => mouseHovered('service')}
          onMouseLeave={() => mouseHovered('service')}
          onClick={onLoad}
        >
          Услуги
        </NavLink>
        <NavLink
          to={'/gallery'}
          className={headerLink}
          style={{ color: hoveredCls(hovered.gallery) ? hoveredCls(hovered.gallery) : 'black' }}
          onMouseEnter={() => mouseHovered('gallery')}
          onMouseLeave={() => mouseHovered('gallery')}
          onClick={onLoad}
        >
          Галерея
        </NavLink>
        <NavLink
          to={'/about-us'}
          className={headerLink}
          style={{ color: hoveredCls(hovered.about) ? hoveredCls(hovered.about) : 'black' }}
          onMouseEnter={() => mouseHovered('about')}
          onMouseLeave={() => mouseHovered('about')}
          onClick={onLoad}
        >
          О нас
        </NavLink>
      </Box>
    </Box>
  );
};
