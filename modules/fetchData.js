// Import modules
import { userNameInput } from "../script.js";
import renderCardMediaContainerContent from "./renderCardMedia.js";
import renderStats from "./renderStats.js";
import renderCardBio from "./renderCardBio.js";
import renderLinks from "./renderLinks.js";

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
      renderCardMediaContainerContent(data);
      renderCardBio(data);
      renderStats(data);
      renderLinks(data);
    }
  } catch (error) {
    alert(error.message);
  }
}
