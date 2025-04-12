# React + Vite

# TV Show Finder

TV Show Finder is a React-based web application that enables users to search for TV shows via the TVmaze API, view detailed information on each show, and save favorites locally.

## Features

-   **Home Page**

    -   Loads with a default search query ("horror") so that at least 10 results are shown initially.
    -   Users can enter a search term and click the "Search" button to fetch TV shows from the TVmaze API.
    -   Displays results in a grid layout as cards that include show images and names.
    -   Each card provides a "More Info" link that navigates to the Detail page.
    -   Includes a heart (favorite) button on each card so that users can quickly save shows without navigating away.

-   **Detail Page**

    -   Displays detailed information of the selected TV show (title, image, summary) retrieved via the TVmaze API.
    -   Shows a "Save to Favorites" button that saves the show data to localStorage.
    -   Includes loading and error handling states for a better user experience.

-   **Saved Collection Page**

    -   Lists all favorited TV shows stored in localStorage.
    -   Allows users to remove shows from the collection.

-   **Navigation**
    -   A responsive navigation bar is present on all pages, enabling easy switching between Home and Saved pages.

## Technologies Used

-   **React** – For building the user interface.
-   **React Router** – To handle navigation between pages.
-   **CSS** – For styling and achieving an Apple-inspired minimalist design.
-   **TVmaze API** – Provides TV show data for search and detail views.
-   **LocalStorage** – Used for persisting favorite shows across sessions.

## Project Structure

web_scripting2/
├── public/
├── src/
│ ├── components/
│ │ └── NavBar.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Home.css
│ │ ├── Detail.jsx
│ │ ├── Detail.css
│ │ ├── Saved.jsx
│ │ └── Saved.css
│ ├── App.jsx
│ └── main.jsx
├── .gitignore
├── package.json
└── README.md

## Installation and Usage

1. **Clone the Repository**
    ```bash
    git clone https://github.com/ssanghwacha/web_scripting2.git
    cd web_scripting2
    npm install
    npm start
    ```

## Challenges and Solutions

• API Integration and Default Results:
To meet the initial requirement of displaying at least 10 results, a default query (‘horror’) is set when the Home component mounts, which automatically triggers a data fetch on page load.
• Routing and Navigation:
Managing nested routers was a key challenge. This was solved by ensuring that <BrowserRouter> is used only once at the top-level (in main.jsx or App.jsx) to avoid routing conflicts.
• State and Data Persistence:
Implementing the ‘Save to Favorites’ functionality with localStorage allowed the app to persist user data across sessions.
