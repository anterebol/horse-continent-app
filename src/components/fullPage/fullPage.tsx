import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Preloader } from '../preloader/Preloader';
import { loadPage, loadedPage, openPageReview } from '../../store/appReducer';
import './main.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
export const FullPage = ({ children }: { children: JSX.Element }) => {
  const dispatch = useAppDispatch();
  const { page } = useParams();
  const { load } = useAppSelector((state) => state.appReducer);
  useEffect(() => {
    if (page) {
      dispatch(openPageReview(page));
    }
    if (load) setTimeout(() => dispatch(loadedPage()), 3000);
  }, [load]);
  return (
    <>
      <Header />
      <main className="main">{load ? <Preloader /> : children}</main>
      <div className="low-box"></div>
      {load ? null : <Footer />}
    </>
  );
};
