import { useState } from 'react';
import arrowLeft from '../../assets/left.svg';
import arrowRight from '../../assets/right.svg';
import './horse.css';

const currentImage = (number: number) => {
  return `horse${number}`;
};
const ckubName = 'КОННЫЙ КЛУБ КОННЫЙ КОНТИНЕНТ';
export const MainSlider = () => {
  const [image, setImage] = useState(1);
  const [changed, setChenged] = useState(true);
  const changeImage = (duration: string) => {
    setChenged(false);
    if (duration === 'left') setImage(image !== 1 ? image - 1 : 4);
    else setImage(image !== 4 ? image + 1 : 1);
    setChenged(true);
  };
  const changeBoxImage = (image: number) => setImage(image);
  return (
    <div className={['box-image', currentImage(image)].join(' ')}>
      <h1 className="club-title">{ckubName}</h1>
      <div
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          width: 90,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <img src={arrowLeft} className="arrow-main" onClick={() => changeImage('left')} />
        <img className="arrow-main" src={arrowRight} onClick={() => changeImage('right')} />
        <div style={{ display: 'flex', width: 100, justifyContent: 'space-between' }}>
          <div
            className={['slider-box', image === 1 ? 'active' : ''].join(' ')}
            onClick={() => changeBoxImage(1)}
          />
          <div
            className={['slider-box', image === 2 ? 'active' : ''].join(' ')}
            onClick={() => changeBoxImage(2)}
          />
          <div
            className={['slider-box', image === 3 ? 'active' : ''].join(' ')}
            onClick={() => changeBoxImage(3)}
          />
          <div
            className={['slider-box', image === 4 ? 'active' : ''].join(' ')}
            onClick={() => changeBoxImage(4)}
          />
        </div>
      </div>
    </div>
  );
};
