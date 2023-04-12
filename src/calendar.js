import { format } from "date-fns";
import { eachDayOfInterval } from "date-fns";
import { compareAsc } from "date-fns";

const today = new Date;
let monthArray = getMonthArray(today);
let monthData = getMonthData(monthArray);

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
        const numOfYear = format(date, "L")
        // 3
        monthData.push([year, month, day, dayOfWeek, numOfWeek, numOfYear]);
    });
    return(monthData)
}

function calendarTest(){
    generateCalendar(monthData);
    }

function generateCalendar(monthData) {
    const table = document.getElementById("calendar-table");
    let count = 0;

    for(let week=0; week<6; week++){
        const row = document.createElement("tr");

        for(let day=0; day<7; day++){
            const cell = document.createElement("td");
            cell.id = `cell${count}`;

            const calendarDate = document.createElement("p");
            calendarDate.classList.add("calendar-date");
            cell.appendChild(calendarDate);

            const calendarTask = document.createElement("div");
            calendarTask.classList.add("calendar-task")
            cell.appendChild(calendarTask);

            row.appendChild(cell)

            count++;
        }

        table.appendChild(row);
    }

    fillCalendar(monthData);
}

function fillCalendar(monthData) {
    const calendarDates = document.querySelectorAll(".calendar-date");
    const calendarTasks = document.querySelectorAll(".calendar-task");
    const firstNumOfWeek = (monthData[0][4]);
    const todayArray = [format(today, "yyyy"), format(today, "L"), format(today, "d")];

    for(let i=firstNumOfWeek, j=0; j<monthData.length; i++, j++){
        const day = monthData[j][2];
        calendarDates[i].innerHTML = day;
     
        const compArray = [monthData[j][0], monthData[j][5], monthData[j][2]];
        const asc = compareAsc(new Date(todayArray[0], todayArray[1], todayArray[2]), new Date(compArray[0], compArray[1], compArray[2]));

        console.log(`Today = ${todayArray} - Comp = ${compArray} asc = ${asc}`)
    }

    // console.log(monthData)
}

export { calendarTest }

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