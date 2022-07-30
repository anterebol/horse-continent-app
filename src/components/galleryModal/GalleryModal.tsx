// import foto1 from '../../assets/gallery/foto1.jpg';
// import foto2 from '../../assets/gallery/foto2.jpg';
// import foto3 from '../../assets/gallery/foto3.jpg';
// import foto4 from '../../assets/gallery/foto4.jpg';
// import foto5 from '../../assets/gallery/foto5.jpg';
import { useAppSelector } from '../../hooks/hooks';
// const arrFoto = [foto1, foto2, foto3, foto4, foto5];
import { arrFoto } from '../../fotos/fotos';
export const GalleryModal = () => {
  const { image } = useAppSelector((state) => state.appReducer);
  return <img className="gallery-image" src={arrFoto[image]} />;
};
