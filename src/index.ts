import './styles.css'


const hamburgerButton = document.getElementById("hamburgerButton");
hamburgerButton.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault();
    let nav = document.getElementById("nav");
    nav.classList.toggle("displayNone");
    console.log(nav);
});