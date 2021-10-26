export default function unchecked() {
    const i = document.createElement('i') as HTMLSpanElement;
    i.classList.add('far')
    i.classList.add('fa-circle')
    i.style.color = "var(--lightColor)"
    return i;
}