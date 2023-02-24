import getChuckJoke from "./services/chuckService";
import humorService from './services/humorService'

let points = 0;

function init() {
  addEventListeners();
}

function addEventListeners() {
  let button = document.querySelector('#getJoke') as HTMLButtonElement;
  const addBtn = document.querySelector('#add') as HTMLButtonElement;
  const removeBtn = document.querySelector('#remove') as HTMLButtonElement;

  addBtn.addEventListener('click', addPoint);
  removeBtn.addEventListener('click', removePoint);
  button.addEventListener('click', generateJoke);
}

const generateJoke = async () => {
  let selectedCategory: string = (document.querySelector('#categoryPicker') as HTMLOptionElement).value;
  console.log(selectedCategory); 
  if (selectedCategory == 'Mörk humor') {
    console.log(selectedCategory);
    let humorJoke: string = await humorService("dark");
    printHtml(humorJoke);
  }
  else {
    let joke: string = await getChuckJoke();  
    printHtml(joke);

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
  console.log(points);
}

function removePoint() {
  const pointCounter = document.querySelector('#counter') as HTMLParagraphElement;
  points -= 1;
  pointCounter.innerText = points.toString();
  console.log(points);
}

const colorTheme: HTMLBodyElement | null = document.querySelector("body");
const colorModeIcon: HTMLSpanElement | null = document.querySelector(".light-mode-icon");
const colorToggleBtn: HTMLButtonElement | null = document.querySelector(".colortoggleicon");

function toggleColorMode() {
  console.log(colorTheme)
  if (colorTheme && colorModeIcon) {
  colorTheme.classList.toggle('change');
  if (colorTheme.classList.contains('change')) {
    colorModeIcon.textContent = "dark_mode";
  } else {
    colorModeIcon.textContent = "light_mode";
  }
}
};
colorToggleBtn?.addEventListener('click', toggleColorMode);


init();