import { toDoItem, toDoItemArray } from "../../types";
import { toggleModal } from "../userInterface/modal";
import { returnProjects } from "../projectFunctionality/handleProjects";

const projects: toDoItemArray[] = returnProjects();

export default function modifyToDoItem(element: HTMLSpanElement) {
    element.onclick = () => {
        const project: number = +element.parentElement.getAttribute("data-key");
        const id = element.parentElement.id;
        for (const item of projects[project].array) {
            if (item.id === id) {
                const index: number = projects[project].array.indexOf(item);
                toggleModal();
                console.log(projects[project].array[index]);
                populateModal(projects[project].array[index]);
               /* const submitBtn: HTMLElement = document.getElementById("submitBtn");
                submitBtn.onclick = () => {
                    projects[project].array.splice(index, 1);
                }; */
            }
        }
    };
}

function populateModal(element: toDoItem) {
    const title = document.getElementById("title") as HTMLInputElement;
    const description: HTMLElement = document.getElementById("description") as HTMLTextAreaElement;
    const dateTime: HTMLInputElement = document.getElementById("dateTime") as HTMLInputElement;
   // const project: HTMLElement = document.getElementById("project") as HTMLSelectElement;

    title.value = element.title;
    description.innerText = element.description;
    dateTime.value = element.dateTime.toString();
    // put the change project function in here.
}