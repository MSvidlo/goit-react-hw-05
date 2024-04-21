import axios from 'axios';

export default async function fetchPhotos(keyword, page) {
  const instance = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: { 'Accept-Version': 'v1' },
    params: {
      client_id: '5RTzoeWBx59VxVJJ35nR2YNpjl-WFFkqyyd0ucS7lrM',
      query: keyword,
      page,
      per_page: 12,
    },
  });
  try {
    const response = await instance.get('/search/photos');
    return response.data.results;
  } catch (error) {
    console.error('ErrorMessage fetching photos:', error);
    throw error;
  }
}