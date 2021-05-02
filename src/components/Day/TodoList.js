import CheckItem from "./CheckItem";

const TodoList = {
  constructor: function (target, list = []) {
    this.content = document.createElement("div");
    target.appendChild(this.content);
    this.addButton = document.createElement("button");
    this.addButton.innerText = "+";
    this.addButton.addEventListener("click", () => {
      this.addItem();
    });
    this.content.appendChild(this.addButton);
    this.content.appendChild(document.createElement("hr"));
    this.list = list;
    this.list.forEach((label) => {
      this.addItem(label);
    });
  },
  addItem: function (label = null) {
    const checkItem = Object.create(CheckItem);
    const hr = document.createElement("hr");
    this.content.appendChild(
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
            hr.remove();
          }
        },
      })
    );
    this.content.appendChild(hr);
    if (label === null) {
      checkItem.focus();
    }
  },
};

export default TodoList;
