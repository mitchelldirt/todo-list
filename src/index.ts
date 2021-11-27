import './styles.css';
import './components/modal.ts';
import './components/hamburgerButton.ts';
import './components/lightModeDarkMode.ts';
import './components/handleForm';
import './components/handleProjects';
import { toDoItem } from './types';
import { toggleModal } from './components/modal';
import { displayObjects } from "./components/handleForm";
import { changeCurrentProject, returnProjects, sortProjectArray } from "./components/handleProjects";
import { toDoItemArray } from "./types";

const html = document.querySelector('html');
html.dataset.theme = `theme-dark`;

const inboxBtn = document.getElementById('inboxBtn');
inboxBtn.onclick = (e) => {
    let inbox: toDoItemArray = returnProjects()[0]
    e.preventDefault;
    let mainNav: HTMLElement = document.querySelector('.nav-section');
    //nav.classList.toggle("displayNone");
    mainNav.classList.toggle('show-nav');
    displayObjects(sortProjectArray(inbox).array);
    changeCurrentProject('0')
}



