const DateBox = {
  constructor: function ({ date, list = [] }) {
    const content = document.createElement("article");
    this.content = content;
    this.content.className = "date-box";
    this.list = list;
    this.date = date;
    this.render();
    return content;
  },
  render: function () {
    const list = this.list.reduce((acc, cur) => {
      return acc + `<li>${cur}</li>`;
    }, "<ul>");
    this.content.innerHTML =
      `
    <h3 class="date">
      ${this.date}
    </h3>` +
      list +
      "</ul>";
  },
};

export default DateBox;
