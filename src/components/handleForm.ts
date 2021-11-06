import { toDoItem } from '../types';
import { toDoItemArray } from '../types';
import { toggleModal } from '../components/modal';
import { returnProjects, changeCurrentProject } from '../components/handleProjects';

import trashBin from '../components/deleteButton'
import unChecked from '../components/unChecked';
import editButton from '../components/editButton';
import checked from '../components/checked';

let projects: toDoItemArray[] = returnProjects()

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
    if (title.value.length > 15) {
        let titleArray = title.value.split('');
        titleArray.splice(13, 3, '...');
        title.value = titleArray.join('');
    }
    toggleModal();
    return createObject(title.value, description.value, processDate(dateTime.value), project, false);
};

function processDate(dateTime: string): string {
    let timeDateArray: string[] = dateTime.split('T');
    let time: string = timeDateArray[1];
    let dateArray: string[] = timeDateArray[0].split('-');
    let date: string = `${dateArray[1]}/${dateArray[2]}/${dateArray[0].slice(2, 4)}`;
    return `📅${date}⏰${time}`;
};

function createObject(title: string, description: string, dateTime: string, project: string, checked: boolean) {
    let newObject: toDoItem = {
        title: title,
        description: description,
        dateTime: dateTime,
        project: project,
        checked: checked
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
        const container = document.createElement('li') as HTMLLIElement;
        const dueDate: HTMLElement = document.createElement('p') as HTMLParagraphElement;
        const title: HTMLElement = document.createElement('p') as HTMLParagraphElement;
        dueDate.style.color = "black";
        title.style.color = "black";
        const edit = editButton();
        const deleteBtn = trashBin();
        addDeleteFunctionality(deleteBtn);
        // Data-key lets you know which project you're using
        container.setAttribute("data-key", `${obj.project}`); 
        title.innerHTML = obj.title;
        dueDate.innerHTML = obj.dateTime;
        container.id = id;
        container.classList.add("toDoItem");
        obj.id = id;
        if (obj.checked === false) {
            const checkBox = unChecked();
            checkOffItem(checkBox);
            container.appendChild(checkBox);
        } else {
            const checkBox = checked();
            checkOffItem(checkBox);
            container.appendChild(checkBox);
        }

        if (obj.checked === true) {
            title.style.textDecoration = 'line-through';
            title.style.color = 'darkGray';
            dueDate.style.textDecoration = 'line-through';
            dueDate.style.color = 'darkGray';
        }
        title.style.width = '33%';
        edit.style.marginLeft = 'auto';
        dueDate.style.marginLeft = 'auto';
        container.appendChild(title);
        container.appendChild(dueDate);
        container.appendChild(edit);
        container.appendChild(deleteBtn);
        main.appendChild(container);
        console.log(deleteBtn.parentElement);
        counter += 1;
    }
    resetForm();
};

function resetForm() {
    const form = document.getElementById("modalForm") as HTMLFormElement;
    form.reset();
};

function addDeleteFunctionality(element: HTMLSpanElement) {
    element.onclick = () => {
        let project: number = +element.parentElement.getAttribute("data-key")
        let id = element.parentElement.id;
        for (let item of projects[project].array) {
            if (item.id === id) {
                let index: number = projects[project].array.indexOf(item);
                projects[project].array.splice(index, 1);
                displayObjects(projects[project].array);
            }
        }
        console.log(`${project} + ${id}`);
    }
    }

function checkOffItem(element: HTMLSpanElement) {
    element.onclick = () => {
        let project: number = +element.parentElement.getAttribute("data-key");
        let id = element.parentElement.id;
        for (let item of projects[project].array) {
            if (item.id === id) {
                let index: number = projects[project].array.indexOf(item);
                if (projects[project].array[index].checked === false) {
                    projects[project].array[index].checked = true;
                } else {
                    projects[project].array[index].checked = false;
                }
            }
        }
        displayObjects(projects[project].array)
    }
}