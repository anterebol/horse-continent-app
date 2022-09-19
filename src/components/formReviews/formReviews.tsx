import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addReview } from '../../store/api/api';
import './formReview.css';
import { addStars } from '../../utils/stars';
import { choiseStars, openModal } from '../../store/appReducer';
import { useState } from 'react';

export const FormReviews = () => {
  const dispatch = useAppDispatch();
  const { choisesStars } = useAppSelector((state) => state.appReducer);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const errors = { name: 'Введите имя', description: 'Оставьте комментарий' };
  const sendReview = async (e) => {
    e.preventDefault();
    const req = { name, description, stars: choisesStars };
    await dispatch(addReview(req));
    e.target.reset();
    dispatch(openModal());
    dispatch(choiseStars(0));
  };

  return (
    <div className="review-body">
      <h2 className="review-title">Мы ценим вас!</h2>
      <form className="review-form" onSubmit={sendReview} autoComplete="off">
        <p className={['form-errors', name !== '' ? 'correct' : ''].join(' ')}>{errors.name}</p>
        <div className="box-review-input">
          <input
            className="input-review name"
            placeholder="Имя"
            type="text"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <p className={['form-errors', description !== '' ? 'correct' : ''].join(' ')}>
          {errors.description}
        </p>
        <div className="box-review-input">
          <textarea
            className="input-review messege"
            placeholder="Напишите отзыв"
            name="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <p className={['form-errors', choisesStars > 0 ? 'correct' : ''].join(' ')}>
          Выберите количестов звезд для оценки
        </p>
        <div className="review-stars">{addStars(0, true)}</div>
        <button
          className="review-button"
          type="submit"
          disabled={(choisesStars > 0 ? false : true) || description === '' || name === ''}
        >
          Отправить
        </button>
      </form>
    </div>
  );
};
