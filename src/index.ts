import './styles.css'
import './components/modal.js'
import './components/hamburgerButton.js';
import './components/lightModeDarkMode.js'
import { toDoItem } from './types';

let inbox: toDoItem[] = [];

const submitBtn: HTMLElement = document.getElementById('submitBtn') as HTMLButtonElement;
submitBtn.onclick = function getInputs(e) {
    e.preventDefault();
    const title = document.getElementById("title") as HTMLInputElement;
    console.log('all clear');
    return createObject(title.value);
}

function createObject(title: string) {
    let newObject: toDoItem = {
        title: title
    }
    console.log('all clear');
    return storeObject(newObject);
}

function storeObject(obj: toDoItem) {
    inbox.push(obj);
    console.log('all clear');
    return displayObjects(inbox);
}

function displayObjects(array: toDoItem[]) {
    const main: HTMLElement = document.getElementById('content');
    let title: HTMLElement = document.createElement('p');
    title.textContent = array[0].title;
    main.appendChild(title);
    console.log('all clear');
}