import axios from "axios";

export interface IChuckJoke {
  value: string;
}

const getChuckJoke = async (): Promise<string> => {
  console.log('running');
  
  const response = await axios
  .get<IChuckJoke>("https://api.chucknorris.io/jokes/random");
  const joke = response.data.value;
  console.log(response);
  
  return joke;
}

export default getChuckJoke