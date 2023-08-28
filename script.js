import getData from "./modules/fetchData.js";
export let userNameInput = "";

// GLOBAL
const form = document.querySelector(".search-form");
const input = document.querySelector(".search-input");

// Get userinput
form.addEventListener("submit", (e) => {
  e.preventDefault();
  userNameInput = input.value;

  if (userNameInput === "") return;

  getData();
});
