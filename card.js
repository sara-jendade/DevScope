const profile = document.getElementById("profile");
const namee = document.getElementById("name");
const username = document.getElementById("username");
const bio = document.getElementById("bio");

const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const company = document.getElementById("company");

const link = document.getElementById("link");



function createCard(data) {

    profile.src = data.avatar_url;
    namee.textContent = data.name || data.login;
    username.textContent = data.login;
    bio.textContent = data.bio || "No bio available";

    repos.textContent = data.public_repos;
    followers.textContent = data.followers;
    following.textContent = data.following;
    company.textContent = data.company ;

    


    link.href = data.html_url;

}
