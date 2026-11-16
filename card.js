const profile = document.getElementById("profile");
const namee = document.getElementById("name");
const username = document.getElementById("username");
const bio = document.getElementById("bio");

const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const company = document.getElementById("company");
const userLocation = document.getElementById("location");
const createdAt = document.getElementById("created_at");

const link = document.getElementById("link");



function createCard(data) {

    profile.src = data.avatar_url;
    namee.textContent = data.name || data.login;
    username.textContent = data.login;
    bio.textContent = data.bio || "No bio available";

    repos.textContent = data.public_repos;
    followers.textContent = data.followers;
    following.textContent = data.following; 
    company.textContent =  `Company : ${(data.company )} || homeless ` 

    userLocation.textContent = data.location || "Location not specified";
    createdAt.textContent = ` Acc created at : ${new Date(data.created_at).toLocaleDateString()}`;




    link.href = data.html_url;

}
