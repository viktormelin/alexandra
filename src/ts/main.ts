import getChuckJoke from "./services/chuckService";
import humorService from './services/humorService'

let points = 0;

function init() {
  addEventListeners();
}

function addEventListeners() {
  let button = document.querySelector('button') as HTMLButtonElement;
  const addBtn = document.querySelector('#add') as HTMLButtonElement;
  const removeBtn = document.querySelector('#remove') as HTMLButtonElement;

  addBtn.addEventListener('click', addPoint);
  removeBtn.addEventListener('click', removePoint);
  button.addEventListener('click', generateJoke);
}

const generateJoke = async () => {
  let selectedCategory: string = (document.querySelector('#categoryPicker') as HTMLOptionElement).value;
  if (selectedCategory == 'Chuck Norris') {
    let joke: string = await getChuckJoke();  
    printHtml(joke);
  } else {
    let humorJoke: string = await humorService(selectedCategory);
    printHtml(humorJoke);
  }
}

function printHtml(jokeText: string) {
  let div = document.querySelector('.jokebox') as HTMLDivElement;
  div.innerHTML = jokeText;
}

function addPoint() {
  const pointCounter = document.querySelector('#counter') as HTMLParagraphElement;
  points += 1;
  pointCounter.innerText = points.toString();
}

function removePoint() {
  const pointCounter = document.querySelector('#counter') as HTMLParagraphElement;
  points -= 1;
  pointCounter.innerText = points.toString();
}

init();