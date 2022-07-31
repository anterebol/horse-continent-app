import AliceCarousel from 'react-alice-carousel';
import './carusel.css';
import { arrFoto } from '../../fotos/fotos';
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
export const ImagesSlider = () => {
  return (
    <div className="slider-place">
      <h2 className="gallery-title">Галерея</h2>
      <div className="slider">
        <AliceCarousel mouseTracking items={items} />;
      </div>
    </div>
  );
};
