// Import modules
import { userNameInput } from "../script.js";
import renderCardMediaContainerContent from "./renderCardMedia.js";
import renderStats from "./renderStats.js";
import renderCardBio from "./renderCardBio.js";
import renderLinks from "./renderLinks.js";

const errorMessage = document.querySelector(".search-error-message");
const input = document.querySelector(".search-input");

// Define API URL
const GITHUB_API_URL = "https://api.github.com/users";

// Fetch data
export default async function getData() {
  try {
    const response = await fetch(`${GITHUB_API_URL}/${userNameInput}`);

    if (!response.ok) {
      throw new Error("Please enter valid GitHub user name");
    }

    const data = await response.json();

    if (userNameInput === data.login) {
      errorMessage.classList.remove("show");
      input.value = "";
      input.setAttribute("placeholder", "Search GitHub username…");

      renderCardMediaContainerContent(data);
      renderCardBio(data);
      renderStats(data);
      renderLinks(data);
    }
  } catch (error) {
    errorMessage.classList.add("show");
    input.value = "";
    input.setAttribute("placeholder", "");
  }
}
