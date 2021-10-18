import './styles.css'
import './components/modal.ts'
import './components/hamburgerButton.ts';
import './components/lightModeDarkMode.ts'
import { toDoItem } from './types';

let inbox: toDoItem[] = [];

const submitBtn: HTMLElement = document.getElementById('submitBtn') as HTMLButtonElement;
submitBtn.onclick = function getInputs(e) {
    e.preventDefault();
    const title = document.getElementById("title") as HTMLInputElement;
    const descripton = document.getElementById("description") as HTMLTextAreaElement;
    const dateT = document.getElementById("dateTime") as HTMLInputElement;
    const priority = document.getElementById("priority") as HTMLSelectElement;
    const project = document.getElementById("project") as HTMLSelectElement;
    console.log('all clear');
    return createObject(title.value, descripton.value, dateT.valueAsDate, priority.value, project.value);
}

function createObject(title: string, descripton: string, dateT: string, priority: string, project: string) {
    let newObject: toDoItem = {
        title: title,
        descripton: descripton,
        dateTime: dateT
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