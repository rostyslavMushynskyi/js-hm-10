import "./styles.css";
import menu from "./data/menu.json";
import menuTemplate from "./partials/menu.hbs";

const refs = {
  body: document.querySelector("body"),
  themeSwitch: document.querySelector("#theme-switch-toggle"),
  menu: document.querySelector(".js-menu"),
};

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

function testH() {
  console.log(menu.map(menuTemplate));
}

testH();

const html = menu.map(menuTemplate).join("");

function onThemeSwitch(e) {
  if (e.target.checked) {
    refs.body.classList.add("dark-theme");
    refs.body.classList.remove("light-theme");
    localStorage.setItem("theme", Theme.DARK);
  } else {
    refs.body.classList.add("light-theme");
    refs.body.classList.remove("dark-theme");
    localStorage.setItem("theme", Theme.LIGHT);
  }
}

function setTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === Theme.DARK) {
    refs.body.classList.add("dark-theme");
    refs.themeSwitch.checked = true;
  } else {
    refs.body.classList.add("light-theme");
  }
}

setTheme();
refs.themeSwitch.addEventListener("change", onThemeSwitch);
refs.menu.insertAdjacentHTML("afterbegin", html);
