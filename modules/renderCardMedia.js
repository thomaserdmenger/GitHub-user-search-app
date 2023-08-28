// Get DOM elements to render data from API
const userFullName = document.querySelector(".card-media-username");
const userLogin = document.querySelector(".card-media-address");
const userJoined = document.querySelector(".card-media-joined");
const userImage = document.querySelector(".card-media-image");

export default function renderCardMediaContainerContent(data) {
  userFullName.textContent = data.name;
  userLogin.textContent = `@${data.login}`;
  renderDate(data);
  userImage.setAttribute("src", `${data.avatar_url}`);
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
