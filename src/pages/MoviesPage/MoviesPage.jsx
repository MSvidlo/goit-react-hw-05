import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import Loader from '../../components/Loader/Loader';
import MovieList from '../../components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { fetchMovieWithKeyWord } from '../../Js/api';
import { useSearchParams } from 'react-router-dom';
import MovieSerchForm from '../../components/MovieSearchForm/MovieSearchForm'
import ErrorMessage from '../../components/ErrorMassage/ErrorMassage';


function MoviesPage() {
  const [params, setParams] = useSearchParams();
 
  const [moviesData, setMoviesData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

    useEffect(() => {
      const query = params.get('query');
        if (!query) return;
        const fetchData = async () => {
             setIsFetching(true);
      try {
        const data = await fetchMovieWithKeyWord(query,page);
          setMoviesData(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsFetching(false);
      }
    };

     
            fetchData();
   
  }, [params]);

 
  function handleSearchChange(newQuery) {
    setParams({ query: newQuery });
  
    setPage(1);
  }

  function handleSeeMoreClick() {
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <div>
      <MovieSerchForm handleSearchChange={handleSearchChange} />
      {moviesData && moviesData.length > 0 ? <MovieList movies={moviesData} /> : null}
     {(!moviesData || moviesData.length === 0)   && <p>No movies found</p>}
      {isFetching && <Loader />}
      {error && <ErrorMessage />}
      {moviesData.length > 0 && <LoadMoreBtn handleSeeMoreClick={handleSeeMoreClick} isFetching={isFetching} />}
    </div>
  );
}

export default MoviesPage;