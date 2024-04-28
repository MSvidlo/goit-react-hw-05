import { fetchMovieDetails } from '../../Js/api';
import {Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useRef } from 'react';
import { MovieDetails, ErrorMessage, Loader,GoBackBtn} from '../../components/index';
import { useEffect,useState } from 'react';


function MovieDetailsPage() {
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState(null);
    const [details, setDetails] = useState(null);
   const location = useLocation();
  const locationRef = useRef(location.state);

   
 
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
       <GoBackBtn route={locationRef.current ? locationRef.current : '/movies'} />
    <MovieDetails movieData={details} />
    <Outlet />
  </div>;
}


export default MovieDetailsPage;