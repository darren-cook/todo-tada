import { eachDayOfInterval } from "date-fns";
import { format } from "date-fns";

const result = eachDayOfInterval({
    start: new Date(2023, 2, 1),
    end: new Date(2023, 3, 1)
})

function formatTest() {
    const test = format(result[2], "EEEE")
    console.log("test")
    console.log(test)
}

formatTest()

// console.log(result)

export { result }