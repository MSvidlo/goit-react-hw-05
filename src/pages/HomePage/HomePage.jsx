import { fetchPopularMovies } from '../../Js/api';
import { MovieList, ErrorMessage, Loader,LoadMoreBtn} from '../../components/index';
import css from './HomePage.module.css';
import { useState, useEffect} from 'react';
function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const data = await fetchPopularMovies(page);
        setMovies((prevMovies) => [...prevMovies, ...data.results]);
        setHasNextPage(data.page < data.total_pages);
      } catch (err) {
        setError(err);
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, [page]);

  function handleSeeMoreClick() {
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <div>
      <h1 className={css.homePageTitle}>Trending Today</h1>
      {movies.length ? <MovieList movies={movies} /> : null}
      {error && <ErrorMessage />}
      {isFetching && <Loader />}
      {hasNextPage && <LoadMoreBtn isFetching={isFetching} handleSeeMoreClick={handleSeeMoreClick} />}
    </div>
  );
}

export default HomePage;