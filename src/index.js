import { initalizeCalendar } from "./calendar";
import { changeDispay } from "./display";

const navButtons = document.querySelectorAll(".nav-item");

navButtons.forEach(navButton =>(
    navButton.addEventListener("click",function(){
        changeDispay(navButton);
    })
))

initalizeCalendar();