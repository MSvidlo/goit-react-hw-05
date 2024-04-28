import { lazy } from 'react';

export const HomePage = lazy(() => import('./HomePage/HomePage.jsx'));
export const MovieDetailsPage = lazy(() => import('./MovieDetailsPage/MovieDetailsPage.jsx'));
export const MoviesPage = lazy(() => import('./MoviesPage/MoviesPage.jsx'));
export const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage.jsx'));