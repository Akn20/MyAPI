import axios from 'axios';

const api = axios.create({
  baseURL: 'https://movies-ratings2.p.rapidapi.com',
  timeout: 5000,
  headers: {
    'X-RapidAPI-Key': '66487650ebmsh361f1d2cbcf384ep1f3c75jsn850b93bf98fa',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
  },
});

export const getMovieRatings = async (imdbId: string) => {
  const response = await api.get('/ratings', {
    params: { id: imdbId },
  });
  return response.data;
};
