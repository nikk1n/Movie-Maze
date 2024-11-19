const API_KEY = "439e2bbae3398265de7a5df5159847fb"; // Your API key
const API_URL = "https://api.themoviedb.org/3/discover/movie";

// Get genre ID from the URL
function getGenreIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("genreId");
}

// Fetch popular movies by genre
async function fetchMoviesByGenre(genreId) {
    const url = `${API_URL}?api_key=${API_KEY}&with_genres=${genreId}&sort_by=popularity.desc&language=en-US&page=1`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error("Error fetching movies:", error);
        return [];
    }
}

// Display movies
function displayMovies(movies) {
    const container = document.getElementById("search-results");

    // Clear the container before adding new movies
    container.innerHTML = ""; 

    if (movies.length === 0) {
        container.innerHTML = `<p>No popular movies found for this genre. Showing available movies.</p>`;
        return;
    }

    // Create a movie card for each movie
    movies.forEach(movieDetails => {
        console.log("Movie:", movieDetails);

        // Check for poster
        if (!movieDetails.poster_path) return;

        // Create movie card
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card card mx-1 my-1';

        const poster = document.createElement('img');
        poster.src = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
        poster.alt = movieDetails.title;
        poster.className = 'card-img-top'; // Poster styling

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const title = document.createElement('h5');
        title.textContent = movieDetails.title;
        title.className = 'card-title';

        // Movie rating
        const rating = document.createElement('p');
        rating.className = 'card-text';
        rating.textContent = `Rating: ${movieDetails.vote_average ? `${movieDetails.vote_average} IMDb` : "No rating available"}`;

        // Release date
        const releaseDate = document.createElement('p');
        releaseDate.className = 'card-text';
        releaseDate.textContent = `Release Date: ${movieDetails.release_date || "Not specified"}`;

        // Add only the title, rating, and release date
        cardBody.appendChild(title);
        cardBody.appendChild(rating);
        cardBody.appendChild(releaseDate);
        movieCard.appendChild(poster);
        movieCard.appendChild(cardBody);

        // Append the movie card to the container
        container.appendChild(movieCard);
    });
}

// Main function
(async function () {
    const genreId = getGenreIdFromURL(); // Get genre ID
    if (genreId) {
        const movies = await fetchMoviesByGenre(genreId); // Fetch movies
        displayMovies(movies); // Display movies
    } else {
        document.getElementById("search-results").innerHTML = `<p>Genre not specified!</p>`;
    }
})();
