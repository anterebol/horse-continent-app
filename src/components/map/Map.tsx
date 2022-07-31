import { useEffect } from 'react';
import './map.css';
import spinner from '../../assets/spinner.gif';

export const loadScript = (
  src: string,
  mapPlace: string,
  onLoad: ((this: GlobalEventHandlers, ev: Event) => unknown) | null
) => {
  const map = document.querySelectorAll(`.${mapPlace}`);
  map.forEach((item) => {
    if (item.getElementsByTagName('script').length < 1) {
      item.children[0].classList.remove('map-loaded');
      const script = document.createElement('script');
      script.classList.add('map-script');
      script.src = src;
      script.async = true;
      setTimeout(() => {
        item.children[0].classList.add('map-loaded');
        item.appendChild(script);
        script.onload = onLoad;
      }, 1000);
    }
  });
  return 'loaded';
};

const init = () => {
  const myMap = new window.ymaps.Map('map', {
    center: [52.212676, 24.387158],
    zoom: 7,
  });
};

export const Map = (props: { place: string }) => {
  useEffect(() => {
    const windowInnerWidth = window.innerWidth < 1000 ? (window.innerWidth < 600 ? 400 : 500) : 800;
    // windowInnerWidth = props.place == 'modal-map' ?
    loadScript(
      `https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A49e065f9bf76e741dc86330fb6e38561758d26d500f68ee91072e28a1863d5e1&amp;width=${windowInnerWidth}&amp;height=400&amp;lang=ru_RU&amp;scroll=true&amp;apikey=da5c3ab2-544b-4a43-96b0-95f80246d1e5`,
      props.place,
      () => {
        window.ymaps.ready(init);
      }
    );
  }, []);
  return (
    <div className={['map', props.place].join(' ')}>
      <img src={spinner} className="map-loader map-loaded" />
    </div>
  );
};
