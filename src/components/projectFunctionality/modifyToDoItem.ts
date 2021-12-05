import { toDoItem, toDoItemArray } from "../../types";
import { returnProjects } from "../projectFunctionality/handleProjects";
import { displayObjects } from "../submitForm/handleForm";
import { toggleEditModal } from "../userInterface/editItemModal";


const projects: toDoItemArray[] = returnProjects();

export default function modifyToDoItem(element: HTMLSpanElement) {
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
                    e.preventDefault()
                    projects[project].array.splice(index, 1);
                    currentElement.title = document.getElementById("title-edit").innerText;
                    currentElement.description = document.getElementById("description-edit").innerText;
                    const date = document.getElementById("dateTime-edit") as HTMLInputElement;
                    const dateTime: Date = new Date(date.value);
                    currentElement.dateTime = dateTime;
                    displayObjects(projects[project].array);
                };
            }
        }
    };
}

function populateModal(element: toDoItem) {
    const title = document.getElementById("title-edit") as HTMLInputElement;
    const description: HTMLElement = document.getElementById("description-edit") as HTMLTextAreaElement;
    const dateTime: HTMLInputElement = document.getElementById("dateTime-edit") as HTMLInputElement;
   // const project: HTMLElement = document.getElementById("project") as HTMLSelectElement;

    title.value = element.title;
    description.innerText = element.description;
    dateTime.value = element.dateTime.toString();
    // put the change project function in here.
}