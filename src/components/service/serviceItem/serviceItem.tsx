import { chengeModal, openModal } from '../../../store/appReducer';
import { useAppDispatch } from '../../../hooks/hooks';
export const ServiceItem = (props: {
  modalType: string;
  icon: string;
  title: string;
  color: string;
  p: string;
}) => {
  const dispatch = useAppDispatch();
  const { modalType, icon, title, color, p } = props;

  const open = (type: string) => {
    dispatch(chengeModal({ modalType: type }));
    dispatch(openModal());
  };

  return (
    <div
      className="opportunites-item"
      onClick={() => {
        open(modalType);
      }}
    >
      <img src={icon} title={title} />
      <div className={`main-left ${color}`} title={title}>
        <p>{p}</p>
      </div>
    </div>
  );
};
