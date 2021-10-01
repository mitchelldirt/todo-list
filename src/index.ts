import './styles.css'
import './components/modal.js'

const hamburgerButton = document.getElementById("hamburgerButton");
hamburgerButton.addEventListener('click', (event) => {
    event.preventDefault();
    let nav = document.getElementById("nav");
    let mainNav = document.querySelector('.nav-section')
    //nav.classList.toggle("displayNone");
    mainNav.classList.toggle('show-nav')
    console.log(nav);
});

const lightDarkMode = document.getElementById("lmdm");
lightDarkMode.onclick = function LMDM() {
    let color1: string = document.documentElement.style.getPropertyValue('--lightColor');
    if (color1 === '#00539c') {
        lightDarkMode.textContent = "Light🌞Mode"
        document.documentElement.style.setProperty('--lightColor', '#eea47f')
        document.documentElement.style.setProperty('--darkColor', '#00539c')
    } else {
        lightDarkMode.textContent = "Dark🌝Mode";
        document.documentElement.style.setProperty('--lightColor', '#00539c')
        document.documentElement.style.setProperty('--darkColor', '#eea47f')
    };
};

