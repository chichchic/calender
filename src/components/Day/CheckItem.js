const checkItem = {
  constructor: function ({ label }) {
    this.item = document.createElement("li");
    this.item.className = "check-item";
    this.item.addEventListener("click", (e) => {
      const { target } = e;
      if (target.tagName != "INPUT") {
        this.label.hidden = true;
        this.input.hidden = false;
        this.input.focus();
      }
    });
    this.checkbox = document.createElement("input");
    this.checkbox.addEventListener(
      "input",
      (e) => {
        if (e.target.checked) {
          this.label.classList.add("checked-item");
        } else {
          this.label.classList.remove("checked-item");
        }
      },
      false
    );
    this.checkbox.className = "checkbox";
    this.checkbox.type = "checkbox";
    this.item.appendChild(this.checkbox);
    this.itemLabel = document.createElement("span");
    this.item.appendChild(this.itemLabel);
    this.label = document.createElement("label");
    this.input = document.createElement("input");
    this.input.addEventListener("blur", (e) => {
      if (e.target.value) {
        this.input.hidden = true;
        this.setLabel(e.target.value);
        this.label.hidden = false;
      } else {
        this.destructor();
      }
    });
    this.input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.input.blur();
      }
    });
    this.itemLabel.appendChild(this.label);
    this.itemLabel.appendChild(this.input);
    this.item.classList.add("draggable");
    this.item.draggable = true;
    this.item.addEventListener("dragstart", () => {
      this.item.classList.add("dragging");
    });
    this.item.addEventListener("dragend", () => {
      this.item.classList.remove("dragging");
    });
    if (label === null) {
      this.label.hidden = true;
    } else {
      this.input.hidden = true;
      this.setLabel(label);
      this.input.value = label;
    }
    return this.item;
  },
  focus: function () {
    this.input.focus();
  },
  setLabel: function (label) {
    this.label.innerText = label;
  },
  destructor: function () {
    this.item.remove();
  },
};

export default checkItem;
