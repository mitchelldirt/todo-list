import './styles.css'


const hamburgerButton = document.getElementById("hamburgerButton");
hamburgerButton.addEventListener('click', (event) => {
    event.preventDefault();
    let nav = document.getElementById("nav");
    nav.classList.toggle("displayNone");
    console.log(nav);
});

const lightDarkMode = document.getElementById("lmdm");
lightDarkMode.addEventListener('click', getColorValues);

function getColorValues() {
console.log("done")
};

function setColorValues() {

};