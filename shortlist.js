const API_URL = "https://6af72925e844c7ff741c22d2.mockapi.io/github/candidates";

const candidates = document.getElementById("candidates");


async function getCandidates() {

    const response = await fetch(API_URL);

    const data = await response.json();

    candidates.innerHTML = "";

    if (data.length === 0) {
        candidates.textContent = "Your Short List is empty";
        return;
    }

    data.forEach(function(candidate) {

        const card = document.createElement("div");

        card.className = "rounded-3xl border border-white/20 bg-black/40 p-6 shadow-xl";

        const avatar = document.createElement("img");
        avatar.src = candidate.avatar_url;
        avatar.className = "size-20 rounded-full border-2 border-[#00FF41]";
        avatar.alt = "GitHub avatar";

        const name = document.createElement("h2");
        name.textContent = candidate.name;
        name.className = "mt-4 text-xl font-bold";

        const username = document.createElement("p");
        username.textContent = candidate.username;
        username.className = "text-[#00FF41]";

        const bio = document.createElement("p");
        bio.textContent = candidate.bio || "No bio available";
        bio.className = "mt-2 text-white/60";

        const link = document.createElement("a");
        link.href = candidate.html_url;
        link.target = "_blank";
        link.textContent = "View GitHub Profile";
        link.className = "mt-4 block rounded-full bg-[#00FF41] p-3 text-center font-bold text-black";

        const delet = document.createElement("button");
        delet.textContent = "Delete";

        delet.className = "mt-3 w-full rounded-full border border-[#00FF41]/40 bg-gradient-to-br from-[#030303] via-[#001A08] to-[#00FF41] p-3 font-bold text-white shadow-[0_0_20px_rgba(0,255,65,0.15)] transition hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,65,0.3)]";

        delet.addEventListener("click", async function() {

            const response = await fetch(`${API_URL}/${candidate.id}`, {
                method: "DELETE"
            });

            if (response.ok) {
                getCandidates();
            }

        });

        card.append(avatar, name, username, bio, link, delet);

        candidates.appendChild(card);
    });
}


getCandidates();
