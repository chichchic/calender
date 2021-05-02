const checkItem = {
  _create: function () {
    this.item = document.createElement("li");
    this.checkbox = document.createElement("input");
    this.checkbox.type = "checkbox";
    this.item.appendChild(this.checkbox);
    this.itemLabel = document.createElement("span");
    this.item.appendChild(this.itemLabel);
    this.label = document.createElement("label");
    this.input = document.createElement("input");
    this.input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.input.blur();
      }
    });
    this.itemLabel.appendChild(this.label);
    this.itemLabel.appendChild(this.input);
    this.label.addEventListener("click", (e) => {
      this.label.hidden = true;
      this.input.hidden = false;
      this.input.focus();
    });
  },
  constructor: function ({
    label,
    checkboxInputEvent,
    labelClickEvent,
    inputBlurEvent,
  }) {
    this._create();
    if (checkboxInputEvent) {
      this.checkbox.addEventListener("input", checkboxInputEvent.bind(this));
    }
    if (inputBlurEvent) {
      this.input.addEventListener("blur", inputBlurEvent.bind(this));
    }
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
