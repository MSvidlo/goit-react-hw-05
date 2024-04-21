import { Routes, Route, NavLink } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieCast from './components/MovieCast/MovieCast';

import css from './App.module.css'
import MovieReviews from './components/MovieReviews/MovieReviews';

export const App = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.nav}>
           <NavLink to="/" className={css.homePage}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.movie}>
            Movies
          </NavLink>
        </nav>
</header>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies/:movieId/cast" element={<MovieCast />} />
        <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />  
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
export default App
