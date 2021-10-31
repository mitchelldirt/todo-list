import './styles.css';
import './components/modal.ts';
import './components/hamburgerButton.ts';
import './components/lightModeDarkMode.ts';
import './components/handleForm';
import './components/handleProjects';
import { toDoItem } from './types';
import { toggleModal } from './components/modal';
import { displayObjects } from "./components/handleForm";
import { changeCurrentProject, returnProjects } from "./components/handleProjects";


const html = document.querySelector('html');
html.dataset.theme = `theme-dark`;

const inboxBtn = document.getElementById('inboxBtn');
inboxBtn.onclick = (e) => {
    e.preventDefault;
    let mainNav: HTMLElement = document.querySelector('.nav-section');
    //nav.classList.toggle("displayNone");
    mainNav.classList.toggle('show-nav');
    displayObjects(returnProjects()[0].array);
    changeCurrentProject('0')
}



