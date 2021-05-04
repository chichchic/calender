import router from "./router";
import routerObject from "./router";
import { urlParser, getName } from "./fixture/url-parser";

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
    <button data-route="date" class="nav-date">Day</button>
    <button data-route="month" class="nav-month">Month</button>
    <button data-route="year" class="nav-year">Year</button>
  </div>
<input class="search-box" placeholder="search"/>
`;
const main = document.createElement("main");
layout.appendChild(main);

const roueter = Object.create(routerObject);
router.constructor({ target: main });
window.addEventListener("hashchange", (e) => {
  const name = getName();
  const params = urlParser();
  router.push({ name, params });
});
router.push({ name: "date" });

nav.querySelector(".calender-type").addEventListener("click", (e) => {
  if (e.target.dataset.route) {
    router.push({ name: e.target.dataset.route });
  }
});
