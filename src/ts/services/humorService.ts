import axios from 'axios';
// import { getChuckJoke } from './chuckService';

export interface Joke {
  id: number;
  joke: string;
}

interface HumorResponse {
  jokes: Joke[];
  available: number;
}

// Unused: 93ad8dbe02914bd3bbef0bb68dc97ea3
// Unused: fbd81e2538544bd0b61029c9db41ba98
const API_KEY = '8af71b3cd40c443487cecbe842efc0f6';
const API_URL = 'https://api.humorapi.com/jokes/search';

const humorService = async (category) => {
  const response = await axios.get<HumorResponse>(API_URL, {
    params: { 'api-key': API_KEY, number: 10, 'include-tags': category },
  });

  let randomNumber: number = Math.floor((Math.random() * 10) + 1);

  const { jokes } = response.data;

  return jokes[randomNumber].joke
};

export default humorService;
