import { toDoItem } from "../../types";
import { toDoItemArray } from "../../types";
import { toggleModal } from "../userInterface/modal";
import { returnProjects, changeCurrentProject, sortProjectArray, sortByChecked } from "../projectFunctionality/handleProjects";
import trashBin from "../Icons/deleteButton";
import unChecked from "../Icons/unChecked";
import editButton from "../Icons/editButton";
import checked from "../Icons/checked";
import { format, parseJSON } from "date-fns";
import { toggleEditModal } from "../userInterface/editItemModal";
import "../projectFunctionality/modifyToDoItem";
import { storageAvailable } from "../..";

let projects: toDoItemArray[] = returnProjects();

const submitBtn: HTMLElement = document.getElementById("submitBtn") as HTMLButtonElement;
submitBtn.onclick = () => {
    const inputs = getInputs();
    // Closes the moadal
    toggleModal();
    const object: toDoItem = createObject(inputs.title, inputs.description, inputs.dateTime, inputs.project, false);
    changeProjectDisplayName(projects[+object.project].value);
    storeObject(object);
    sortProjects(projects);
    changeCurrentProject(object.project);
    displayObjects(projects[+object.project].array);
    resetForm();
};

function getInputs() {
    const title = document.getElementById("title") as HTMLInputElement;
    const description = document.getElementById("description") as HTMLTextAreaElement;
    const date = document.getElementById("dateTime") as HTMLInputElement;

    // Turn the dateTime input into a Date Object
    const dateTime: Date = new Date(date.value);

    // Figure out and set the project to put the toDoItem into.
    const select = document.getElementById("project") as HTMLSelectElement;
    const project = select.options[select.selectedIndex].value;

    if (title.value === "" || date.value === "") {
        return;
    }

    return {
        title: title.value,
        description: description.value,
        dateTime: dateTime,
        project: project,
    };
}

function limitTitleLength(text: string): string {
    if (text.length > 15) {
        text = text.slice(0, 16) + "...";
    }
    return text;
}

function createObject(title: string, description: string, dateTime: Date, project: string, checked: boolean): toDoItem {
    const newObject: toDoItem = {
        title: title,
        description: description,
        dateTime: dateTime,
        project: project,
        checked: checked
    };
    return newObject;
}

function storeObject(obj: toDoItem): void {
    // Add object to the inbox if it isn't already going there
    obj.id = projects[0].array.length.toString();
    if (+obj.project !== 0) {
        projects[0].array.push(obj);
    }
    projects[+obj.project].array.push(obj);
}

function sortProjects(projectArray: toDoItemArray[]): void {
    const sortedProjects: toDoItemArray[] = [];
    for (const project of projectArray) {
        const item: toDoItemArray = sortByChecked(sortProjectArray(project));
        sortedProjects.push(item);
    }
    projects = sortedProjects;
}

export function changeProjectDisplayName(name: string) {
    const projectName = document.getElementById("projectName") as HTMLHeadingElement;
    projectName.innerHTML = `${name}`;
}

export function displayObjects(array: toDoItem[]) {
    const main: HTMLElement = document.getElementById("content") as HTMLDivElement;

    // clear the main element so new content can be loaded in.
    main.innerHTML = "";

    for (const obj of array) {
        const container = document.createElement("li") as HTMLLIElement;
        const dueDate: HTMLElement = document.createElement("p") as HTMLParagraphElement;
        const title: HTMLElement = document.createElement("p") as HTMLParagraphElement;

        const edit = editButton();
        /* edit.classList.add("editBtn"); */
        modifyToDoItem(edit);

        const deleteBtn = trashBin();
        addDeleteFunctionality(deleteBtn);

        if (obj.title.length > 15) {
            const shortenedTitle: string = limitTitleLength(obj.title);
            title.innerHTML = shortenedTitle;
        } else {
            title.innerHTML = obj.title;
        }
        //convert the date to a string first
        const date: string = format((obj.dateTime as Date), "yyyy-MM-dd'T'HH:mm");
        dueDate.innerHTML = processDate(date);

        // Check if the toDoItem is checked. If it is display a filled in circle - if not display the an unfilled circle.
        container.append(isToDoItemChecked(obj));

        title.style.color = "black";
        title.style.width = "33%";

        edit.style.marginLeft = "auto";

        dueDate.style.marginLeft = "auto";
        dueDate.style.color = "black";

        // Data-key lets you know which project you're using
        container.setAttribute("data-key", `${obj.project}`);
        container.classList.add("toDoItem");

        if (obj.checked === true) {
            title.style.textDecoration = "line-through";
            title.style.color = "darkGray";
            dueDate.style.textDecoration = "line-through";
            dueDate.style.color = "darkGray";
        }

        container.appendChild(title);
        container.appendChild(dueDate);
        container.appendChild(edit);
        container.appendChild(deleteBtn);

        // set the id's to whatever the counter is at.
        container.id = obj.id;
        //obj.id = id;

        main.appendChild(container);
        if (storageAvailable()) {
            projects = returnProjects();
            localStorage.setItem("projectsArray", JSON.stringify(projects));
        }
    }
}

function resetForm() {
    const form = document.getElementById("modalForm") as HTMLFormElement;
    form.reset();
}

