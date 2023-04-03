import { eachDayOfInterval } from "date-fns";
import { format } from "date-fns";
import { Chart } from 'chart.js/auto';

let monthArray = getMonthArray(new Date);
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
        const year = format(date, "yyyy");
        const month = format(date, "LLL");
        const day = format(date, "d");
        const dayOfWeek = format(date, "iii");
        const numOfWeek = format(date, "e")-1;
        monthData.push([year, month, day, dayOfWeek, numOfWeek]);
    });
    return(monthData)
}

function calendarTest(){
    generateTable(monthData);
    }

function generateTable(monthData) {
    const table = document.getElementById("calendar-table");
    let count = 0;

    for(let week=0; week<6; week++){
        const row = document.createElement("tr");

        for(let day=0; day<7; day++){
            const cell = document.createElement("td");
            cell.id = `cell${count}`;

            const date = document.createElement("p");
            date.classList.add("chart-date");
            cell.appendChild(date);

            const chartContainer = document.createElement("div");
            chartContainer.classList.add("chart-container");
            const chartCanvas = document.createElement("canvas");
            chartCanvas.classList.add("chart-canvas");
            chartContainer.appendChild(chartCanvas);
            cell.appendChild(chartContainer);

            const total = document.createElement("p");
            total.classList.add("chart-total");
            cell.appendChild(total);

            row.appendChild(cell)

            count++;
        }

        table.appendChild(row);
    }

    fillTable(monthData);
}

function fillTable(monthData) {
    const chartDates = document.querySelectorAll(".chart-date");
    const chartCanvases = document.querySelectorAll(".chart-canvas");
    const firstNumOfWeek = (monthData[0][4]);

    for(let i=firstNumOfWeek, j=0; j<monthData.length; i++, j++){
        chartDates[i].innerHTML = monthData[j][2];
        chartCanvases[i].id = `chart-canvas${j}`;

        const ctx = document.getElementById(`chart-canvas${j}`);

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Complete', 'Overdue', 'High Priority', 'Regular Priority', 'Recurring'],
                datasets: [{
                    data: [7, 5, 3, 5, 2],
                    backgroundColor: ["green", "red", "orange", "yellow", "cyan"],
                    borderWidth: .5,
                    cutout: '70%',
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        enabled: false,
                    },
                    legend: {
                        display: false,
                    },
                }
            }
            });
    }

    console.log(monthData)
}

// const chartFactory = () => {

// }

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