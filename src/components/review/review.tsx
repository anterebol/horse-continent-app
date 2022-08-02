import star from '../../assets/review/star.svg';
import goldStar from '../../assets/review/gold-star.svg';
import user from '../../assets/review/user.svg';
// import down from '../../assets/review/arrow-down.svg';
// import downOrange from '../../assets/review/arrow-down.svg';
import './review.css';

export const Star = (props: { isGold: boolean; type?: string }) => (
  <div className={['box-star', props.type].join(' ')}>
    <img className="img-star" src={props.isGold ? goldStar : star} alt="" />
  </div>
);
export const Review = (props: { name: string; countStars: number; description: string }) => {
  const { name, countStars, description } = props;

  const addStars = (n: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<Star isGold={i <= n} />);
    }
    return stars;
  };

  return (
    <div className="review">
      <div className="review-high">
        <div className="box-img-user">
          <img className="img-user" src={user} alt="" />
        </div>
        <div className="box-all-stars">{addStars(countStars).map((star) => star)}</div>
      </div>
      <p className="review-name">{name}</p>
      <p className="review-description">{description}</p>
      <div className="open-review"></div>
    </div>
  );
};
