import { MainSlider } from '../../components/mainSlider/MainSlider';
import { Contacts } from '../../components/contacts/contacts';
import { Map } from '../../components/map/Map';

export const Main = () => {
  return (
    <div style={{ paddingBottom: 100 }}>
      <MainSlider />
      <Contacts />
      <Map />
    </div>
  );
};
