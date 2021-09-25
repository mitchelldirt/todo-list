import './styles.css'


const hamburgerButton = document.getElementById("hamburgerButton");
hamburgerButton.onclick = () => {
    const nav = document.getElementById("nav");
    console.log(nav)
    nav.classList.toggle("displayNone");
};