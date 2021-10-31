import { toDoItem } from "../types";
import { toDoItemArray } from "../types";

let projects: toDoItemArray[] = [];

const projectBtn = document.getElementById('projects') as HTMLButtonElement;
projectBtn.onclick = () => {
    const main: HTMLElement = document.getElementById('content');
    main.innerHTML = "";
    let counter: number = 0;
    for (let project of projects) {
        let element = document.createElement('button');
        element.innerHTML = project.value;
        element.textContent = project.value;
        console.log(project.value)
        main.appendChild(element);
    }
    let mainNav: HTMLElement = document.querySelector('.nav-section')
    //nav.classList.toggle("displayNone");
    mainNav.classList.toggle('show-nav')
}

function factoryToDoItemArray(input: string) {
    let array: toDoItem[] = []
    let arrayObj: toDoItemArray = {
        value : input,
        array: array
    }
    projects.push(arrayObj);

};

factoryToDoItemArray('inbox');
factoryToDoItemArray('sample');
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
