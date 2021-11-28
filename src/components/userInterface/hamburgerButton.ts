const hamburgerButton: HTMLElement = document.getElementById("hamburgerButton") as HTMLButtonElement;

hamburgerButton.addEventListener("click", (event) => {
    event.preventDefault();
    const mainNav: HTMLElement = document.querySelector(".nav-section");
    mainNav.classList.toggle("show-nav");
});