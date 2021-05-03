import WeekLine from "../components/Month/WeekLine";

const Month = {
  constructor: function () {
    this.view = document.createElement("section");
    this.view.className = "month-view";
    this.month = document.createElement("h1");
    this.view.appendChild(this.month);
    this.month.className = "month";
    this.month.innerText = "May 2021";
    this.content = document.createElement("content");
    this.view.appendChild(this.content);
    this.content.className = "content";
    for (let i = 0; i < 6; i++) {
      this.content.appendChild(
        Object.create(WeekLine).constructor({ weekStart: 2 + i * 7 })
      );
    }
    return this.view;
  },
};

export default Month;
