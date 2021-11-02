export default function trashBin(): HTMLSpanElement {
    const i = document.createElement('i') as HTMLSpanElement;
    i.classList.add('far')
    i.classList.add('fa-trash-alt')
    i.style.color = "white"
    console.log(i);
    return i;
}