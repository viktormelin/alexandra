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
  let selectedCategory: string = (document.querySelector('option') as HTMLOptionElement).value;
  console.log(selectedCategory); 
  if (selectedCategory == 'Mörk humor') {
    console.log(selectedCategory);
    let randomJoke: string = await humorService("dark");
  }
  let joke: string = await getChuckJoke();  
  printHtml(joke);
}

function printHtml(jokeText: string) {
  let div = document.querySelector('.jokebox') as HTMLDivElement;
  div.innerHTML = jokeText;
}

init();