import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addReview } from '../../store/api/api';
export const FormReviews = () => {
  const dispatch = useAppDispatch();
  // const { addReview } = useAppSelector((state) => state.apiReducer);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sendReview = (e: any) => {
    e.preventDefault();
    const req = { name: e.target[0].value, description: e.target[1].value };
    console.log(req);
    dispatch(addReview(req));
  };
  return (
    <div className="review-body">
      <h2 className="review-title">Напишите нам письмо</h2>
      <form className="review-form" onSubmit={sendReview} autoComplete="off">
        <div className="box-review-input">
          <input className="input-review name" placeholder="Имя" type="text" name="name" />
        </div>
        <div className="box-review-input">
          <textarea className="input-review messege" placeholder="Напишите отзыв" name="review" />
        </div>
        <button className="mail-button" type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
};
