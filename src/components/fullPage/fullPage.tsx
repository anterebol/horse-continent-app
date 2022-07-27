import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Preloader } from '../preloader/Preloader';
import { loadPage, loadedPage } from '../../store/appReducer';
import { useEffect } from 'react';
export const FullPage = ({ children }: { children: JSX.Element }) => {
  const dispatch = useAppDispatch();
  const { load } = useAppSelector((state) => state.appReducer);
  useEffect(() => {
    if (load) setTimeout(() => dispatch(loadedPage()), 3000);
  }, [load]);
  return (
    <>
      <Header />
      {load ? <Preloader /> : children}
      <Footer />
    </>
  );
};
