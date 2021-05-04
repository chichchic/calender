import MonthCalender from "../components/Year/MonthCalender";
import { getCalender } from "../fixture/caleder";

const Year = {
  constructor: function () {
    const year = 2021;
    this.view = document.createElement("section");
    this.view.className = "year-view";
    const yearTitle = document.createElement("h3");
    yearTitle.className = "year-title";
    yearTitle.textContent = year;
    this.view.appendChild(yearTitle);
    const yearCalender = getCalender(year);
    for (const month in yearCalender) {
      const MonthInstance = Object.create(MonthCalender).constructor({
        month,
        weekInfo: yearCalender[month],
      });
      this.view.appendChild(MonthInstance);
    }
    return this.view;
  },
};

export default Year;
