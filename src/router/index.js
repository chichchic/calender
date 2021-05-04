import routes from "./routes";

const router = {
  constructor: function ({ target }) {
    this.target = target;
  },
  _render: function () {
    this.target.innerHTML = "";
    const currentPath = this._hashParsing(window.location.hash);
    const currentComponent = routes.find(({ path }) => path === currentPath)
      .component;
    const currentInstance = Object.create(currentComponent).constructor();
    currentComponent.router = this;
    this.target.appendChild(currentInstance);
  },
  _hashParsing: function (hash) {
    const paramIndex = [...hash].findIndex((val) => val === "?");
    if (paramIndex < 0) {
      return hash.substring(1);
    }
    return hash.substring(1, paramIndex);
  },
  push: function ({ name, path, params }) {
    let paramStr = ``;
    let routePath = path;
    for (const param in params) {
      const prefix = paramStr.length ? "&" : "?";
      paramStr += `${prefix}${param}:${params[param]}`;
    }
    if (name) {
      routePath = routes.find((route) => route.name === name).path;
    }
    window.history.pushState(
      {},
      path,
      window.location.origin + `#${routePath}${paramStr}`
    );
    this._render();
  },
};

export default router;
