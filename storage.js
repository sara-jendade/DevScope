const API_URL = `https://api.github.com/users/${encodeURIComponent(repoUser)}/repos?per_page=100&sort=updated` ; 

const DURATION = 10 * 60 * 1000; // 10 minutes en millisecondes



// Enregistrer : la donnée + la date d'enregistrement


function setCache(key, data) {
  localStorage.setItem(key, JSON.stringify({ data: data, savedAt: Date.now() }));
}

// Lire : renvoie la donnée si elle existe et a moins de 10 minutes, sinon null
export function getCache(key) {
  const entry = JSON.parse(localStorage.getItem(key)); // null si la clé n'existe pas
  if (entry && Date.now() - entry.savedAt < DURATION) {
    return entry.data;
  }
  return null;
}










document.querySelector('').addEventListener('click', async () => {
    const id = userIdInput.value;
    let profile = getCache('profile-' + id);

    if (profile) {
        message.textContent = 'Lu depuis le cache';
    } else {
        message.textContent = 'Chargement...';
        try {
            // Les 2 requêtes partent en même temps
            const results = await Promise.all([fetch(`${API_URL}/${id}`), fetch(`${API_URL}/${id}/posts`)]);
            const userRes = results[0];
            const postsRes = results[1];
            if (!userRes.ok) throw new Error(`Erreur ${userRes.status}`);
            if (!postsRes.ok) throw new Error(`Erreur ${postsRes.status}`);
            const user = await userRes.json();
            const postsData = await postsRes.json();
            
            profile = { name: user.firstName + ' ' + user.lastName, posts: postsData.posts };
            setCache('profile-' + id, profile);
            message.textContent = "Chargé depuis l'API";
        } catch (err) {
            message.textContent = 'Erreur : ' + err.message;
            return;
        }
    }

    // Affichage avec textContent
    fullName.textContent = profile.name;
    postsList.innerHTML = '';
    for (const post of profile.posts) {
        const li = document.createElement('li');
        li.textContent = post.title;
        postsList.appendChild(li);
    }
});