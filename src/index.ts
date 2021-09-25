import './styles.css'


const hamburgerButton = document.getElementById("hamburgerButton");
hamburgerButton.addEventListener('click', () =>{
    const nav = document.getElementById("nav");
    nav.classList.toggle("displayNone");
});