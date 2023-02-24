import axios from 'axios';
import { getChuckJoke } from './chuckService';

export interface Joke {
  id: number;
  joke: string;
}

interface HumorResponse {
  jokes: Joke[];
  available: number;
}

const API_KEY = '822f0f7d31af4669a46367b6600adfa1';
const API_URL = 'https://api.humorapi.com/jokes/random';

const humorService = async (category: string) => {
  const response = await axios.get<HumorResponse>(API_URL, {
    params: { 'api-key': API_KEY, number: 1, 'include-tags': category },
  });

  const { jokes } = response.data;

  console.log(response.data)

  if (jokes && jokes.length > 0) {
    return jokes[0].joke;
  }

  //return getChuckJoke();
};

export default humorService;