function processDate(dateTime: string): string {
    const timeDateArray: string[] = dateTime.split("T");
    const time: string = timeDateArray[1];
    const dateArray: string[] = timeDateArray[0].split("-");
    const date = `${dateArray[1]}/${dateArray[2]}/${dateArray[0].slice(2, 4)}`;
    return `📅${date}⏰${time}`;
}

function addDeleteFunctionality(element: HTMLSpanElement) {
    element.onclick = () => {
        const project: number = +element.parentElement.getAttribute("data-key");
        const id = element.parentElement.id;

        for (const project of projects) {
            for (const item of project.array) {
                if (item.id === id) {
                    const index: number = project.array.indexOf(item);
                    project.array.splice(index, 1);
                }
            }
        }
        if (storageAvailable()) {
            projects = returnProjects();
            localStorage.setItem("projectsArray", JSON.stringify(projects));
        }
        sortByChecked(sortProjectArray(projects[project]));
         displayObjects(projects[project].array);
    };
}

function isToDoItemChecked(obj: toDoItem) {
    if (obj.checked === false) {
        const checkBox = unChecked();
        checkOffItem(checkBox);
        return checkBox;
    } else {
        const checkBox = checked();
        checkOffItem(checkBox);
        return checkBox;
    }
}

function checkOffItem(element: HTMLSpanElement) {
    element.onclick = () => {
        const project: number = +element.parentElement.getAttribute("data-key");
        const id = element.parentElement.id;
        for (const item of projects[project].array) {
            if (item.id === id) {
                const index: number = projects[project].array.indexOf(item);
                if (projects[project].array[index].checked === false) {
                    projects[project].array[index].checked = true;
                } else {
                    projects[project].array[index].checked = false;
                }
            }
        }
        const sortedArray: toDoItemArray = sortByChecked(sortProjectArray(projects[project]));
        //sort the inbox as well
        sortByChecked(sortProjectArray(projects[0]));
        displayObjects(sortedArray.array);
    };
}

export function updateProjects() {
    return projects;
}

function modifyToDoItem(element: HTMLSpanElement) {
    element.onclick = () => {
        const project: number = +element.parentElement.getAttribute("data-key");
        const id = element.parentElement.id;
        for (const item of projects[project].array) {
            if (item.id === id) {
                const index: number = projects[project].array.indexOf(item);
                const currentElement: toDoItem = projects[project].array[index];
                toggleEditModal();
                console.log(currentElement);
                populateModal(currentElement);

                // Possibly create a duplicate modal meant for editing so you can give that submit button certain properties
                // Have it just change the values of the element you're trying to edit and then display objects

                const submitBtn: HTMLElement = document.getElementById("submitBtn-edit");
                submitBtn.onclick = (e) => {
                    e.preventDefault();
                    const title = document.getElementById("title-edit") as HTMLInputElement;
                    const usefulTitle = title.value;
                    if (usefulTitle !== "") {
                        currentElement.title = usefulTitle;
                    }

                    const description = document.getElementById("description-edit") as HTMLInputElement;
                    const usefulDescription = description.value;
                    currentElement.description = usefulDescription;

                    const date = document.getElementById("dateTime-edit") as HTMLInputElement;
                    const dateTime: Date = new Date(date.value);
                    if (dateTime) {
                        currentElement.dateTime = dateTime;
                    }

                    const selectedProject = document.getElementById("project-edit") as HTMLInputElement;
                    const newProject: string = selectedProject.value;

                    // Used to delete item from it's old project.
                    const oldProject: string = currentElement.project;
                    currentElement.project = newProject;


                    // If the project selected differs from the project it was in then add it to the new project
                    if (oldProject !== newProject) {
                        if (newProject === "0" && oldProject !== "0") {
                            projects[+oldProject].array.splice(index, 1);
                        }
                        if (oldProject !== "0") {
                            projects[+oldProject].array.splice(index, 1);
                            changeProjectDisplayName(projects[+currentElement.project].value);
                            projects[+newProject].array.push(currentElement);
                        } else {
                            changeProjectDisplayName(projects[+currentElement.project].value);
                            projects[+newProject].array.push(currentElement);
                        }
                    }
                    const currentProject = updateProjects()[+newProject];
                    displayObjects(sortByChecked(sortProjectArray(currentProject)).array);
                    toggleEditModal();
                };
            }
        }
    };
    if (storageAvailable()) {
        projects = returnProjects();
        localStorage.setItem("projectsArray", JSON.stringify(projects));
    }
}

function populateModal(element: toDoItem) {
    const title = document.getElementById("title-edit") as HTMLInputElement;
    const description: HTMLElement = document.getElementById("description-edit") as HTMLTextAreaElement;
    const dateTime: HTMLInputElement = document.getElementById("dateTime-edit") as HTMLInputElement;
    const goodDateTime = format(new Date(element.dateTime), "yyyy-MM-dd'T'HH:mm");
    populateEditModalDropDownOptions();

    title.value = element.title;
    description.innerText = element.description;
    dateTime.value = goodDateTime;
    // put the change project function in here.
}


function populateEditModalDropDownOptions() {
    const selectElement = document.getElementById("project-edit");
    selectElement.innerHTML = "";
    for (let i = 1; i < projects.length; i++) {
        const option = document.createElement("option");
        option.value = i.toString();
        option.innerHTML = projects[i].value;
        selectElement.appendChild(option);
    }
}