import './styles.css';
import './components/modal.ts';
import './components/userInterface/hamburgerButton.ts';
import './components/lightModeDarkMode.ts';
import './components/submitForm/handleForm';
import './components/projectFunctionality/handleProjects';
import { toDoItem } from './types';
import { toggleModal } from './components/userInterface/modal';
import { displayObjects } from "./components/submitForm/handleForm";
import { changeCurrentProject, currentWeek, returnProjects, sortProjectArray } from "./components/projectFunctionality/handleProjects";
import { toDoItemArray } from "./types";

const html = document.querySelector('html');
html.dataset.theme = `theme-dark`;

const inboxBtn = document.getElementById('inboxBtn') as HTMLButtonElement;
inboxBtn.onclick = (e) => {
    let inbox: toDoItemArray = returnProjects()[0]
    e.preventDefault;
    let mainNav: HTMLElement = document.querySelector('.nav-section');
    //nav.classList.toggle("displayNone");
    mainNav.classList.toggle('show-nav');
    displayObjects(sortProjectArray(inbox).array);
    changeCurrentProject('0')
}

const weekBtn = document.getElementById('weekBtn') as HTMLButtonElement;
weekBtn.onclick = (e) => {
    let inbox: toDoItemArray = returnProjects()[0]
    e.preventDefault;
    let mainNav: HTMLElement = document.querySelector('.nav-section');
    //nav.classList.toggle("displayNone");
    mainNav.classList.toggle('show-nav');
    displayObjects(sortProjectArray(inbox).array.filter(currentWeek));
    changeCurrentProject('0')
}



