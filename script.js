export let userNameInput = "";

import getData from "./modules/fetchData.js";
import createHoverEffect from "./modules/themeHoverEffect.js";

// GLOBAL
const form = document.querySelector(".search-form");
const input = document.querySelector(".search-input");

// Get userinput
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Check input vs. username
  userNameInput = input.value.toLowerCase();

  if (userNameInput === "") return;

  getData();
});

// Add hover state on mode toggle on header
createHoverEffect();

// temp

import {
  calculateSettingAsThemeString,
  localStorageTheme,
  systemSettingLight,
} from "./modules/themeSettingCalculate.js";

calculateSettingAsThemeString(localStorageTheme, systemSettingLight);
