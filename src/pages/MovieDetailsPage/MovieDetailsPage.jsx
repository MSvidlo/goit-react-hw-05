import { fetchMovieDetails } from '../../Js/api';
import {Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useRef } from 'react';
import ErrorMessage from '../../components/ErrorMassage/ErrorMassage';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import Loader from '../../components/Loader/Loader';
import { useEffect,useState } from 'react';
import MovieDetails from '../../components/MovieDetails/MovieDetails'
import GoBackBtn from '../../components/GoBackBtn/GoBackBtn.jsx';
import css from './MovieDetailsPage.module.css';

function MovieDetailsPage() {
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState(null);
    const [details, setDetails] = useState(null);
    const location = useLocation();  
   
 const backLinkHref = location.state ?? "/movies";
    const { movieId } = useParams();
    useEffect(() => {
        const fetchData = async () => {
             setIsFetching(true);
    try {
        const data = await fetchMovieDetails(movieId);
          setDetails(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsFetching(false);
      }
    };

     
            fetchData();
   
    }, [movieId]);

      return <div>
    {isFetching && <Loader />}
    {error && <ErrorMessage />}
      <button className={css.goBackBtn}><Link to={backLinkHref} className={css.link}>Go Back</Link></button>
    <MovieDetails movieData={details} />
    <Outlet />
  </div>;
}


export default MovieDetailsPage;