/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import AliceCarousel from 'react-alice-carousel';
import './carusel.css';
import arrowLeft from '../../assets/gallery-arrow/left.svg';
import arrowRight from '../../assets/gallery-arrow/right.svg';
import { arrFoto } from '../../fotos/fotos';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleDragStart = (e: any) => e.preventDefault();
const items = [
  <img
    className="slider-img"
    src={arrFoto[0]}
    key="0"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="slider-img"
    src={arrFoto[1]}
    key="0"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="slider-img"
    src={arrFoto[2]}
    key="0"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="slider-img"
    src={arrFoto[3]}
    key="0"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="slider-img"
    src={arrFoto[4]}
    key="0"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="slider-img"
    src={arrFoto[7]}
    key="0"
    onDragStart={handleDragStart}
    role="presentation"
  />,

  <img
    className="slider-img"
    src={arrFoto[6]}
    key="0"
    onDragStart={handleDragStart}
    role="presentation"
  />,
];

const thumbItems = (items: JSX.Element[], [setThumbIndex, setThumbAnimation]: [any, any]) => {
  return items.map(
    (
      item:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | ReactFragment
        | ReactPortal
        | null
        | undefined,
      i: any
    ) => <div className="thumb">{item}</div>
  );
};

export const ImagesSlider = () => {
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const [thumbs] = useState(thumbItems(items, [setThumbIndex, setThumbAnimation]));

  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex + 1);
    } else if (!thumbAnimation && thumbIndex === thumbs.length - 1) {
      setThumbAnimation(true);
      setThumbIndex(0);
    }
  };

  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex - 1);
    } else if (!thumbAnimation && thumbIndex === 0) {
      setThumbAnimation(true);
      setThumbIndex(items.length - 1);
    }
  };

  const syncThumbs = (e: { item: any }) => {
    setThumbIndex(e.item);
    setThumbAnimation(false);
  };

  return (
    <div className="main-gallery">
      <h2 className="gallery-title">Галерея</h2>
      <div className="slider-place">
        <div className="slider-gallery-button prev" onClick={slidePrev}>
          <img className="gallery-arrow" src={arrowLeft} />
        </div>
        <div className="slider">
          <AliceCarousel
            activeIndex={thumbIndex}
            disableButtonsControls
            items={thumbs}
            // mouseTracking={false}
            onSlideChanged={syncThumbs}
            // touchTracking={false}
            infinite={true}
          />
        </div>
        <div className="slider-gallery-button next" onClick={slideNext}>
          <img className="gallery-arrow" src={arrowRight} />
        </div>
      </div>
    </div>
  );
};
