import './styles.css'
import './components/modal.ts'
import './components/hamburgerButton.ts';
import './components/lightModeDarkMode.ts'
import { toDoItem } from './types';
import { toggleModal } from './components/modal'

let inbox: toDoItem[] = [];

const submitBtn: HTMLElement = document.getElementById('submitBtn') as HTMLButtonElement;
submitBtn.onclick = function getInputs(e) {
    e.preventDefault();
    toggleModal();
    const title = document.getElementById("title") as HTMLInputElement;
    const descripton = document.getElementById("description") as HTMLTextAreaElement;
    const dateTime = document.getElementById("dateTime") as HTMLInputElement;
    const priority = document.getElementById("priority") as HTMLSelectElement;
    const project = document.getElementById("project") as HTMLSelectElement;
    console.log(dateTime.value)
    console.log('all clear');
    return createObject(title.value, descripton.value, dateTime.value, priority.value, project.value);
}

function createObject(title: string, descripton: string, dateTime: string, priority: string, project: string) {
    let newObject: toDoItem = {
        title: title,
        descripton: descripton,
        dateTime: dateTime
    }
    console.log(dateTime)
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
    resetForm();
}

function resetForm() {
    const form = document.getElementById("modalForm") as HTMLFormElement;
    form.reset();
}
