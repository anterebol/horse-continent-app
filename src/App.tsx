import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from './pages/Main/Main';
import { FullPage } from './components/fullPage/fullPage';
import { About } from './pages/About/About';
import { Gallery } from './pages/Gallery/Gallery';
import { Services } from './pages/Services/Services';

function App() {
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
      <Route path="about-us" element={<Navigate to={'/about-us/1'} />} />
      <Route
        path="about-us/:page"
        element={
          <FullPage>
            <About />
          </FullPage>
        }
      />
      <Route
        path="service"
        element={
          <FullPage>
            <Services />
          </FullPage>
        }
      ></Route>
      <Route
        path="gallery"
        element={
          <FullPage>
            <Gallery />
          </FullPage>
        }
      />
    </Routes>
  );
}

export default App;
