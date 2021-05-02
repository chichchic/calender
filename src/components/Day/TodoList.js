import CheckItem from "./CheckItem";

const TodoList = {
  constructor: function ({ className, title, target, listArray = [] }) {
    this.content = document.createElement("article");
    this.content.className = className;
    target.appendChild(this.content);
    this.title = document.createElement("h1");
    this.title.textContent = title;
    this.content.appendChild(this.title);
    this.addButton = document.createElement("button");
    this.addButton.className = "add-button";
    this.addButton.innerText = "+";
    this.addButton.addEventListener("click", () => {
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
  },
  addItem: function (label = null) {
    const checkItem = Object.create(CheckItem);
    this.list.appendChild(
      checkItem.constructor({
        label,
        checkboxInputEvent: function (e) {
          if (e.target.checked) {
            this.label.style.textDecoration = "line-through";
          } else {
            this.label.style.textDecoration = "none";
          }
        },
        inputBlurEvent: function (e) {
          if (e.target.value) {
            this.input.hidden = true;
            this.setLabel(e.target.value);
            this.label.hidden = false;
          } else {
            this.destructor();
          }
        },
      })
    );
    if (label === null) {
      checkItem.focus();
    }
  },
};

export default TodoList;
