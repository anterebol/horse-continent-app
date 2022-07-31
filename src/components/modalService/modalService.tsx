import { useAppSelector } from '../../hooks/hooks';
import { serviceInfo } from '../../constants/serviceText';

export const ModalService = () => {
  const { modalType } = useAppSelector((state) => state.appReducer);
  return (
    <div className="modal-service">
      <h2 className="modal-service-title">{serviceInfo[modalType].title}</h2>
      <p className="modal-service-info">{serviceInfo[modalType].description}</p>
    </div>
  );
};
