import getChuckJoke from "./services/chuckService";
import humorService from './services/humorService'

function init() {
  addEventListeners();
}

function addEventListeners() {
  let button = document.querySelector('#getJoke') as HTMLButtonElement;

  button.addEventListener('click', generateJoke);
}

const generateJoke = async () => {
  let selectedCategory: string = (document.querySelector('option') as HTMLOptionElement).value;
  console.log(selectedCategory); 
  if (selectedCategory == 'Mörk humor') {
    console.log(selectedCategory);
    // let randomJoke: string = await humorService("dark");
  }
  let joke: string = await getChuckJoke();  
  printHtml(joke);
}

function printHtml(jokeText: string) {
  let div = document.querySelector('.jokebox') as HTMLDivElement;
  div.innerHTML = jokeText;
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