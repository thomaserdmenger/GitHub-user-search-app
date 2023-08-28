import getData from "./modules/fetchData.js";
export let userNameInput = "";

// GLOBAL
const form = document.querySelector(".search-form");
const input = document.querySelector(".search-input");
const userBlog = document.querySelector(".card-links-blog");

// TODO: Groß- und Kleinschreibweise: beide sollen funktionieren

// Get userinput
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Check input vs. username
  userNameInput = input.value;

  if (userNameInput === "") return;

  getData();
});
