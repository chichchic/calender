import MonthCalender from "../components/Year/MonthCalender";
import { getCalender } from "../fixture/caleder";
import { urlParser } from "../fixture/url-parser";

const Year = {
  constructor: function () {
    const params = urlParser();
    const { year = new Date().getFullYear() } = params;
    this.view = document.createElement("section");
    this.view.className = "year-view";
    const controller = document.createElement("div");
    controller.className = "controller";
    this.view.appendChild(controller);
    this.yearTitle = document.createElement("h3");
    this.yearTitle.className = "year-title";
    const prevButton = document.createElement("button");
    prevButton.addEventListener("click", (e) => {
      this._render(this.year - 1);
    });
    prevButton.innerHTML = "&minus;";
    const nextButton = document.createElement("button");
    nextButton.addEventListener("click", (e) => {
      this._render(this.year + 1);
    });
    nextButton.innerHTML = "&plus;";
    controller.appendChild(this.yearTitle);
    controller.appendChild(prevButton);
    controller.appendChild(nextButton);
    this.calenderView = document.createElement("article");
    this.calenderView.className = "calender-view";
    this.view.appendChild(this.calenderView);
    this._render(year);
    return this.view;
  },
  _render: function (year) {
    this.year = year;
    this._makeCalenderView(this.calenderView);
    this.yearTitle.innerText = this.year;
  },
  _makeCalenderView: function () {
    const yearCalender = getCalender(this.year);
    this.calenderView.innerHTML = "";
    for (const month in yearCalender) {
      const MonthInstance = Object.create(MonthCalender).constructor({
        month,
        weekInfo: yearCalender[month],
      });
      MonthInstance.addEventListener("click", (e) => {
        this.router.push({ name: "month", params: { year: this.year, month } });
      });

      this.calenderView.appendChild(MonthInstance);
    }
  },
};

export default Year;
