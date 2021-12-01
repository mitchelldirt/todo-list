import { displayObjects } from '../../components/submitForm/handleForm';
import { changeCurrentProject, returnProjects, sortProjectArray } from "../../components/projectFunctionality/handleProjects";
import { toDoItemArray } from "../../types";


const inboxBtn = document.getElementById("inboxBtn") as HTMLButtonElement;
inboxBtn.onclick = (e) => {
    const inbox: toDoItemArray = returnProjects()[0];
    e.preventDefault;
    const mainNav: HTMLElement = document.querySelector(".nav-section");
    //nav.classList.toggle("displayNone");
    mainNav.classList.toggle("show-nav");
    displayObjects(sortProjectArray(inbox).array);
    changeCurrentProject("0");
};