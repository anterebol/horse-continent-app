import { useEffect } from 'react';
import './map.css';

const loadScript = (
  src: string,
  onLoad: ((this: GlobalEventHandlers, ev: Event) => unknown) | null
) => {
  const script = document.createElement('script');

  script.src = src;
  script.async = true;
  const map = document.getElementById('map') as HTMLElement;
  map.appendChild(script);
  script.onload = onLoad;
};

const init = () => {
  const myMap = new window.ymaps.Map('map', {
    center: [52.212676, 24.387158],
    zoom: 7,
  });
};

export const Map = () => {
  useEffect(() => {
    loadScript(
      'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A49e065f9bf76e741dc86330fb6e38561758d26d500f68ee91072e28a1863d5e1&amp;width=800&amp;height=400&amp;lang=ru_RU&amp;scroll=true&amp;apikey=da5c3ab2-544b-4a43-96b0-95f80246d1e5',
      () => {
        window.ymaps.ready(init);
      }
    );
  }, []);
  return <div id="map" />;
};
