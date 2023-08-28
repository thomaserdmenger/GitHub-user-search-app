// GLOBAL
const form = document.querySelector(".search-form");
const input = document.querySelector(".search-input");

const GITHUB_API = "https://api.github.com/users";
let gitHubUser = "";

// Get userinput
form.addEventListener("submit", (e) => {
  e.preventDefault();
  gitHubUser = input.value;

  if (input.value === "") return;

  getData();
});

async function getData() {
  const response = await fetch(`${GITHUB_API}/${gitHubUser}`);
  const data = await response.json();
  console.log(data.name);
}

// Get side content
// const userFullName = document.querySelector(".card-media-username");
// const userLogin = document.querySelector(".card-media-address");
// const userJoined = document.querySelector(".card-media-joined");

// GET DATA
// const getUser = async () => {
//   const response = await fetch(`https://api.github.com/users/thomaserdmenger`);
//   const data = await response.json();

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const inputName = getSearchInput();
//     const userName = data.login;

//     if (inputName === userName) {
//       renderCardContent(data);
//     } else {
//       // console.log(false);
//     }
//   });
// };

// function getSearchInput() {
//   const username = input.value;
//   return username;
// }

// function renderCardContent(data) {
//   userFullName.textContent = data.name;
//   userLogin.textContent = `@${data.login}`;
//   renderDate(data);
// }

// function renderDate(data) {
//   const date = new Date(data.created_at);
//   const year = date.getFullYear();

//   const monthNames = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   const month = monthNames[date.getMonth()];
//   const day = date.getDate();

//   userJoined.textContent = `Joined ${day} ${month} ${year}`;
// }

// getUser();
