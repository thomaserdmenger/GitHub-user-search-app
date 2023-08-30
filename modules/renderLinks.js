const userLocation = document.querySelector(".card-links-location");
const userBlog = document.querySelector(".card-links-blog");
const userTwitter = document.querySelector(".card-links-twitter");
const userGithub = document.querySelector(".card-links-github");

const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/";
const TWITTER_URL = "https://twitter.com/";
const GITHUB_URL = "https://github.com/";

export default function renderLinks(data) {
  renderLocation(data);
  renderBlog(data);
  renderTwitter(data);
  renderGitHub(data);
}

function renderLocation(data) {
  userLocation.setAttribute("role", "link");

  if (data.location === null) {
    userLocation.removeAttribute("href");
    userLocation.textContent = "Not Available";
    userLocation.setAttribute("aria-disabled", "true");
    userLocation.classList.add("unavailable");
  } else {
    userLocation.textContent = data.location;
    userLocation.setAttribute("href", `${GOOGLE_MAPS_URL}${data.location}`);
    userLocation.setAttribute("aria-disabled", "false");
    userLocation.classList.remove("unavailable");
  }
}

function renderBlog(data) {
  userBlog.setAttribute("role", "link");

  if (data.blog !== "") {
    userBlog.setAttribute("aria-disabled", "false");

    updateURL(data);
    userBlog.classList.remove("unavailable");
  } else {
    userBlog.removeAttribute("href");
    userBlog.textContent = "Not Available";
    userBlog.setAttribute("aria-disabled", "true");
    userBlog.classList.add("unavailable");
  }
}

function updateURL(data) {
  if (data.blog.match("https://")) {
    userBlog.setAttribute("href", data.blog);
  } else {
    userBlog.setAttribute("href", `https://${data.blog}`);
  }
}

function renderTwitter(data) {
  userTwitter.setAttribute("role", "link");

  if (data.twitter_username === null) {
    userTwitter.removeAttribute("href");
    userTwitter.textContent = "Not Available";
    userTwitter.setAttribute("aria-disabled", "true");
    userTwitter.classList.add("unavailable");
  } else {
    userTwitter.textContent = `@${data.twitter_username}`;
    userTwitter.setAttribute("href", `${TWITTER_URL}${data.twitter_username}`);
    userTwitter.setAttribute("aria-disabled", "false");
    userTwitter.classList.remove("unavailable");
  }
}

function renderGitHub(data) {
  userGithub.setAttribute("role", "link");
  userGithub.setAttribute("aria-disabled", "false");
  userGithub.setAttribute("href", `${GITHUB_URL}/${data.login}`);
}
