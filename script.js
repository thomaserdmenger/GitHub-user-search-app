// GLOBAL
const form = document.querySelector(".search-form");
const input = document.querySelector(".search-input");

const GITHUB_API = "https://api.github.com/users";
let userNameInput = "";

// Get side content
const userFullName = document.querySelector(".card-media-username");
const userLogin = document.querySelector(".card-media-address");
const userJoined = document.querySelector(".card-media-joined");

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
      console.log(true);
    }
  } catch (error) {
    alert(error.message);
  }
}

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
