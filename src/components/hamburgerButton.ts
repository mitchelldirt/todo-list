const hamburgerButton: HTMLElement = document.getElementById("hamburgerButton") as HTMLButtonElement;
hamburgerButton.addEventListener('click', (event) => {
    event.preventDefault();
    let nav: HTMLElement = document.getElementById("nav");
    let mainNav: HTMLElement = document.querySelector('.nav-section')
    //nav.classList.toggle("displayNone");
    mainNav.classList.toggle('show-nav')
    console.log(nav);
});