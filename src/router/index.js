import routes from "./routes";

const router = {
  constructor: function ({ target }) {
    this.target = target;
  },
  _render: function (name) {
    this.target.innerHTML = "";
    const currentPath = this._hashParsing(window.location.hash);
    const currentComponent = routes.find(({ path }) => path === currentPath)
      .component;
    const currentInstance = Object.create(currentComponent).constructor();
    currentComponent.router = this;
    document.querySelector(".selected")?.classList.remove("selected");
    document.querySelector(`.nav-${name}`)?.classList.add("selected");
    this.target.appendChild(currentInstance);
  },
  _hashParsing: function (hash) {
    const paramIndex = [...hash].findIndex((val) => val === "?");
    if (paramIndex < 0) {
      return hash.substring(1);
    }
    return hash.substring(1, paramIndex);
  },
  push: function ({ name, params }) {
    let paramStr = ``;
    for (const param in params) {
      const prefix = paramStr.length ? "&" : "?";
      paramStr += `${prefix}${param}=${params[param]}`;
    }
    const routePath = routes.find((route) => route.name === name).path;
    window.history.pushState(
      {},
      name,
      window.location.origin + `#${routePath}${paramStr}`
    );
    this._render(name);
  },
};

export default router;
