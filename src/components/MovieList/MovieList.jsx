import { Link, useLocation } from 'react-router-dom';
import { CONSTANTS } from '/src/Js/constants.js';

import css from './MovieList.module.css';

function MovieList({ movies }) {
  const location = useLocation();
  return <div>
    <ul className={css.moviesList}> {movies.map(movie => {
      const { poster_path: photoPath, id, title } = movie;
      return <li className={css.moviesListItem} key={id}>
        <div>
          <img className={css.movieCardImg}
               src={CONSTANTS.PHOTO_BASE_URL + photoPath} alt={title} />
          <Link className={css.movieLink} to={`/movies/${id}`} state={location}><h5
            className={css.movieTitle}>{title}</h5></Link>
        </div>
      </li>;
    })}</ul>
  </div>;
}

export default MovieList;