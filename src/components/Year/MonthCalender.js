import { coverDateString } from "../../fixture/caleder";

const MonthCalender = {
  constructor: function ({ month, weekInfo }) {
    const monthName = [
      "",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const today = new Date();
    const todayDate = coverDateString(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    console.log(todayDate);
    this.article = document.createElement("article");
    this.article.className = "month-calender";
    this.article.innerHTML = weekInfo.reduce(
      (monthElement, week) => {
        return (
          monthElement +
          (week.reduce((acc, { date, isCurrentMonth }, index) => {
            return (
              acc +
              `<span class="${isCurrentMonth ? "currentMonth" : ""} ${
                todayDate === date ? "today" : ""
              }">${Number(date.slice(date.length - 2, date.length))}</span>`
            );
          }, '<div class="week">') +
            "</div>")
        );
      },
      `
      <h2 class="month-name">${monthName[month]}</h2>
      <div class="week day">
      <span>S</span>
      <span>M</span>
      <span>T</span>
      <span>W</span>
      <span>T</span>
      <span>F</span>
      <span>S</span>
    </div>`
    );
    return this.article;
  },
};

export default MonthCalender;
