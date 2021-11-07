import { toDoItem } from "../types";
import { toDoItemArray } from "../types";
import { displayObjects } from '../components/handleForm'
import { add } from "date-fns";

let projects: toDoItemArray[] = [];

// Open up the projects page
const projectBtn = document.getElementById('projects') as HTMLButtonElement;
projectBtn.onclick = () => {
    const main: HTMLElement = document.getElementById('content');
    main.innerHTML = "";
    let addProject: HTMLButtonElement = createProjectButton();
    main.appendChild(addProject);
    for (let project of projects) {
        let element = document.createElement('button');
        element.innerHTML = project.value;
        element.textContent = project.value;
        element.onclick = () => {
            return displayObjects(project.array)
        }
        console.log(project.value)
        main.appendChild(element);
    }
    let mainNav: HTMLElement = document.querySelector('.nav-section')
    mainNav.classList.toggle('show-nav')
}

//Create a toDoItemArray type object.
function factoryToDoItemArray(input: string) {
    let array: toDoItem[] = []
    let arrayObj: toDoItemArray = {
        value : input,
        array: array
    }
    projects.push(arrayObj);
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
        if (projectName !== '') {
            factoryToDoItemArray(projectName);
            projectBtn.click();
            let mainNav: HTMLElement = document.querySelector('.nav-section')
            mainNav.classList.toggle('show-nav')
        }
    }
    return btn;
}
