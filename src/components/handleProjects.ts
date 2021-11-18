import { toDoItem } from "../types";
import { toDoItemArray } from "../types";
import { displayObjects } from '../components/handleForm'
import { add } from "date-fns";
import trashBin from '../components/deleteButton';
const _ = require('lodash');

let projects: toDoItemArray[] = [];

// Open up the projects page
const projectBtn = document.getElementById('projects') as HTMLButtonElement;
projectBtn.onclick = () => {
    const main: HTMLElement = document.getElementById('content');
    main.innerHTML = "";
    let container = document.createElement('div');
    container.classList.add('projectContainer');
    let addProject: HTMLButtonElement = createProjectButton();
    container.appendChild(addProject);
    for (let i = 1; i < projects.length; i++) {
        let flex = document.createElement('div') as HTMLDivElement;
        flex.classList.add('projectFlex');
        let deleteButton = trashBin();
        deleteButton.style.alignSelf = 'center';
        deleteButton.id = i.toString()
        deleteButton.onclick = () => {
            projects.splice(+deleteButton.id, 1);
            projectBtn.click();
            let mainNav: HTMLElement = document.querySelector('.nav-section')
            mainNav.classList.toggle('show-nav')
            factoryToDoItemArray('');
        }
        flex.appendChild(deleteButton);
        let element = document.createElement('button');
        element.innerHTML = projects[i].value;
        element.onclick = () => {
            return displayObjects(projects[i].array);
        }
        flex.appendChild(element);
        container.appendChild(flex);
    }
    main.appendChild(container);
    let mainNav: HTMLElement = document.querySelector('.nav-section');
    mainNav.classList.toggle('show-nav');
}

//Create a toDoItemArray type object.
function factoryToDoItemArray(input: string) {
    let array: toDoItem[] = []
    let arrayObj: toDoItemArray = {
        value : input,
        array: array
    }
    if (arrayObj.value.length > 0) {
        projects.push(arrayObj);
    }
    let selectElement = document.getElementById('project');
    selectElement.innerHTML = '';
    let valueCounter: number = 0;
    for (let project of projects) {
        let option = document.createElement('option');
        option.value = valueCounter.toString();
        option.innerHTML = project.value;
        selectElement.appendChild(option);
        valueCounter += 1;
    }
};

factoryToDoItemArray('inbox');
factoryToDoItemArray('sample');

// Used in the handle form section to select which project is needed.
export function returnProjects() {
    /*let sortedProjects: toDoItemArray[] = [];
    for (let project of projects) {
        let item: toDoItemArray = sortProjectArray(project);
        sortedProjects.push(item);
    }*/
    return projects;
}

export function changeCurrentProject(projectIndex: string) {
    let projectOptions = document.querySelectorAll('option');
    for (let i = 0; i < projectOptions.length; i++) {
        if (projectIndex === projectOptions[i].value) {
            projectOptions[i].setAttribute('selected', 'selected')
        } else {
            projectOptions[i].removeAttribute('selected')
        }
    }
}

function createProjectButton() {
    let btn = document.createElement('button') as HTMLButtonElement;
    btn.innerHTML = 'Create Project';
    btn.onclick = () => {
        let projectName: string = prompt('Enter the name of your project');
        if (projectName.length > 0) {
            factoryToDoItemArray(projectName);
            projectBtn.click();
            let mainNav: HTMLElement = document.querySelector('.nav-section')
            mainNav.classList.toggle('show-nav')
        }
    }
    return btn;
}

// Sort project array by datetime and then style it using processDate()
/*
function sortProjectArray(input: toDoItemArray): toDoItemArray {
    let obj = input;
    let newArray: toDoItemArray = _.cloneDeep(input);
    const counter: number = obj.array.length
    for (let i = 0; i < counter; i++) {
        if (newArray.array.length === counter) {
            return newArray;
        } else if (newArray.array[0]) {
            let onlyNumbersDate: string = obj.array[i].dateTime.replace(/[^\d.-]/g, '');
            for (let i = 0; i < obj.array.length; i++) {
                if (onlyNumbersDate < newArray.array[i].dateTime.replace(/[^\d.-]/g, '')) {
                    newArray.array.splice(i, 0, obj.array[i]);
                    break;
                }
            }
        } else {
            newArray.array.push(obj.array[0]);
        }
    }
    return newArray
}
*/