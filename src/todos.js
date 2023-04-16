import { format } from "date-fns";
import { compareAsc } from "date-fns";

import { getDayArray } from "./date-functions";

const today = new Date;
let dayArray = getDayArray(today);