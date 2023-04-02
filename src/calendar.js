import { eachDayOfInterval } from "date-fns";
import { format } from "date-fns";
import { Chart } from 'chart.js/auto';

let monthArray = getMonthString(new Date);
let monthData = getMonthData(monthArray);

function getMonthString(date){
    const year = format(date, "yyyy")-0;
    const month = format(date, "L")-1;
    const day = 1;
    return([year, month, day]);
}

function getMonthData(monthArray){
    const monthDataFormatted = [];
    const monthData = eachDayOfInterval({
        start: new Date(monthArray[0], monthArray[1], monthArray[2]),
        end: new Date(monthArray[0], monthArray[1]+1, monthArray[2])
    })
    monthData.pop();
    monthData.forEach(date => {
        const year = format(date, "yyyy");
        const month = format(date, "LLL");
        const day = format(date, "d");
        const dayOf = format(date, "iii");
        monthDataFormatted.push([year, month, day, dayOf]);
    });
    return(monthDataFormatted)
}

function calendarTest(){
    console.log("test")

    console.log(monthArray)
    console.log(monthData)
    
    const ctx = document.getElementById('myChart');
    
    new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Yellow', 'Green', 'Orange', 'Pink'],
        datasets: [{
            data: [7, 5, 3, 5],
            backgroundColor: ["yellow", "green", "orange", "pink"],
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