import "./styles.css";
import "./components/userInterface/modal";
import "./components/userInterface/hamburgerButton.ts";
import "./components/userInterface/lightModeDarkMode.ts";
import "./components/submitForm/handleForm";
import "./components/projectFunctionality/handleProjects";
import "./components/projectFunctionality/inbox";
import "./components/projectFunctionality/week";
import { format, add } from "date-fns";

const html = document.querySelector("html");
html.dataset.theme = "theme-dark";

const today: string = format(new Date(), "yyyy-MM-dd'T'HH:mm");
const todayPlus3Years: Date = add(new Date(), { years: 3 });
const max = format(todayPlus3Years, "yyyy-MM-dd'T'HH:mm");

const dateSelector = document.getElementById("dateTime");
dateSelector.setAttribute("min", today);
dateSelector.setAttribute("max", max);

const dateSelectorEditModal = document.getElementById("dateTime-edit");
dateSelectorEditModal.setAttribute("min", today);
dateSelectorEditModal.setAttribute("max", max);

export function storageAvailable() {
    const test = "test";
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        console.log("storage not working");
        return false;
    }
}






