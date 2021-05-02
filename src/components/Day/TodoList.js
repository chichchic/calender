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
      const item = Object.create(CheckItem);
      item.constructor(this.content, title);
    });
  },
  addItem: function (title) {
    const item = Object.create(CheckItem);
    item.append(this.content, title);
    this.list.push(item);
  },
};

export default TodoList;
