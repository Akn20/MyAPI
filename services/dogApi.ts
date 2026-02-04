import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dog.ceo/api',
  timeout: 5000,
});

export const getRandomDogImage = async () => {
  const response = await api.get('/breeds/image/random');
  return response.data;
};
