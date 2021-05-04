import DateBox from "./DateBox";

const WeekLine = {
  constructor: function ({ weekInfo }) {
    this.weekInfo = weekInfo;
    this.content = document.createElement("article");
    this.content.className = "week-line";
    this.render();
    return this.content;
  },
  render: function () {
    this.weekInfo.forEach(({ isCurrentMonth, date }) => {
      this.content.appendChild(
        Object.create(DateBox).constructor({
          isCurrentMonth,
          fulldate: date,
          date: Number(date.slice(date.length - 2)),
          list: ["할일 1", "할일 2", "할일 2", "할일 2", "할일 2", "할일 2"],
        })
      );
    });
  },
};

export default WeekLine;
