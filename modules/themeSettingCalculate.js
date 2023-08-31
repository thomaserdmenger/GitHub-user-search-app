// Calculate theme setting on page load (Preference Cascade)

// Get theme preference from local storage
export const localStorageTheme = localStorage.getItem("theme");

// Detect user system settings in JavaScript
export const systemSettingLight = window.matchMedia(
  "(prefers-color-scheme: light)"
);

// console.log(systemSettingLight);
// MediaQueryList {media: '(prefers-color-scheme: light)', matches: true, onchange: null}

// Calculate theme setting
export function calculateSettingAsThemeString(
  localStorageTheme,
  systemSettingLight
) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingLight.matches === true) {
    return "light";
  }

  return "dark";
}

let currentThemeSetting = calculateSettingAsThemeString(
  localStorageTheme,
  systemSettingLight
);

export default currentThemeSetting;

// Toggle theme on click
import { darkAttributes, lightAttributes } from "./themeAttributes.js";

const button = document.querySelector("[data-theme-toggle]");
const buttonText = document.querySelector(".header-mode-button-text");
const buttonIcon = document.querySelector(".header-mode-image");
const html = document.querySelector("html");

export function themeSwitchOnClick() {
  button.addEventListener("click", () => {
    // Calculate the new theme as a string
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

    // Update the button text
    const newCta = newTheme === "dark" ? "light" : "dark";
    buttonText.innerText = newCta;

    // aria-label for sun/moon icons
    button.setAttribute("aria-label", newCta);

    // Update the button icon
    newTheme === "dark"
      ? buttonIcon.setAttribute("d", darkAttributes.d)
      : buttonIcon.setAttribute("d", lightAttributes.d);

    // Toggle theme
    newTheme === "dark"
      ? html.setAttribute("data-theme", newTheme)
      : html.setAttribute("data-theme", newTheme);

    // update in local storage
    localStorage.setItem("theme", newTheme);

    // Update the currentThemeSetting in memory
    currentThemeSetting = newTheme;
  });
}
