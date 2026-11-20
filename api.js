const username = document.getElementById("username");
const search = document.getElementById("search");
const result = document.getElementById("result");


search.addEventListener("submit", (event) => {
    event.preventDefault();

    const user = username.value.trim();

    const regex = /^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?$/;

    if (!user) {
        result.textContent = "Please enter a GitHub username.";
        return;
    }

    if (!regex.test(user)) {
        result.textContent = "Invalid username. Use 1-39 letters, numbers or hyphens. Username cannot start or end with a hyphen.";
        return;
    }

    result.textContent = "";

    const url = `profil.html?username=${encodeURIComponent(user)}`;

    window.location.href = url;
}); 