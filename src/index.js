import Day from "./page/Day";
import Month from "./page/Month";

import "./style/index.scss";

const body = document.querySelector("body");
const layout = document.createElement("div");
body.appendChild(layout);
layout.className = "layout";
const nav = document.createElement("nav");
layout.appendChild(nav);
nav.className = "top-nav";
nav.innerHTML = `
<button class="add-calender">+</button>
  <div class="calender-type">
    <button>Day</button>
    <button>Week</button>
    <button>Month</button>
    <button>Year</button>
  </div>
<input class="search-box" placeholder="search"/>
`;
// layout.appendChild(
//   Object.create(Day).constructor({ date: new Date().toDateString() })
// );
layout.appendChild(Object.create(Month).constructor());
