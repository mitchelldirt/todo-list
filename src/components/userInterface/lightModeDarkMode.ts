const lightDarkMode: HTMLElement = document.getElementById("lmdm") as HTMLButtonElement;
lightDarkMode.onclick = function LMDM(e) {
    e.preventDefault();
    e.stopPropagation;
    const html = document.querySelector("html");
    // Using data-theme in the :root in CSS to change between light and dark mode 
    if (html.dataset.theme === "theme-light") {
        html.dataset.theme = "theme-dark";
        lightDarkMode.innerHTML = "Light🌞Mode";
    } else {
        html.dataset.theme = "theme-light";
        lightDarkMode.innerHTML = "Dark🌝Mode";
    }
};