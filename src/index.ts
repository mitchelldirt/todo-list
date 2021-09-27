import './styles.css'


const hamburgerButton = document.getElementById("hamburgerButton");
hamburgerButton.addEventListener('click', (event) => {
    event.preventDefault();
    let nav = document.getElementById("nav");
    nav.classList.toggle("displayNone");
    console.log(nav);
});

const lightDarkMode = document.getElementById("lmdm");
lightDarkMode.addEventListener('click', (e) => {
    e.preventDefault();
    const color1: string = document.documentElement.style.getPropertyValue('--lightColor');
    const color2: string = document.documentElement.style.getPropertyValue('--darkColor');
    if (color1 === '#eea47f') {
        document.documentElement.style.setProperty('--lightColor', '#00539c')
        document.documentElement.style.setProperty('--darkColor', '#eea47f')
        console.log('1')
    } else {
        document.documentElement.style.setProperty('--lightColor', '#eea47f')
        document.documentElement.style.setProperty('--darkColor', '#00539c')
        console.log('2')
    }

});