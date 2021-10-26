export default function editButton() {
    const i = document.createElement('i') as HTMLElement;
    i.classList.add('far')
    i.classList.add('fa-edit')
    i.style.color = "white"
    return i;
}