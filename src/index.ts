import "./styles.css";
import "./components/userInterface/modal";
import "./components/userInterface/hamburgerButton.ts";
import "./components/userInterface/lightModeDarkMode.ts";
import "./components/submitForm/handleForm";
import "./components/projectFunctionality/handleProjects";
import { displayObjects } from "./components/submitForm/handleForm";
import { changeCurrentProject, currentWeek, returnProjects, sortProjectArray } from "./components/projectFunctionality/handleProjects";
import { toDoItemArray } from "./types";

const html = document.querySelector("html");
html.dataset.theme = "theme-dark";

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

const weekBtn = document.getElementById("weekBtn") as HTMLButtonElement;
weekBtn.onclick = (e) => {
    const inbox: toDoItemArray = returnProjects()[0];
    e.preventDefault;
    const mainNav: HTMLElement = document.querySelector(".nav-section");
    mainNav.classList.toggle("show-nav");
    displayObjects(sortProjectArray(inbox).array.filter(currentWeek));
    changeCurrentProject("0");
};



