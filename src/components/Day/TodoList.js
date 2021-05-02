import CheckItem from "./CheckItem";

const TodoList = {
  constructor: function (target, list = []) {
    this.content = document.createElement("div");
    target.appendChild(this.content);
    this.addButton = document.createElement("button");
    this.addButton.innerText = "+";
    this.addButton.addEventListener("click", this.addItem.bind(this));
    this.content.appendChild(this.addButton);
    this.list = list;
    this.list.forEach((title) => {
      const checkItem = Object.create(CheckItem);
      this.content.appendChild(checkItem.constructor(title));
    });
  },
  addItem: function () {
    const checkItem = Object.create(CheckItem);
    this.content.appendChild(checkItem.constructor());
    checkItem.focus();
  },
};

export default TodoList;
