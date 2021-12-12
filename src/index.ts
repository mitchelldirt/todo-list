import "./styles.css";
import "./components/userInterface/modal";
import "./components/userInterface/hamburgerButton.ts";
import "./components/userInterface/lightModeDarkMode.ts";
import "./components/submitForm/handleForm";
import "./components/projectFunctionality/handleProjects";
import "./components/projectFunctionality/inbox";
import "./components/projectFunctionality/week";
import { format, add } from 'date-fns';

const html = document.querySelector("html");
html.dataset.theme = "theme-dark";

let today: string = format(new Date(), "yyyy-MM-dd'T'HH:mm");
let todayPlus3Years: Date = add(new Date(), {years: 3});
let max = format(todayPlus3Years, "yyyy-MM-dd'T'HH:mm");

let dateSelector = document.getElementById("dateTime");
dateSelector.setAttribute("min", today);
dateSelector.setAttribute("max", max);

let dateSelectorEditModal = document.getElementById("dateTime-edit");
dateSelectorEditModal.setAttribute("min", today);
dateSelectorEditModal.setAttribute("max", max);









