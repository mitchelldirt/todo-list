const lightDarkMode: HTMLElement = document.getElementById("lmdm") as HTMLButtonElement;
lightDarkMode.onclick = function LMDM() {
    let color1: string = document.documentElement.style.getPropertyValue('$lightColor');
    if (color1 === '#00539c') {
        lightDarkMode.textContent = "Light🌞Mode"
        document.documentElement.style.setProperty('$lightColor', '#eea47f')
        document.documentElement.style.setProperty('$darkColor', '#00539c')
    } else {
        lightDarkMode.textContent = "Dark🌝Mode";
        document.documentElement.style.setProperty('$lightColor', '#00539c')
        document.documentElement.style.setProperty('$darkColor', '#eea47f')
    };
};