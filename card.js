
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
const save = document.getElementById("save");

const API_URL = "https://6af72925e844c7ff741c22d2.mockapi.io/github/candidates";


async function saveCandidate(data) {

    // Vérifier les candidats déjà enregistrés
    const checkResponse = await fetch(API_URL);

    if (!checkResponse.ok) {
        throw new Error("Failed to check candidates");
    }

    const candidates = await checkResponse.json();

    // Vérifier si le username existe déjà
    const alreadySaved = candidates.some(function(candidate) {
        return candidate.username.toLowerCase() === data.login.toLowerCase();
    });

    if (alreadySaved) {
        return false;
    }

    const candidate = {
        username: data.login,
        name: data.name || data.login,
        avatar_url: data.avatar_url,
        bio: data.bio,
        html_url: data.html_url
    };

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(candidate)
    });

    if (!response.ok) {
        throw new Error("Failed to save candidate");
    }

    return true;
}


function createCard(data) {

    profile.src = data.avatar_url;
    namee.textContent = data.name || data.login;
    username.textContent = data.login;

    bio.textContent = data.bio || "No bio available";

    repos.textContent = data.public_repos;
    followers.textContent = data.followers;
    following.textContent = data.following;

    company.textContent = `Company : ${data.company || "Jobless"}`;

    userLocation.textContent = data.location || "Location not specified";
    createdAt.textContent = `Acc created at : ${new Date(data.created_at).toLocaleDateString()}`;

    link.href = data.html_url;

    save.disabled = false;
    save.textContent = "Add to Short List";

    save.onclick = async function() {

        save.disabled = true;
        save.textContent = "Saving...";

        try {
            const result = await saveCandidate(data);

            if (result === false ) {
                save.textContent = "Already in Short List ";
                return;
            }

            save.textContent = "Saved ";

        } catch (error) {
            save.textContent = "Error - Try again";
            save.disabled = false;
            console.log(error);
        }
    };
}
