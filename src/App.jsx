import { Routes, Route, NavLink } from 'react-router-dom';
import React, { Suspense } from 'react';
const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const MovieDetailsPage = React.lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const MoviesPage = React.lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieCast = React.lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = React.lazy(() => import("./components/MovieReviews/MovieReviews"));
const Loader = React.lazy(() => import("./components/Loader/Loader"));
import {Navigations } from './components/Navigations/NavBar'
import css from './App.module.css'


export const App = () => {

  return (
    <div className={css.container}>
      <header className={css.header}>
       <Navigations />
</header>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
        <Route path="/movies/:movieId/cast" element={<MovieCast />} />
        <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
          </Route>
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
    </div>
  );
};
export default App
