const headerModeContainer = document.querySelector(".header-mode-container");
const headerModeText = document.querySelector(".header-mode-text");
const headerModeIcon = document.querySelector(".header-mode-image");

export default function createHoverEffect() {
  headerModeContainer.addEventListener("mouseenter", () => {
    headerModeText.classList.add("header-mode-text--hover");
    headerModeIcon.classList.add("header-mode-image--hover");
  });

  headerModeContainer.addEventListener("mouseleave", () => {
    headerModeText.classList.remove("header-mode-text--hover");
    headerModeIcon.classList.remove("header-mode-image--hover");
  });
}
