import { Routes, Route, NavLink } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Navigation,MovieCast,MovieReviews,Loader,ErrorMessage } from './components/index';
import { HomePage,MoviesPage,MovieDetailsPage,NotFoundPage } from './pages/index';
import css from './App.module.css'


export const App = () => {

  return <>
     <Suspense fallback={<Loader />}></Suspense>
      <header className={css.header}>
       <Navigation />
      </header>
      <main>
      <Routes forceRefresh={true}>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
        <Route path="/movies/:movieId/cast" element={<MovieCast />} />
        <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
          </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
      <Suspense/>
       </>;
};
export default App
