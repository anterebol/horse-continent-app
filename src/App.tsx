import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { Preloader } from './components/preloader/Preloader';
import { Main } from './pages/Main/Main';
import { FullPage } from './components/fullPage/fullPage';
import { About } from './pages/About/About';

function App() {
  const dispatch = useAppDispatch();
  const errors = useAppSelector((state) => state.appReducer.something);
  return (
    <Routes>
      <Route
        path={'/'}
        element={
          <FullPage>
            <Main />
          </FullPage>
        }
      />
      <Route
        path="about-us"
        element={
          <FullPage>
            <About />
          </FullPage>
        }
      />
    </Routes>
  );
}

export default App;
