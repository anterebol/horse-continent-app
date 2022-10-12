import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getAllReviews } from '../../store/api/api';
import { useEffect } from 'react';
import { Review } from '../../components/review/review';
import './about.css';

export const About = () => {
  const dispatch = useAppDispatch();
  const { reviews } = useAppSelector((state) => state.apiReducer);
  const { pageOfReviews } = useAppSelector((state) => state.appReducer);

  useEffect(() => {
    dispatch(getAllReviews());
  }, []);

  const addPagination = () => {
    let currentPage = 1;
    const allPages = Math.ceil(reviews.length / 7);
    console.log(reviews.length, allPages);
    const arrPages = [];
    while (currentPage <= allPages) {
      arrPages.push(<button>{currentPage}</button>);
      currentPage++;
    }
    return arrPages;
  };

  return (
    <div className="about-section">
      <section className="review-section">
        <h2>Отзывы</h2>
        {reviews
          .filter((review, index) => {
            if (index >= pageOfReviews - 1 * 7 && index < pageOfReviews * 7 && review.visible) {
              return review;
            }
          })
          .map((review) => (
            <Review
              key={review.id}
              name={review.name}
              countStars={review.stars}
              description={review.description}
            />
          ))}
      </section>
      <button></button>
      {addPagination()}
      <button></button>
    </div>
  );
};
