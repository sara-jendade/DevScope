# DevScope

DevScope is a web application designed to help recruiters discover, explore, and manage developer profiles. It provides a simple search experience, detailed developer profiles, and a shortlist management system to track candidates throughout the recruitment process.

## Features

### Developer Search
- Search for developers using keywords.
- Explore developer profiles.
- Access detailed information about developers.

### Developer Profiles
- View developer information and GitHub repositories.
- Search repositories by name.
- Filter repositories by programming language.
- Combine search and language filters.
- Display a message when no repositories match the search.

### Shortlist Management
- Add developers to the shortlist.
- Track candidates using recruitment statuses:
  - To Contact
  - Interview
  - Selected
  - Rejected
- Assign a rating from 1 to 5.
- Add comments to candidates.
- Edit candidate information.
- Remove candidates after confirmation.
- Update the interface without reloading the page.

### Performance and Caching
- Cache previously consulted profiles using `localStorage`.
- Reuse cached profiles for 10 minutes.
- Reduce unnecessary GitHub API requests.
- Load profile information and repositories in parallel using `Promise.all`.

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- Tailwind CSS
- GitHub API
- MockAPI
- Fetch API
- LocalStorage
- Git & GitHub

## Project Structure

```text
DevScope/
├── index.html
├── recherche.html
├── profil.html
├── shortlist.html
├── js/
│   ├── config.js
│   ├── api.js
│   ├── cache.js
│   ├── utils.js
│   ├── states.js
│   ├── search.js
│   ├── profile.js
│   └── shortlist.js
└── ...
```

## Architecture

The project is organized into JavaScript modules to separate responsibilities and make the application easier to maintain.

| Module | Responsibility |
|---|---|
| `config.js` | API URLs, recruitment statuses and cache duration |
| `api.js` | API requests, candidate updates and deletion |
| `cache.js` | Cache storage, retrieval and expiration |
| `utils.js` | Reusable utility functions |
| `states.js` | Application states |
| `search.js` | Developer search functionality |
| `profile.js` | Profile display, repository search and filtering |
| `shortlist.js` | Shortlist rendering, editing and deletion |

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Open the project folder.

3. Run the application using Live Server or another local development server.

## API Integration

DevScope uses the GitHub API to retrieve developer information and repositories, and MockAPI to manage shortlist candidates.

API requests are handled using `fetch`, `async/await`, and `try/catch`. Candidate updates use `PUT` requests, while candidate deletion uses `DELETE` requests.

Profile information and repositories are fetched in parallel using `Promise.all`. Previously consulted profiles are stored in `localStorage` and reused for up to 10 minutes.

## Version 2

DevScope V2 introduces:

- Candidate status, rating and comment management.
- Candidate editing and deletion.
- Repository search and language filtering.
- Profile caching with a 10-minute expiration.
- Parallel API requests.
- Improved loading, error and interaction states.

## Project Goal

The goal of DevScope is to provide recruiters with a more efficient way to discover developers, explore their projects, and organize candidates throughout the recruitment process, while improving performance and reducing unnecessary API requests.

## Author

Developed as a front-end development project focusing on JavaScript, DOM manipulation, API integration, asynchronous programming, modular architecture, and user experience.

---

**DevScope — Explore. Search. Discover.**

##Livrable : 


##canva : 

https://canva.link/qx5ukbaf53w465d 

##Vercel : 

https://devscope-ivory.vercel.app/ 


##Netify : 

https://deploy-preview-6--devscopeproject.netlify.app/
