import { useEffect, useState } from 'react';
import arrowLeft from '../../assets/left.svg';
import arrowRight from '../../assets/right.svg';
import horse1 from '../../assets/horse/horse1.jpg';
import horse2 from '../../assets/horse/horse2.jpg';
import horse3 from '../../assets/horse/horse3.jpg';
import horse4 from '../../assets/horse/horse4.jpg';
const mainImgs = [horse1, horse2, horse3, horse4];
import './horse.css';

const ckubName = 'КОННЫЙ КЛУБ КОННЫЙ КОНТИНЕНТ';
export const MainSlider = () => {
  const [image, setImage] = useState(0);
  const [process, setProcess] = useState(false);
  useEffect(() => {}, []);
  const auto = () => {
    const interval = setInterval(() => changeImage('left'), 2000);
  };
  // const interval = setTimeout(auto, 10000);
  const changeImage = (duration: string) => {
    // clearTimeout(interval);
    setProcess(true);
    let number = image;
    if (duration === 'left') number = image !== 0 ? image - 1 : 3;
    else number = image !== 3 ? image + 1 : 0;
    setTimeout(() => setImage(number), 200);
    setTimeout(() => setProcess(false), 500);
  };

  const changeBoxImage = async (image: number) => {
    setProcess(true);
    setTimeout(() => setImage(image), 200);
    setTimeout(() => setProcess(false), 500);
  };

  return (
    <div className="box-image">
      {/* <div className="box-image">
        <img
          className={['main-img', process ? 'process' : ''].join(' ')}
          src={mainImgs[image]}
          alt=""
        />
      </div> */}
      <h1 className="club-title">{ckubName}</h1>
      <div className="box-control">
        <img src={arrowLeft} className="arrow-main" onClick={() => changeImage('left')} />
        <img className="arrow-main" src={arrowRight} onClick={() => changeImage('right')} />
        <div style={{ display: 'flex', width: 100, justifyContent: 'space-between' }}>
          <div
            className={['slider-box', image === 0 ? 'active' : ''].join(' ')}
            onClick={() => changeBoxImage(0)}
          />
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
        </div>
      </div>
    </div>
  );
};
