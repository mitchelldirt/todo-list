export default function checkMark() {
    const i = document.createElement('i') as HTMLSpanElement;
    i.classList.add('fas')
    i.classList.add('fa-circle')
    i.style.color = "white"
    return i;
}