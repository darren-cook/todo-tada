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
    const dialogForm = document.querySelector("#dialog-form");
    console.log("fire")
    dialogForm.showModal();
}

export { changeDispay, formDisplay }