import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getAllReviews } from '../../store/api/api';
import { useEffect } from 'react';
import { Review } from '../../components/review/review';
import { openPageReview } from '../../store/appReducer';
import './about.css';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import left from '../../assets/left.svg';
import right from '../../assets/right.svg';

export const About = () => {
  const dispatch = useAppDispatch();
  const { reviews } = useAppSelector((state) => state.apiReducer);
  const { pageOfReviews } = useAppSelector((state) => state.appReducer);
  const navigate = useNavigate();

  const page = Number(useParams().page);

  useEffect(() => {
    dispatch(getAllReviews());
  }, []);
  useEffect(() => {
    if (reviews.length) {
      if (!isCorrectPage(page)) {
        navigate(`/about-us/1`);
      }
    }
  }, [reviews]);
  const isCorrectPage = (page: number) => {
    if (page > 0 && page <= Math.ceil(reviews.length / 7)) {
      return true;
    }
    return false;
  };

  const addPagination = () => {
    let currentPage = 1;
    const allPages = Math.ceil(reviews.length / 7);
    const arrPages = [];
    while (currentPage <= allPages) {
      const p = currentPage;
      arrPages.push(
        <NavLink
          className={'nav-review-link'}
          to={`/about-us/${currentPage}`}
          onClick={() => {
            dispatch(openPageReview(p));
          }}
        >
          {currentPage}
        </NavLink>
      );
      currentPage++;
    }
    return arrPages;
  };

  return (
    <div className="about">
      <section className="review-section">
        <h2 className="review-section-title" id="reviews">
          Отзывы
        </h2>
        {reviews
          .filter((review, index) => {
            if (index >= (page - 1) * 7 && index < page * 7 && review.visible) {
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
      <nav className="nav-review">
        <button
          className="nav-review-link"
          onClick={() => navigate(`/about-us/${page - 1}`)}
          disabled={page < 2}
        >
          <img src={left} alt="" />
        </button>
        {addPagination()}
        <button
          className="nav-review-link"
          onClick={() => navigate(`/about-us/${page + 1}`)}
          disabled={page >= Math.ceil(reviews.length / 7)}
        >
          <img src={right} alt="" />
        </button>
      </nav>
    </div>
  );
};
