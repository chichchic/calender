import TodoList from "../components/Day/TodoList";

const Day = {
  constructor: function ({ date }) {
    this.view = document.createElement("section");
    this.view.className = "day-view";
    this.date = document.createElement("h1");
    this.date.className = "date";
    this.date.innerText = date;
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
