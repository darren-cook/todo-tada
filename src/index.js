import { calendarTest } from "./calendar";

const navButtons = document.querySelectorAll(".nav-item");

navButtons.forEach(navButton =>(
    navButton.addEventListener("click",function(){
        const navActive = document.querySelector(".nav-active");

        navActive.classList.toggle("nav-active");
        navButton.classList.toggle("nav-active");
    })
))

calendarTest();