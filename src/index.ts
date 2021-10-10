import './styles.css'
import './components/modal.js'
import './components/hamburgerButton.js';
import './components/lightModeDarkMode.js'
import { toDoItem } from './types';

let inbox: toDoItem[] = [];  

const submitBtn: HTMLElement = document.getElementById('submitBtn');
submitBtn.onclick = function getInputs(e) {
e.preventDefault();
const title: string = document.getElementById("title").textContent;
console.log('all clear');
return createObject(title);
}

function createObject(title: string) {
let newObject: toDoItem = {
    title: title
}
console.log('all clear');
return storeObject(newObject);
}

function storeObject(obj: toDoItem) {
inbox.push(obj);
console.log('all clear');
return displayObjects(inbox);
}

function displayObjects(array: toDoItem[]) {
const main: HTMLElement = document.getElementById('content');
let title: HTMLElement = document.createElement('p');
title.textContent = array[0].title;
main.appendChild(title);
console.log('all clear');
}