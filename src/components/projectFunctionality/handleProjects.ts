import { toDoItem } from "../../types";
import { toDoItemArray } from "../../types";
import { displayObjects, updateProjects } from "../submitForm/handleForm";
import { isBefore, isThisWeek } from "date-fns";
import trashBin from "../Icons/deleteButton";


let projects: toDoItemArray[] = [];

// Open up the projects page
const projectBtn = document.getElementById("projects") as HTMLButtonElement;
projectBtn.onclick = () => {
    const main: HTMLElement = document.getElementById("content");
    main.innerHTML = "";
    const container = document.createElement("div");
    container.classList.add("projectContainer");
    const addProject: HTMLButtonElement = createProjectButton();
    container.appendChild(addProject);
    for (let i = 1; i < projects.length; i++) {
        const flex = document.createElement("div") as HTMLDivElement;
        flex.classList.add("projectFlex");
        const deleteButton = trashBin();
        deleteButton.style.alignSelf = "center";
        deleteButton.id = i.toString();
        deleteButton.onclick = () => {
            projects.splice(+deleteButton.id, 1);
            projectBtn.click();
            const mainNav: HTMLElement = document.querySelector(".nav-section");
            mainNav.classList.toggle("show-nav");
            factoryToDoItemArray("");
        };
        flex.appendChild(deleteButton);
        const element = document.createElement("button");
        element.innerHTML = projects[i].value;
        element.onclick = () => {
            return displayObjects(projects[i].array);
        };
        flex.appendChild(element);
        container.appendChild(flex);
    }
    main.appendChild(container);
    const mainNav: HTMLElement = document.querySelector(".nav-section");
    mainNav.classList.toggle("show-nav");
};

//Create a toDoItemArray type object.
function factoryToDoItemArray(input: string) {
    const array: toDoItem[] = [];
    const arrayObj: toDoItemArray = {
        value: input,
        array: array
    };
    if (arrayObj.value.length > 0) {
        projects.push(arrayObj);
    }
    const selectElement = document.getElementById("project");
    selectElement.innerHTML = "";
    let valueCounter = 0;
    for (const project of projects) {
        const option = document.createElement("option");
        option.value = valueCounter.toString();
        option.innerHTML = project.value;
        selectElement.appendChild(option);
        valueCounter += 1;
    }
}

factoryToDoItemArray("inbox");
factoryToDoItemArray("sample");

// Used in the handle form section to select which project is needed.
export function returnProjects() {
    return projects;
}

export function changeCurrentProject(projectIndex: string) {
    const projectOptions = document.querySelectorAll("option");
    for (let i = 0; i < projectOptions.length; i++) {
        if (projectIndex === projectOptions[i].value) {
            projectOptions[i].setAttribute("selected", "selected");
        } else {
            projectOptions[i].removeAttribute("selected");
        }
    }
}

function createProjectButton() {
    const btn = document.createElement("button") as HTMLButtonElement;
    btn.innerHTML = "Create Project";
    btn.onclick = () => {
        const projectName: string = prompt("Enter the name of your project");
        if (projectName.length > 0) {
            factoryToDoItemArray(projectName);
            projectBtn.click();
            const mainNav: HTMLElement = document.querySelector(".nav-section");
            mainNav.classList.toggle("show-nav");
        }
    };
    return btn;
}

// Sort project array by datetime using date-fns and then style it using processDate()

// The below is a good starting point.

export function sortProjectArray(input: toDoItemArray): toDoItemArray {
    projects = updateProjects();
    const copyOfArray: toDoItem[] = input.array.slice(0);
    const newToDoItemArray: toDoItemArray = {
        value: input.value,
        array: []
    };
    for (const date of input.array) {
        //if there's a value in the first position
        if (newToDoItemArray.array[0]) {
            for (const newDate of copyOfArray) {
                if (isBefore(date.dateTime, newDate.dateTime) === true) {
                    const index = newToDoItemArray.array.indexOf(newDate);
                    newToDoItemArray.array.splice(index, 0, date);
                    break;
                } else if (date.dateTime === newDate.dateTime) {
                    newToDoItemArray.array.push(date);
                    break;
                } else {
                    continue;
                }
            }
        } else {
            newToDoItemArray.array.push(date);
        }
    }
    return newToDoItemArray;
}

export function currentWeek(obj: toDoItem) {
    if (isThisWeek(obj.dateTime) === true) {
        return obj;
    }
}