import { initalizeCalendar } from "./calendar";
import { initalizeTodos } from "./todos";
import { changeDispay, formDisplay } from "./display";

const navButtons = document.querySelectorAll(".nav-item");
const addButton = document.querySelector("#add-button");

navButtons.forEach(navButton =>(
    navButton.addEventListener("click",function(){
        changeDispay(navButton);
    })
))

addButton.addEventListener("click", function(){
    formDisplay();
})

initalizeCalendar();
initalizeTodos();
