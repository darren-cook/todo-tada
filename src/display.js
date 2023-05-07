import { initalizeCalendar } from "./calendar";
import { initalizeTodos } from "./todos";

function changeDispay(newNav){
    const oldNav = document.querySelector(".nav-active");
    const oldMain = document.querySelector(".main-active");
    const newMain = document.querySelector(`#main-${newNav.id}`);

    oldNav.classList.toggle("nav-active");
    newNav.classList.toggle("nav-active");

    oldMain.classList.toggle("main-active");
    newMain.classList.toggle("main-active");
    oldMain.classList.toggle("main-inactive");
    newMain.classList.toggle("main-inactive");
}

function formDisplay(){
    const form = document.querySelector("#form");
    form.showModal();

    form.addEventListener("click", e =>{
        const formDimensions = form.getBoundingClientRect();

        if (
            e.clientX < formDimensions.left ||
            e.clientX > formDimensions.right ||
            e.clientY < formDimensions.top ||
            e.clientY > formDimensions.bottom
        ) {
            form.close();
        }
    })
}

export { changeDispay, formDisplay }