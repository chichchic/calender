import WeekLine from "../components/Month/WeekLine";
import { monthName, getCalender } from "../fixture/caleder";
import { urlParser } from "../fixture/url-parser";

const Month = {
  constructor: function () {
    const params = urlParser();
    const {
      year = new Date().getFullYear(),
      month = new Date().getMonth(),
    } = params;
    const currentCalender = getCalender(year);
    this.view = document.createElement("section");
    this.view.className = "month-view";
    this.month = document.createElement("h1");
    this.view.appendChild(this.month);
    this.month.className = "month";
    this.month.innerText = `${monthName[month]} ${year}`;
    this.content = document.createElement("content");
    this.view.appendChild(this.content);
    this.content.className = "content";
    currentCalender[month].forEach((weekInfo) => {
      this.content.appendChild(
        Object.create(WeekLine).constructor({ weekStart: 2, weekInfo })
      );
    });
    }
    return this.view;
  },
};

export default Month;
