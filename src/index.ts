import './styles.css';
import './components/modal.ts';
import './components/hamburgerButton.ts';
import './components/lightModeDarkMode.ts';
import { toDoItem } from './types';
import { toggleModal } from './components/modal';
import getDay from 'date-fns/getDay';
//@ts-ignore
import checked from './imgs/checked.svg';
//@ts-ignore
import trashBin from './imgs/trashBin.svg';
//@ts-ignore
import editDots from './imgs/edit.svg';
//@ts-ignore
import unchecked from './imgs/unchecked.svg'

let inbox: toDoItem[] = [];

const submitBtn: HTMLElement = document.getElementById('submitBtn') as HTMLButtonElement;
submitBtn.onclick = function getInputs(e) {
    e.preventDefault();
    toggleModal();
    const title = document.getElementById("title") as HTMLInputElement;
    const description = document.getElementById("description") as HTMLTextAreaElement;
    const dateTime = document.getElementById("dateTime") as HTMLInputElement;
    const project = document.getElementById("project") as HTMLSelectElement;
    console.log(dateTime.value)
    console.log('all clear');
    return createObject(title.value, description.value, processDate(dateTime.value), project.value);
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

function createObject(title: string, description: string, dateTime: string, project: string) {
    let newObject: toDoItem = {
        title: title,
        description: description,
        dateTime: dateTime,

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
    let counter: number = 1;
    for (let obj of array) {
        const id: string = counter.toString();
        const listItem: HTMLElement = document.createElement('li') as HTMLLIElement
        const dueDate: HTMLElement = document.createElement('div') as HTMLDivElement;
        const title: HTMLElement = document.createElement('div') as HTMLDivElement;
        const check = document.createElement('img') as HTMLImageElement;
        const edit = document.createElement('img') as HTMLImageElement;
        const deleteBtn = document.createElement('img') as HTMLImageElement;
        check.src = unchecked;
        check.alt = "Outline of a circle";
        edit.src = editDots;
        edit.alt = "three dots - click to edit item";
        deleteBtn.src = trashBin;
        deleteBtn.alt = "Trash bin - deletes an item";
        title.innerHTML = obj.title;
        dueDate.innerHTML = obj.dateTime;
        listItem.id = id;
        listItem.classList.add("toDoItem");
        obj.id = id;
        listItem.appendChild(check);
        listItem.appendChild(title);
        listItem.appendChild(dueDate);
        listItem.appendChild(edit);
        listItem.appendChild(deleteBtn);
        main.appendChild(listItem);
        counter += 1;
    }
    resetForm();
}

function resetForm() {

    const form = document.getElementById("modalForm") as HTMLFormElement;
    form.reset();
}
