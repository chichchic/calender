import TodoList from "../components/Day/TodoList";
import { monthName } from "../fixture/caleder";
import { urlParser } from "../fixture/url-parser";

const Day = {
  constructor: function () {
    const params = urlParser();
    const {
      year = new Date().getFullYear(),
      month = new Date().getMonth() + 1,
      date = new Date().getDate(),
    } = params;
    this.view = document.createElement("section");
    this.view.className = "day-view";
    this.date = document.createElement("h1");
    this.date.className = "date";
    this.date.innerText = `${monthName[month]} ${date} ${year}`;
    this.view.appendChild(this.date);
    const todoList = Object.create(TodoList).constructor({
      className: "todo-list",
      title: "Today",
      listArray: [1, 2, 3, 4, 5],
    });
    this.view.appendChild(todoList);
    return this.view;
  },
};

export default Day;
