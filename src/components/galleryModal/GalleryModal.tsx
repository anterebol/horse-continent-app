import horse1 from '../../assets/horse/horse1.jpg';
import horse2 from '../../assets/horse/horse2.jpg';
import horse3 from '../../assets/horse/horse3.jpg';
import horse4 from '../../assets/horse/horse4.jpg';
import { useAppSelector } from '../../hooks/hooks';
const arrHorse = [horse1, horse2, horse3, horse4];
export const GalleryModal = () => {
  const { image } = useAppSelector((state) => state.appReducer);
  return <img className="gallery-image" src={arrHorse[image]} />;
};
