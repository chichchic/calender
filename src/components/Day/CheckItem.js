const checkItem = {
  _create: function () {
    this.item = document.createElement("div");
    this.checkbox = document.createElement("input");
    this.checkbox.type = "checkbox";
    this.item.appendChild(this.checkbox);
    this.itemLabel = document.createElement("span");
    this.item.appendChild(this.itemLabel);
    this.label = document.createElement("label");
    this.input = document.createElement("input");
    this.itemLabel.appendChild(this.label);
    this.itemLabel.appendChild(this.input);
    this.checkbox.addEventListener("input", this.checkboxInputEvent.bind(this));
    this.label.addEventListener("click", this.labelClickEvent.bind(this));
    this.input.addEventListener("blur", this.inputBlurEvent.bind(this));
  },
  constructor: function (label) {
    this._create();
    if (label === undefined) {
      this.label.hidden = true;
    } else {
      this.input.hidden = true;
      this.setLabel(label);
    }
    return this.item;
  },
  focus: function () {
    this.input.focus();
  },
  setLabel: function (label) {
    this.label.innerText = label;
  },
  setLabelStrikethrough: function (status) {
    if (status) {
      this.label.style.textDecoration = "line-through";
    } else {
      this.label.style.textDecoration = "none";
    }
  },
  getChecked: function () {
    return this.checkbox.checked;
  },
  checkboxInputEvent: function (e) {
    this.setLabelStrikethrough(e.target.checked);
  },
  labelClickEvent: function (e) {
    this.label.hidden = true;
    this.input.hidden = false;
    this.input.focus();
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
  destructor: function () {
    this.item.remove();
  },
};

export default checkItem;
