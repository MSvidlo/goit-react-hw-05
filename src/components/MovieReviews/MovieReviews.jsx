import { fetchMovieReviews } from '../../Js/api';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMassage/ErrorMassage';
import MovieReviewsList from '../MovieReviewsList/MovieReviewsList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data.results);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <ul>
      {reviews.length ? (
        reviews.map(movieReview => <MovieReviewsList key={movieReview.id} review={movieReview} />)
      ) : (
        <p>No reviews found</p>
      )}
    </ul>
  );
}

export default MovieReviews;