const hamburgerButton = document.getElementById("hamburgerButton");
hamburgerButton.addEventListener('click', (event) => {
    event.preventDefault();
    let nav = document.getElementById("nav");
    let mainNav = document.querySelector('.nav-section')
    //nav.classList.toggle("displayNone");
    mainNav.classList.toggle('show-nav')
    console.log(nav);
});