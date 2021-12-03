import { toDoItem } from "../../types";

function modifyToDoItem(element: HTMLSpanElement) {
    element.onclick = () => {
        const project: number = +element.parentElement.getAttribute("data-key");
        const id = element.parentElement.id;
        for (const item of projects[project].array) {
            if (item.id === id) {
                const index: number = projects[project].array.indexOf(item);
                projects[project].array.splice(index, 1);
                displayObjects(projects[project].array);
            }
        }
    };
}

function populateModal(element: toDoItem) {
    const title: HTMLElement = document.getElementById("title") as HTMLInputElement;
    const description: HTMLElement = document.getElementById("description") as HTMLTextAreaElement;
    let dateTime: HTMLInputElement = document.getElementById("dateTime") as HTMLInputElement;
    const project: HTMLElement = document.getElementById("project") as HTMLSelectElement;

    title.innerHTML = element.title;
    description.innerHTML = element.description;
    dateTime.valueAsDate = element.dateTime;
    project.
}