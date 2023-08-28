const userRepos = document.querySelector(".card-stats-repos");
const userFollowers = document.querySelector(".card-stats-followers");
const userFollowing = document.querySelector(".card-stats-following");

export default function renderStats(data) {
  userRepos.textContent = data.public_repos;
  userFollowers.textContent = data.followers;
  userFollowing.textContent = data.following;
}
