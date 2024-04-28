
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../Js/api';
import { CastMemberCard, ErrorMessage, Loader } from '../index';
import css from './MovieCast.module.css';

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const castData = await fetchMovieCast(movieId);
        setCast(castData.cast);
      } catch (err) {
        setError(err);
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <>
      {isFetching && <Loader />}
      {error && <ErrorMessage />}
      <ul className={css.castList}>
        {cast.map(castWorker => <CastMemberCard key={castWorker.id} cast={castWorker} />)}
      </ul>
    </>
  );
}

export default MovieCast;