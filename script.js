// GLOBAL
const form = document.querySelector(".search-form");
const input = document.querySelector(".search-input");

const GITHUB_API = "https://api.github.com/users";
let userNameInput = "";

// Get side content
const userFullName = document.querySelector(".card-media-username");
const userLogin = document.querySelector(".card-media-address");
const userJoined = document.querySelector(".card-media-joined");
const userImage = document.querySelector(".card-media-image");

// Get userinput
form.addEventListener("submit", (e) => {
  e.preventDefault();
  userNameInput = input.value;

  if (userNameInput === "") return;

  getData();
});

// Fetch data
async function getData() {
  try {
    const response = await fetch(`${GITHUB_API}/${userNameInput}`);

    if (!response.ok) {
      throw new Error("Please enter valid GitHub user name");
    }

    const data = await response.json();

    if (userNameInput === data.login) {
      renderCardMediaContainerContent(data);
    }
  } catch (error) {
    alert(error.message);
  }
}

function renderCardMediaContainerContent(data) {
  userFullName.textContent = data.name;
  userLogin.textContent = `@${data.login}`;
  renderDate(data);
  userImage.setAttribute("src", `${data.avatar_url}`);
  // renderImage(data);
}

function renderDate(data) {
  const date = new Date(data.created_at);
  const year = date.getFullYear();

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = monthNames[date.getMonth()];
  const day = date.getDate();

  userJoined.textContent = `Joined ${day} ${month} ${year}`;
}

// function renderImage(data) {
//   userImage.setAttribute("src", `${data.avatar_url}`);
// }
