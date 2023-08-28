const userBio = document.querySelector(".card-description");

export default function renderCardBio(data) {
  userBio.textContent = data.bio;
}
