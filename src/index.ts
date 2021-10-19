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
    const description = document.getElementById("description") as HTMLTextAreaElement;
    const dateTime = document.getElementById("dateTime") as HTMLInputElement;
    const priority = document.getElementById("priority") as HTMLSelectElement;
    const project = document.getElementById("project") as HTMLSelectElement;
    console.log(dateTime.value)
    console.log('all clear');
    return createObject(title.value, description.value, dateTime.value, priority.value, project.value);
}

function createObject(title: string, description: string, dateTime: string, priority: string, project: string) {
    let newObject: toDoItem = {
        title: title,
        description: description,
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
    main.innerHTML = ""
    for (let obj of inbox) {
        let container: HTMLElement = document.createElement('div') as HTMLDivElement;
        let title: HTMLElement = document.createElement('p') as HTMLParagraphElement;
        let description: HTMLElement = document.createElement('p') as HTMLParagraphElement;
        let dueDate: HTMLElement = document.createElement('p') as HTMLParagraphElement;
        title.textContent = obj.title;
        description.textContent = obj.description;
        dueDate.textContent = obj.dateTime;      
        container.appendChild(title);
        container.appendChild(description);
        container.appendChild(dueDate);
        main.appendChild(container)
    }
    

    resetForm();
}

function resetForm() {
    const title = document.getElementById("title") as HTMLInputElement;
    const description = document.getElementById("description") as HTMLTextAreaElement;
    const dateTime = document.getElementById("dateTime") as HTMLInputElement;
    title.value = "";
    description.value = "";
    description.value = "";
    const form = document.getElementById("modalForm") as HTMLFormElement;
    form.reset();
}
