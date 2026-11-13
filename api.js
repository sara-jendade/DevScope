const username = document.getElementById("username");
const search = document.getElementById("search");
const result = document.getElementById("result");


search.addEventListener("submit", (event) => {
    event.preventDefault();

    const user = username.value.trim();

    if (!user) {
        result.innerText = "Please enter a GitHub username.";
        return;
    }

    const url = `recherche.html?username=${encodeURIComponent(user)}`;

    window.location.href = url;
});
