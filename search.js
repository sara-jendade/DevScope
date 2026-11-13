
const result = document.getElementById("result");

const params = new URLSearchParams(window.location.search);
const user = params.get("username");

async function getUser() {
    if (!user) {
        result.innerText = "No username provided.";
        return;
    }

    const url = `https://api.github.com/users/${user}`;
    console.log("GitHub API URL:", url);

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Accept": "application/vnd.github+json"
            }
        });

//          console.log("Status:", response.status);
//          console.log("Remaining:", response.headers.get("X-RateLimit-Remaining"));
//          console.log("Reset:", response.headers.get("X-RateLimit-Reset"));
//          console.log("Response:", await response.clone().json());


        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("GitHub user not found.");
            }

            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();


        createCard(data); 

        //console.table(data);

        // result.innerText = `Name: ${data.name || data.login} | Bio: ${data.bio || "No bio available"}`;

    } catch (error) {
        console.error("Error fetching data:", error);
        result.innerText = error.message;
    }
}

getUser();
