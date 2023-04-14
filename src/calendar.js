import { format } from "date-fns";
import { eachDayOfInterval } from "date-fns";
import { eachWeekOfInterval } from "date-fns";
import { compareAsc } from "date-fns";

const today = new Date;
let monthArray = getMonthArray(today);

function initalizeCalendar(){
    const monthData = getMonthData(monthArray);
    generateCalendar(monthData);

    const calendarButtons = document.querySelectorAll(".calendar-button");
    calendarButtons.forEach(calendarButton => {
        calendarButton.addEventListener("click", function(){
            changeMonth(parseInt(calendarButton.dataset.shift));
        })
    })
}

function getMonthArray(date){
    const year = format(date, "yyyy")-0;
    const month = format(date, "L")-1;
    const day = 1;
    return([year, month, day]);
}

function getMonthData(monthArray){
    const monthData = [];
    const monthRange = eachDayOfInterval({
        start: new Date(monthArray[0], monthArray[1], monthArray[2]),
        end: new Date(monthArray[0], monthArray[1]+1, monthArray[2])
    })
    monthRange.pop();
    monthRange.forEach(date => {
        // Examples for "Wednesday March 15th, 2023"
        const year = format(date, "yyyy");
        // 2023
        const month = format(date, "LLL");
        // Mar
        const day = format(date, "d");
        // 15
        const dayOfWeek = format(date, "iii");
        // Wed
        const numOfWeek = format(date, "e")-1;
        // 3 (4-1)
        const numOfYear = format(date, "L")-1;
        // 2 (3-1)
        const monthFull = format(date, "LLLL");
        monthData.push([year, month, day, dayOfWeek, numOfWeek, numOfYear, monthFull]);
    });
    return(monthData)
}

function generateCalendar(monthData) {
    const weekCount = eachWeekOfInterval({
        start: new Date(monthData[0][0], monthData[0][5], monthData[0][2]),
        end: new Date(monthData[monthData.length-1][0], monthData[monthData.length-1][5], monthData[monthData.length-1][2])
    }).length

    const firstNumOfWeek = (monthData[0][4]);
    const offset = (firstNumOfWeek-1)*-1;

    const table = document.getElementById("calendar-table");
    let date = offset;

    for(let week=0; week<weekCount; week++){
        const row = document.createElement("tr");

        for(let day=0; day<7; day++){
            const cell = document.createElement("td");
            cell.id = `${monthData[0][0]},${monthData[0][1]},${date}`;

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
    calendarMonth.innerHTML = monthData[0][6];
    calendarYear.innerHTML = monthData[0][0]
}
function fillCell(cell, dayData){
    const calendarDate = document.createElement("p");
    calendarDate.classList.add("calendar-date");
    calendarDate.innerHTML = dayData[2]
    cell.appendChild(calendarDate);

    const calendarTaskContainer = document.createElement("div");
    calendarTaskContainer.classList.add("calendar-task-container");

    const todayArray = [format(today, "yyyy"), format(today, "L")-1, format(today, "d")];
    const compArray = [dayData[0], dayData[5], dayData[2]];
    const dateComparison = compareAsc(
        new Date(todayArray[0], todayArray[1], todayArray[2]), 
        new Date(compArray[0], compArray[1], compArray[2])
    );

    if(dateComparison===0){
        calendarDate.classList.add("calendar-today");

        const todoSpan = document.createElement("span");
        todoSpan.classList.add("calendar-span-color");
        todoSpan.classList.add("calendar-key-todo");
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
    monthArray[1] = monthArray[1]+shift;
    const monthData = getMonthData(monthArray);

    const table = document.getElementById("calendar-table");
    while(table.firstChild){
        table.removeChild(table.firstChild)
    }
    generateCalendar(monthData);
}

export { initalizeCalendar }

// console.log(monthData);

// monthArray[1] = monthArray[1]-1;

// console.log(getMonthData(monthArray))

// monthArray[1] = monthArray[1]-1;

// console.log(getMonthData(monthArray))

// monthArray[1] = monthArray[1]-1;

// console.log(getMonthData(monthArray))

// monthArray[1] = monthArray[1]-1;

// console.log(getMonthData(monthArray))

// monthArray[1] = monthArray[1]-1;

// console.log(getMonthData(monthArray))