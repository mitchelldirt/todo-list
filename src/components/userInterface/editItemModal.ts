const modal: HTMLElement = document.querySelector(".modal-edit") as HTMLDivElement;
const closeButton: HTMLElement = document.querySelector(".close-button-edit") as HTMLSpanElement;

export function toggleEditModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event: Event) {
    if (event.target === modal) {
        toggleEditModal();
    }
}

closeButton.addEventListener("click", toggleEditModal);
window.addEventListener("click", windowOnClick);