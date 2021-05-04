import router from "./router";
import routerObject from "./router";

import "./style/index.scss";

const body = document.querySelector("body");
const layout = document.createElement("div");
body.appendChild(layout);
layout.className = "layout";
const nav = document.createElement("nav");
layout.appendChild(nav);
nav.className = "top-nav";
// <button>Week</button>
nav.innerHTML = `
<button class="add-calender">+</button>
  <div class="calender-type">
    <button data-route="/day">Day</button>
    <button data-route="/month">Month</button>
    <button data-route="/year">Year</button>
  </div>
<input class="search-box" placeholder="search"/>
`;
const main = document.createElement("main");
layout.appendChild(main);

const roueter = Object.create(routerObject);
router.constructor({ target: main });
router.push({ path: "/" });

nav.querySelector(".calender-type").addEventListener("click", (e) => {
  if (e.target.dataset.route) {
    router.push({ path: e.target.dataset.route });
  }
});
