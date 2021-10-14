const modal: HTMLElement = document.querySelector(".modal") as HTMLDivElement;
const trigger: HTMLElement = document.querySelector(".trigger") as HTMLButtonElement;
const closeButton: HTMLElement = document.querySelector(".close-button") as HTMLSpanElement;

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event: Event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);