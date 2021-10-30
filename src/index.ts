import './styles.css';
import './components/modal.ts';
import './components/hamburgerButton.ts';
import './components/lightModeDarkMode.ts';
import './components/handleForm';
import './components/handleProjects';
import { toDoItem } from './types';
import { toggleModal } from './components/modal';


const html = document.querySelector('html');
html.dataset.theme = `theme-dark`;




