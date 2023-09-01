import getData from "./modules/fetchData.js";
import createHoverEffect from "./modules/themeHoverEffect.js";
import { darkAttributes, lightAttributes } from "./modules/themeAttributes.js";

export let userNameInput = "";

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

/** Get DOM Elements */

/** Utility function to calculate the current theme setting.
 *  Look for a local storage value.
 *  Fall back to system setting.
 *  Fall back to light mode.
 */

function calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
}) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

/**
 *  Utility function to update the button text, button icon and aria-label
 */

function updateButton({ buttonEl, buttonLogo, isDark }) {
  const newCta = isDark ? "light" : "dark";
  buttonEl.setAttribute("aria-label", newCta);
  buttonEl.textContent = newCta;
  isDark
    ? buttonLogo.setAttribute("d", darkAttributes.d)
    : buttonLogo.setAttribute("d", lightAttributes.d);
}

/**
 * Utility function to update the theme setting on the html tag
 */

function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}

/**
 * On page load:
 */

/**
 * 1. Grab what we nee from the DOM and system settings on page load
 */

const button = document.querySelector("[data-theme-toggle]");
const buttonText = document.querySelector(".header-mode-button-text");
const buttonIcon = document.querySelector(".header-mode-image");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

/**
 * 2. Work out the current site setting
 */

let currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});

/**
 * 3. Update the theme setting and button text according to current settings
 */

updateButton({
  buttonEl: buttonText,
  buttonLogo: buttonIcon,
  isDark: currentThemeSetting === "dark",
});
updateThemeOnHtmlEl({ theme: currentThemeSetting });

/**
 * 4. Add an event listener to toggle the theme
 */

button.addEventListener("click", () => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButton({
    buttonEl: buttonText,
    buttonLogo: buttonIcon,
    isDark: newTheme === "dark",
  });
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
});
