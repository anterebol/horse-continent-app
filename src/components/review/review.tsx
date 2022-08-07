import user from '../../assets/review/user.svg';
import down from '../../assets/review/arrow-down.svg';
import './review.css';
import { useState } from 'react';
import { addStars } from '../../utils/add-stars';

export const Review = (props: { name: string; countStars: number; description: string }) => {
  const [fullReview, setFullReview] = useState(false);
  const { name, countStars, description } = props;

  const changeFull = () => setFullReview(!fullReview);

  return (
    <div className="review">
      <div className="review-high">
        <div className="box-img-user">
          <img className="img-user" src={user} alt="" />
        </div>
        <div className="box-all-stars">{addStars(countStars).map((star) => star)}</div>
      </div>
      <p className="review-name">{name}</p>
      <p className={['review-description', fullReview ? 'full' : ''].join(' ')}>{description}</p>
      <img src={down} onClick={changeFull} className="open-review" />
    </div>
  );
};
