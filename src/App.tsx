import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from './pages/Main/Main';
import { FullPage } from './components/fullPage/fullPage';
import { About } from './pages/About/About';
import { Gallery } from './pages/Gallery/Gallery';
import { Service } from './pages/Services/Services';

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
      <Route
        path="about-us"
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
            <Service />
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
