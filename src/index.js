import TodoList from "./components/Day/TodoList";

import "./style/index.scss";

const body = document.querySelector("body");
const layout = document.createElement("div");
body.appendChild(layout);
layout.className = "layout";
const nav = document.createElement("nav");
layout.appendChild(nav);
nav.className = "top-nav";
nav.innerHTML = `
<button class="add-calender">+</button>
  <div class="calender-type">
    <button>Day</button>
    <button>Week</button>
    <button>Month</button>
    <button>Year</button>
  </div>
<input class="search-box" placeholder="search"/>
`;
const todoList = Object.create(TodoList);
todoList.constructor({
  className: "todo-list",
  title: "Today",
  target: layout,
  listArray: [1, 2, 3, 4, 5],
});
