import { toDoItem } from '../types';
import { toDoItemArray } from '../types';
import { toggleModal } from '../components/modal';
import { returnProjects, changeCurrentProject } from '../components/handleProjects';

import trashBin from '../components/deleteButton'
import unChecked from '../components/unChecked';
import editButton from '../components/editButton';
import checked from '../components/checked';

let projects = returnProjects()

const submitBtn: HTMLElement = document.getElementById('submitBtn') as HTMLButtonElement;
submitBtn.onclick = function getInputs(e) {
    const title = document.getElementById("title") as HTMLInputElement; 
    const description = document.getElementById("description") as HTMLTextAreaElement;
    const dateTime = document.getElementById("dateTime") as HTMLInputElement;
    const select = document.getElementById("project") as HTMLSelectElement;
    const project = select.options[select.selectedIndex].value;
    console.log(project)
    if (title.value === "" || dateTime.value === "") {
        return;
    }
    toggleModal();
    return createObject(title.value, description.value, processDate(dateTime.value), project);
};

function processDate(dateTime: string): string {
    let timeDateArray: string[] = dateTime.split('T');
    let time: string = timeDateArray[1];
    let dateArray: string[] = timeDateArray[0].split('-');
    let date: string = `${dateArray[1]}/${dateArray[2]}/${dateArray[0].slice(2, 4)}`;
    return `📅${date}⏰${time}`;
};

function createObject(title: string, description: string, dateTime: string, project: string) {
    let newObject: toDoItem = {
        title: title,
        description: description,
        dateTime: dateTime,
        project: project
    }
    return storeObject(newObject);
};

function storeObject(obj: toDoItem) {
    projects[+obj.project].array.push(obj)
    // changeCurrentProject changes which <option> element has the selected attribute.
    changeCurrentProject(obj.project);
    return displayObjects(projects[+obj.project].array);

};

export function displayObjects(array: toDoItem[]) {
    const main: HTMLElement = document.getElementById('content');
    main.innerHTML = ""
    let counter: number = 1;
    for (let obj of array) {
        const id: string = counter.toString();
        const container: HTMLElement = document.createElement('div') as HTMLDivElement;
        const dueDate: HTMLElement = document.createElement('p') as HTMLParagraphElement;
        const title: HTMLElement = document.createElement('p') as HTMLParagraphElement;
        dueDate.style.color = "black";
        title.style.color = "black";
        const checkMarkUnchecked = unChecked();
        const edit = editButton();
        const deleteBtn = trashBin();
        title.innerHTML = obj.title;
        dueDate.innerHTML = obj.dateTime;
        container.id = id;
        container.classList.add("toDoItem");
        obj.id = id;
        container.appendChild(checkMarkUnchecked);
        container.appendChild(title);
        container.appendChild(dueDate);
        container.appendChild(edit);
        container.appendChild(deleteBtn);
        main.appendChild(container);
        counter += 1;
    }
    resetForm();
};

function resetForm() {
    const form = document.getElementById("modalForm") as HTMLFormElement;
    form.reset();
};