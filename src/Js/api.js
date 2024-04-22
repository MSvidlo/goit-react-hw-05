import axios from 'axios';
import { CONSTANTS } from './constants';

const QUERY_CONFIG = {
  baseURL: CONSTANTS.BASE_URL,
  headers: {
    authorization: CONSTANTS.AUTH,
  },
  params: {
    language: 'en-US',
  },
};

export async function fetchMovieWithKeyWord(query, page) {
  const instance = axios.create(QUERY_CONFIG);
  try {
    const response = await instance.get('search/movie', {
      params: {
        ...QUERY_CONFIG.params,
        query,
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('ErrorMessage fetching movies:', error);
    throw error;
  }
}

export async function fetchPopularMovies(page) {
  const instance = axios.create(QUERY_CONFIG);
  try {
    const response = await instance.get('/trending/movie/day', {
      params: {
        ...QUERY_CONFIG.params, page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('ErrorMessage fetching movies:', error);
    throw error;
  }
}


export async function fetchMovieDetails(id) {
  const instance = axios.create(QUERY_CONFIG);
  try {
    const response = await instance.get(`movie/${id}`);
    return response.data;
  } catch (error) {
    console.error('ErrorMessage fetching movies:', error);
    throw error;
  }
}

export async function fetchMovieCast(id) {
  const instance = axios.create(QUERY_CONFIG);
  try {
    const response = await instance.get(`movie/${id}/credits`);
    return response.data;
  } catch (error) {
    console.error('ErrorMessage fetching movies:', error);
    throw error;
  }
}

export async function fetchMovieReviews(id) {
  const instance = axios.create(QUERY_CONFIG);
  try {
    const response = await instance.get(`movie/${id}/reviews`);
    return response.data;
  } catch (error) {
    console.error('ErrorMessage fetching movies:', error);
    throw error;
  }
}