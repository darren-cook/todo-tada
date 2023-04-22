import { format } from "date-fns";
import { compareAsc } from "date-fns";

import { dayFactory } from "./date-functions";

const today = new Date;
let dayObjects = dayFactory(today);

function initalizeTodos(){
    // const monthData = getMonthData(monthObject);
    // generateCalendar(monthData);

    const todoButtons = document.querySelectorAll(".todo-button");
    todoButtons.forEach(todoButton => {
        todoButton.addEventListener("click", function(){
            // changeMonth(parseInt(calendarButton.dataset.shift));
            console.log(todoButton.dataset.shift)
        })
    })
}


export { initalizeTodos }