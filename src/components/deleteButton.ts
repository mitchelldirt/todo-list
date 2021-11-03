export default function trashBin(): HTMLSpanElement {
    const i = document.createElement('i') as HTMLSpanElement;
    i.classList.add('far')
    i.classList.add('fa-trash-alt')
    i.style.color = "white";
    return i;
}

export function addDeleteFunctionality(btn: HTMLSpanElement): Event {
   
    return;
};