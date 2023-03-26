import { eachDayOfInterval } from "date-fns";
import { format } from "date-fns";

let monthArray = getMonthString(new Date);
let monthData = getMonthData(monthArray);

function getMonthString(date){
    const year = format(date, "yyyy")-0;
    const month = format(date, "L") -1;
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
        monthDataFormatted.push([year, month, day]);
    });
    return(monthDataFormatted)
}

console.log(monthData);

monthArray[1] = monthArray[1]-1;

console.log(getMonthData(monthArray))