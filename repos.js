const reposList = document.getElementById("repos-list");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const pageNumber = document.getElementById("page-number");

const repoUser = new URLSearchParams(window.location.search).get("username");

let repositories = [];
let currentPage = 1;

const reposPerPage = 6;



async function getRepositories() {

    reposList.textContent = "Loading repositories...";

    try {

        const response = await fetch(
            `https://api.github.com/users/${encodeURIComponent(repoUser)}/repos?per_page=100&sort=updated`
        );

        if (!response.ok) {
            throw new Error("Unable to load repositories.");
        }

        repositories = await response.json();

        displayRepositories();

    } catch (error) {

        reposList.textContent = error.message;

        previous.disabled = true;
        next.disabled = true;

        pageNumber.textContent = "";

    }
}



function displayRepositories() {

    reposList.innerHTML = "";

    const start = (currentPage - 1) * reposPerPage;
    const end = start + reposPerPage;

    const currentRepositories = repositories.slice(start, end);

    if (repositories.length === 0) {

        reposList.textContent = "No repositories found.";

        previous.disabled = true;
        next.disabled = true;

        pageNumber.textContent = "Page 0 of 0";

        return;
    }

    currentRepositories.forEach(repo => {

        const card = document.createElement("div");

        card.className = "rounded-3xl border border-white/20 bg-black/40 p-6 shadow-xl";

        const name = document.createElement("h3");

        name.className = "text-xl font-bold text-[#00FF41] mb-3";
        name.textContent = repo.name;


        const description = document.createElement("p");

        description.className = "text-white/60 mb-5";
        description.textContent = repo.description || "No description available.";


        const language = document.createElement("p");

        language.className = "text-sm text-white/70 mb-3";
        language.textContent = `Language: ${repo.language || "Not specified"}`;


        const details = document.createElement("div");

        details.className = "flex flex-wrap gap-5 text-sm text-white/60 mb-5";
        details.textContent = `⭐ ${repo.stargazers_count}  |  Forks: ${repo.forks_count}`;


        const updated = document.createElement("p");

        updated.className = "text-xs text-white/40 mb-5";
        updated.textContent = `Updated: ${new Date(repo.updated_at).toLocaleDateString()}`;


        const link = document.createElement("a");

        link.href = repo.html_url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "View Repository →";
        link.className = "text-[#00FF41] font-bold hover:underline";


        card.append(name, description, language, details, updated, link);

        reposList.appendChild(card);

    });

    updatePagination();

}



function updatePagination() {

    const totalPages = Math.ceil(repositories.length / reposPerPage);

    pageNumber.textContent = `Page ${currentPage} of ${totalPages}`;

    previous.disabled = currentPage === 1;
    next.disabled = currentPage === totalPages;

}


previous.addEventListener("click", () => {

    if (currentPage > 1) {

        currentPage--;

        displayRepositories();

    }

});



next.addEventListener("click", () => {

    const totalPages = Math.ceil(repositories.length / reposPerPage);

    if (currentPage < totalPages) {

        currentPage++;

        displayRepositories();

    }

});


if (repoUser) {

    getRepositories();

} else {

    reposList.textContent = "No username provided.";

    previous.disabled = true;
    next.disabled = true;

    pageNumber.textContent = "";

}
