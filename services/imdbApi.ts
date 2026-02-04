import axios from 'axios';

const api = axios.create({
  baseURL: 'https://imdb8.p.rapidapi.com',
  timeout: 5000,
  headers: {
    'X-RapidAPI-Key': '66487650ebmsh361f1d2cbcf384ep1f3c75jsn850b93bf98fa',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
  },
});

/* 🔍 Search movie by name */
export const searchMovie = async (query: string) => {
  const res = await api.get('/title/find', {
    params: { q: query },
  });
  return res.data.results;
};

/* ⭐ Get ratings by IMDb ID */
export const getMovieRatings = async (imdbId: string) => {
  const res = await api.get('/title/get-ratings', {
    params: { tconst: imdbId },
  });
  return res.data;
};
