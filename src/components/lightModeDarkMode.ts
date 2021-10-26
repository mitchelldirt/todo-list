const lightDarkMode: HTMLElement = document.getElementById("lmdm") as HTMLButtonElement;
lightDarkMode.onclick = function LMDM(e) {
    e.preventDefault()
    e.stopPropagation
    const html = document.querySelector('html');
    if (html.dataset.theme === `theme-light`) {
        html.dataset.theme = `theme-dark`;
    } else {
        html.dataset.theme = `theme-light`;
    } /*
    let color1: string = document.documentElement.style.getPropertyValue('--lightColor');
    if (color1 === '#FCF6F5') {
        lightDarkMode.textContent = "Light🌞Mode"
        document.documentElement.style.setProperty('--lightColor', '#7b9acc')
        document.documentElement.style.setProperty('--darkColor', '#FCF6F5')
    } else {
        lightDarkMode.textContent = "Dark🌝Mode";
        document.documentElement.style.setProperty('--lightColor', '#FCF6F5')
        document.documentElement.style.setProperty('--darkColor', '#7b9acc')
        
    }; */
};