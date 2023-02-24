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

const API_KEY = '8af71b3cd40c443487cecbe842efc0f6';
const API_URL = 'https://api.humorapi.com/jokes/search';

const humorService = async (category) => {
  const response = await axios.get<HumorResponse>(API_URL, {
    params: { 'api-key': API_KEY, number: 10, 'include-tags': category },
  });

  let randomNumber: number = Math.floor((Math.random() * 10) + 1);
  console.log(randomNumber);

  const { jokes } = response.data;

  console.log(response.data)

  return jokes[randomNumber].joke

};

export default humorService;
