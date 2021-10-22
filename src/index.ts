import './styles.scss'
import './components/modal.ts'
import './components/hamburgerButton.ts';
import './components/lightModeDarkMode.ts'
import { toDoItem } from './types';
import { toggleModal } from './components/modal'
import getDay from 'date-fns/getDay'

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
    return createObject(title.value, description.value, processDate(dateTime.value), priority.value, project.value);
}

function processDate(dateTime: string): string {
    let timeDateArray: string[] = dateTime.split('T');
    let time: string = timeDateArray[1];
    let dateArray: string[] = timeDateArray[0].split('-');
    let date: string = `${dateArray[1]}-${dateArray[2]}-${dateArray[0]}`;
    const result = getDay(new Date(+dateArray[0], +dateArray[1] - 1, +dateArray[2]))
    let day: string;
    switch (result) {
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
    }
    return `${day} ${date} at ${time}`
}

function createObject(title: string, description: string, dateTime: string, priority: string, project: string) {
    let newObject: toDoItem = {
        title: title,
        description: description,
        dateTime: dateTime,
        priority: priority,
        project: project
    }
    console.log(dateTime);
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
        let counter: number = 1;
        let container: HTMLElement = document.createElement('div') as HTMLDivElement;
        let description: HTMLElement = document.createElement('p') as HTMLParagraphElement;
        let dueDate: HTMLElement = document.createElement('p') as HTMLParagraphElement;
        let dueTime: HTMLElement = document.createElement('p') as HTMLParagraphElement;
        let input: HTMLElement = document.createElement('input') as HTMLInputElement;
        let label: HTMLElement = document.createElement('label') as HTMLLabelElement;
        input.classList.add("input");
        input.setAttribute("type", "checkbox");
        input.id = "" + counter;
        label.setAttribute("for", "" + counter);
        label.textContent = obj.title
        container.classList.add("toDoFlex");
        description.textContent = obj.description;
        dueDate.textContent = obj.dateTime;
        container.appendChild(input);
        container.appendChild(label);
        container.appendChild(description);
        container.appendChild(dueDate);
        container.appendChild(dueTime);
        main.appendChild(container)
        counter += 1;
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
