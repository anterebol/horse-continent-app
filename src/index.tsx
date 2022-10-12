import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/configReducer';

const app = () => {
  return (
    <BrowserRouter>
      <Provider store={store()}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};
const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

root.render(app());
