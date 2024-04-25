import css from './MovieDetails.module.css'
import { CONSTANTS } from '../../Js/constants';
import { useParams, Link } from 'react-router-dom';

function MovieDetails ({movieData})
{const { poster_path: moviePoster, genres, title, overview, vote_average: userScore, release_date} = movieData || {};
  const releaseYear = new Date(release_date).getFullYear();
 const { movieId } = useParams();

    return (
    movieData && (
      <div className={css.movieDetailsPageWrapper}>
        <div className={css.movieDetailsWrapper}><img src={CONSTANTS.PHOTO_BASE_URL + moviePoster}
                                                      alt={`Movie Poster ${title}`} />
          <div>
            <h3 className={css.bold}>{`${title} (${releaseYear})`}</h3>
            <p>User score: {`${(userScore * 10).toFixed()}%`}</p>
            <p className={css.bold}>Overview</p>
            <p className={css.overview}>{overview}</p>
            <p className={css.bold}>Genres</p>
            <ul className={css.genresList}>
              {genres.map(genre => <li className={css.genreName} key={genre.id}>{genre.name}</li>)}
            </ul>
          </div>
        </div>

        <ul className={css.subpageList}>
          <li className={css.subpageListItem}><Link to={`/movie/${movieId}/cast`}>Cast</Link></li>
          <li className={css.subpageListItem}><Link to={`/movie/${movieId}/reviews`}>Reviews</Link></li>
        </ul>
      </div>
    )
  );
}

export default MovieDetails;