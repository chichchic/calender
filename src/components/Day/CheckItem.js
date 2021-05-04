const checkItem = {
  constructor: function ({ label }) {
    this.item = document.createElement("li");
    this.item.className = "check-item";
    this.item.addEventListener("click", this._itemClick.bind(this));
    this.checkbox = document.createElement("input");
    this.checkbox.addEventListener("input", this._checkboxInput.bind(this));
    this.checkbox.className = "checkbox";
    this.checkbox.type = "checkbox";
    this.item.appendChild(this.checkbox);
    this.itemLabel = document.createElement("span");
    this.item.appendChild(this.itemLabel);
    this.label = document.createElement("label");
    this.input = document.createElement("input");
    this.input.addEventListener("blur", this._inputBlur.bind(this));
    this.input.addEventListener("keydown", this._inputEnter.bind(this));
    this.itemLabel.appendChild(this.label);
    this.itemLabel.appendChild(this.input);
    if (label === null) {
      this._toggleEdit(true);
    } else {
      this._toggleEdit(false);
      this._setLabel(label);
      this.input.value = label;
    }
    return this.item;
  },
  focus: function () {
    this.input.focus();
  },
  _toggleEdit: function (status) {
    this.label.hidden = status;
    this.input.hidden = !status;
    if (status) {
      this.focus();
    }
  },
  _itemClick: function (e) {
    const { target } = e;
    if (target.tagName != "INPUT") {
      this._toggleEdit(true);
    }
  },
  _checkboxInput: function (e) {
    if (e.target.checked) {
      this.label.classList.add("checked-item");
    } else {
      this.label.classList.remove("checked-item");
    }
  },
  _inputBlur: function (e) {
    if (e.target.value) {
      this._setLabel(e.target.value);
      this._toggleEdit(false);
    } else {
      this._destructor();
    }
  },
  _inputEnter: function (e) {
    if (e.key === "Enter") {
      this.input.blur();
    }
  },
  _setLabel: function (label) {
    this.label.innerText = label;
  },
  _destructor: function () {
    this.item.remove();
  },
};

export default checkItem;
