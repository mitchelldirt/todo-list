import './styles.css'


const hamburgerButton = document.getElementById("hamburgerButton");
hamburgerButton.addEventListener('click', (event) => {
    event.preventDefault();
    let nav = document.getElementById("nav");
    nav.classList.toggle("displayNone");
    console.log(nav);
});

const lightDarkMode = document.getElementById("lmdm");
lightDarkMode.addEventListener('click', setColorValues);


function setColorValues() {
document.documentElement.style.setProperty('--light', '--dark')
document.documentElement.style.setProperty('--dark', '--light')
};