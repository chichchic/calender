import Day from "../page/Day";
import Month from "../page/Month";

const routes = [
  {
    path: "/",
    component: Month,
    name: "home",
  },
  {
    path: "/month",
    component: Month,
    name: "month",
  },
  { path: "/date:date", component: Day, name: "date" },
];

export default routes;
