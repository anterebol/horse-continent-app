import { GalleryImage } from '../galleryImage/GalleryImage';
import './gallery-list.css';

export const GalleryList = () => {
  return (
    <ul className="gallery-list">
      {[0, 1, 2, 3].map((item) => {
        return <GalleryImage key={item} number={item} />;
      })}
    </ul>
  );
};
