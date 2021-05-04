import Day from "../page/Day";
import Month from "../page/Month";
import Year from "../page/Year";

const routes = [
  {
    path: "/",
    component: Month,
    name: "home",
  },
  { path: "/year", component: Year, name: "year" },
  {
    path: "/month",
    component: Month,
    name: "month",
  },
  { path: "/date:date", component: Day, name: "date" },
];

export default routes;
