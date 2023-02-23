import getChuckJoke from "./services/chuckService";
import humorService from './services/humorService'

function init() {
  addEventListeners();
}

function addEventListeners() {
  let button = document.querySelector('button') as HTMLButtonElement;

  button.addEventListener('click', generateJoke);
}

const generateJoke = async () => {  
  // let selectedCategory: string = (document.querySelector('.categoryPicker') as HTMLOptionElement).value;
  let joke: string = await getChuckJoke();  
  printHtml(joke);
}

function printHtml(jokeText: string) {
  let div = document.querySelector('.jokebox') as HTMLDivElement;
  div.innerHTML = jokeText;
}

init();