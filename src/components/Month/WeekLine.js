import DateBox from "./DateBox";

const WeekLine = {
  constructor: function ({ weekStart }) {
    this.content = document.createElement("article");
    this.content.className = "week-line";
    this.weekStart = weekStart;
    this.render();
    return this.content;
  },
  render: function () {
    for (let date = this.weekStart; date < this.weekStart + 7; date++) {
      this.content.appendChild(
        Object.create(DateBox).constructor({
          date,
          list: ["할일 1", "할일 2", "할일 2", "할일 2", "할일 2", "할일 2"],
        })
      );
    }
  },
};

export default WeekLine;
