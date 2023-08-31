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
