import { useAppSelector } from '../../hooks/hooks';
import { arrFoto } from '../../fotos/fotos';

export const GalleryModal = () => {
  const { image } = useAppSelector((state) => state.appReducer);
  return <img className="gallery-image" src={arrFoto[image]} />;
};
