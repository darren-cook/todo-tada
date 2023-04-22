import { format } from "date-fns";
import { eachDayOfInterval } from "date-fns";
import { eachWeekOfInterval } from "date-fns";
import { compareAsc } from "date-fns";

import { dayFactory } from "./date-functions";
import { monthFactory } from "./date-functions";

const today = new Date;
const todayObject = dayFactory(today);
let monthObject = monthFactory(today);

function initalizeCalendar(){
    const monthData = getMonthData(monthObject);
    generateCalendar(monthData);

    const calendarButtons = document.querySelectorAll(".date-button");
    calendarButtons.forEach(calendarButton => {
        calendarButton.addEventListener("click", function(){
            changeMonth(parseInt(calendarButton.dataset.shift));
        })
    })
}

function getMonthData(monthObject){
    const monthData = [];
    const monthRange = eachDayOfInterval({
        start: new Date(monthObject.year, monthObject.monthIndex, monthObject.day),
        end: new Date(monthObject.year, (monthObject.monthIndex)+1, monthObject.day)
    })
    monthRange.pop();
    monthRange.forEach(date => {
        // Examples for "Wednesday March 15th, 2023"
        const year = format(date, "yyyy")-0;
        // 2023
        const month = format(date, "LLL");
        // Mar
        const monthFull = format(date, "LLLL");
        // March
        const monthIndex = format(date, "L")-1;
        // 2 (3-1)
        const day = format(date, "d")-0;
        // 15
        const weekDay = format(date, "iii");
        // Wed
        const weekDayIndex = format(date, "e")-1;
        // 3 (4-1)
        monthData.push({year, month, day, weekDay, weekDayIndex, monthIndex, monthFull});
    });
    return(monthData)
}

function generateCalendar(monthData) {
    const firstOfMonth = monthData[0];
    const lastOfMonth = monthData[monthData.length-1];

    const weekCount = eachWeekOfInterval({
        start: new Date(firstOfMonth.year, firstOfMonth.monthIndex, firstOfMonth.day),
        end: new Date(lastOfMonth.year, lastOfMonth.monthIndex, lastOfMonth.day)
    }).length

    const firstWeekDayIndex = firstOfMonth.weekDayIndex;
    const offset = (firstWeekDayIndex-1)*-1;
    let date = offset;

    const table = document.getElementById("calendar-table");

    for(let week=0; week<weekCount; week++){
        const row = document.createElement("tr");

        for(let day=0; day<7; day++){
            const cell = document.createElement("td");
            cell.id = `${firstOfMonth.year},${firstOfMonth.month},${date}`;

            if(date<1 || date>monthData.length){
                cell.classList.add("date-invalid")
            } else {
                fillCell(cell, monthData[date-1]);
            }
            row.appendChild(cell);
            date++;
        }
        table.appendChild(row);
    }

    const calendarMonth = document.getElementById("calendar-month");
    const calendarYear = document.getElementById("calendar-year");
    calendarMonth.innerHTML = firstOfMonth.monthFull;
    calendarYear.innerHTML = firstOfMonth.year;
}

function fillCell(cell, dayData){
    const calendarDate = document.createElement("p");
    calendarDate.classList.add("calendar-date");
    calendarDate.innerHTML = dayData.day;
    cell.appendChild(calendarDate);

    const calendarTaskContainer = document.createElement("div");
    calendarTaskContainer.classList.add("calendar-task-container");

    const dateComparison = compareAsc(
        new Date(todayObject.year, todayObject.monthIndex, todayObject.day), 
        new Date(dayData.year, dayData.monthIndex, dayData.day)
    );

    if(dateComparison===0){
        calendarDate.classList.add("calendar-today");

        const todoSpan = document.createElement("span");
        todoSpan.classList.add("calendar-span-color");
        todoSpan.classList.add("calendar-key-upcoming");
        todoSpan.innerHTML = "79";

        calendarTaskContainer.appendChild(todoSpan);

        const overdueSpan = document.createElement("span");
        overdueSpan.classList.add("calendar-span-color");
        overdueSpan.classList.add("calendar-key-overdue");
        overdueSpan.innerHTML = "7";

        calendarTaskContainer.appendChild(overdueSpan);

        const completeSpan = document.createElement("span");
        completeSpan.classList.add("calendar-span-color");
        completeSpan.classList.add("calendar-key-complete");
        completeSpan.innerHTML = "7";

        calendarTaskContainer.appendChild(completeSpan);
    }
    cell.appendChild(calendarTaskContainer);
}

function changeMonth(shift){
    monthObject.monthIndex = (monthObject.monthIndex)+shift;
    const monthData = getMonthData(monthObject);

    const table = document.getElementById("calendar-table");
    while(table.firstChild){
        table.removeChild(table.firstChild)
    }
    generateCalendar(monthData);
}

export { initalizeCalendar }