import { GalleryImage } from '../galleryImage/GalleryImage';
import './gallery-list.css';
import { arrFoto } from '../../fotos/fotos';
const d = () => {
  // const arr = [''].fill('', 1, arrFoto.length - 1);
  const arr = new Array(arrFoto.length).fill('');
  console.log(arr);
  return arr;
};

export const GalleryList = () => {
  return (
    <ul className="gallery-list">
      {d().map((_, index) => {
        return <GalleryImage key={index} number={index} />;
      })}
    </ul>
  );
};
