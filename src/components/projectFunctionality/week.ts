import { displayObjects } from '../../components/submitForm/handleForm';
import { changeCurrentProject, currentWeek, returnProjects, sortProjectArray } from "../../components/projectFunctionality/handleProjects";
import { toDoItemArray } from "../../types";

const weekBtn = document.getElementById("weekBtn") as HTMLButtonElement;
weekBtn.onclick = (e) => {
    const inbox: toDoItemArray = returnProjects()[0];
    e.preventDefault;
    const mainNav: HTMLElement = document.querySelector(".nav-section");
    mainNav.classList.toggle("show-nav");
    displayObjects(sortProjectArray(inbox).array.filter(currentWeek));
    changeCurrentProject("0");
};