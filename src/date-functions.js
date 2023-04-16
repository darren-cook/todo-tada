import { format } from "date-fns";

const dayFactory = (date) => {
    const year = format(date, "yyyy")-0;
    const monthIndex = format(date, "L")-1;
    const day = format(date, "d")-0;
    return {year, monthIndex, day};
}

const monthFactory = (date) => {
    const year = format(date, "yyyy")-0;
    const monthIndex = format(date, "L")-1;
    const day = 1;
    return{year, monthIndex, day};
}

export { dayFactory, monthFactory }