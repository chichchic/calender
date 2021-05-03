import CheckItem from "./CheckItem";

const TodoList = {
  constructor: function ({ className, title, listArray = [] }) {
    this.content = document.createElement("article");
    this.content.className = className;
    this.title = document.createElement("h1");
    this.title.textContent = title;
    this.content.appendChild(this.title);
    this.addButton = document.createElement("button");
    this.addButton.className = "add-button";
    this.addButton.innerText = "+";
    this.addButton.addEventListener("click", (e) => {
      this.addItem();
    });
    this.content.appendChild(this.addButton);
    this.list = document.createElement("ul");
    this.content.appendChild(this.list);
    this.listArray = listArray;
    this.listArray.forEach((label) => {
      this.addItem(label);
    });
    if (this.listArray.length === 0) {
      this.addItem();
    }
    this.list.addEventListener("dragover", (e) => {
      e.preventDefault();
      const dragging = document.querySelector(".dragging");
      const draggableElement = [
        ...this.list.querySelectorAll(".draggable:not(.dragging)"),
      ];
      const target = e.target === this.list ? null : e.target;
      this.list.insertBefore(dragging, target);
    });
    return this.content;
  },
  addItem: function (label = null) {
    const checkItem = Object.create(CheckItem);
    const checkItemInstance = checkItem.constructor({
      label,
    });
    checkItemInstance.classList.add("draggable");
    checkItemInstance.draggable = true;
    checkItemInstance.addEventListener("dragstart", () => {
      checkItemInstance.classList.add("dragging");
    });
    checkItemInstance.addEventListener("dragend", () => {
      checkItemInstance.classList.remove("dragging");
    });
    this.list.appendChild(checkItemInstance);
    if (label === null) {
      checkItem.focus();
    }
  },
};

export default TodoList;
