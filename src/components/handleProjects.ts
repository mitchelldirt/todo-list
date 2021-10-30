import { toDoItem } from "../types";
import { toDoItemArray } from "../types";

let projects: toDoItemArray[] = [];

const projectBtn = document.getElementById('projects') as HTMLButtonElement;
projectBtn.onclick = () => {
    const main: HTMLElement = document.getElementById('content');
    main.innerHTML = "";
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
