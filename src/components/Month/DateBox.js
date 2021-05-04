const DateBox = {
  constructor: function ({ isCurrentMonth, fulldate, date, list = [] }) {
    const content = document.createElement("article");
    content.dataset.date = fulldate;
    this.content = content;
    this.content.className = `date-box ${isCurrentMonth ? "current" : ""}`;
    this.list = list;
    this.date = date;
    this.render();
    return content;
  },
  render: function () {
    let list = "<ul>";
    for (let index = 0; index < 3 && index < this.list.length; index++) {
      list += `<li>${this.list[index]}</li>`;
    }
    list += "</ul>";
    this.content.innerHTML =
      `
    <h3 class="date">
      ${this.date}
    </h3>` +
      list +
      "</ul>";
    if (this.list.length > 3) {
      const more = document.createElement("p");
      more.className = "more";
      more.innerText = `${this.list.length - 3} more...`;
      this.content.appendChild(more);
    }
  },
};

export default DateBox;
