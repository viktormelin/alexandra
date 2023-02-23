import axios from "axios";

export interface IChuckJoke {
  value: string;
}

export const getChuckJoke = async (): Promise<IChuckJoke> => {
  const response = await axios
  .get<IChuckJoke>("https://api.chucknorris.io/jokes/random");
  return response.data;
}