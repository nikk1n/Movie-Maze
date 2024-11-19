document.addEventListener("DOMContentLoaded", () => {
    const API_KEY = '3d2bda8d'; // Replace with your OMDb API key
    const BASE_URL = 'http://www.omdbapi.com/';

    // Function to search for movies by title
    async function searchMoviesByTitle(title) {
        const url = `${BASE_URL}?s=${encodeURIComponent(title)}&type=movie&apikey=${API_KEY}`; // Fetch the list of movies
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            if (data.Response === "False") {
                alert("Movies not found. Try a different title.");
                return null;
            }

            return data.Search; // Return the array of movies
        } catch (error) {
            console.error("Error while searching for movies:", error);
        }
    }

    // Function to get detailed information about a movie by its IMDb ID
    async function getMovieDetails(imdbID) {
        const url = `${BASE_URL}?i=${imdbID}&apikey=${API_KEY}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            if (data.Response === "False") {
                alert("Unable to fetch detailed information about the movie.");
                return null;
            }

            return data; // Return detailed information about the movie
        } catch (error) {
            console.error("Error while fetching movie details:", error);
        }
    }

    // Function to display movie information
    async function displayMovies(movies) {
        const resultsContainer = document.getElementById('search-results');
        resultsContainer.innerHTML = ''; // Clear previous results

        if (!movies || movies.length === 0) {
            resultsContainer.textContent = "Movies not found.";
            return;
        }

        // Fetch details for all movies in parallel
        const movieDetailsPromises = movies.map(movie => getMovieDetails(movie.imdbID));
        const allMovieDetails = await Promise.all(movieDetailsPromises); // Wait for all requests

        // Now display all movies
        allMovieDetails.forEach(movieDetails => {
            // Log the data for each movie for debugging
            console.log("Movie:", movieDetails);

            // Check if the poster is available
            if (!movieDetails.Poster || movieDetails.Poster === "N/A") return;

            // Create a movie card
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card card mx-2 my-3';

            const poster = document.createElement('img');
            poster.src = movieDetails.Poster;
            poster.alt = movieDetails.Title;
            poster.className = 'card-img-top'; // Styling for the poster

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const title = document.createElement('h5');
            title.textContent = movieDetails.Title;
            title.className = 'card-title';

            // Movie rating
            const rating = document.createElement('p');
            rating.className = 'card-text';
            rating.textContent = `Rating: ${movieDetails.imdbRating ? `${movieDetails.imdbRating} IMDb` : "No rating available"}`;

            // Release date
            const releaseDate = document.createElement('p');
            releaseDate.className = 'card-text';
            releaseDate.textContent = `Release Date: ${movieDetails.Released || "Not specified"}`;

            // Description
            const description = document.createElement('p');
            description.className = 'card-text';
            description.textContent = `Description: ${movieDetails.Plot || "Description not available"}`;

            cardBody.appendChild(title);
            cardBody.appendChild(rating);
            cardBody.appendChild(releaseDate);
            cardBody.appendChild(description);
            movieCard.appendChild(poster);
            movieCard.appendChild(cardBody);

            resultsContainer.appendChild(movieCard);
        });
    }

    // Form submission handler for search
    document.getElementById('search-form').addEventListener('submit', async (event) => {
        event.preventDefault();

        const movieTitle = document.getElementById('movie-input').value.trim();
        if (!movieTitle) {
            alert("Please enter a movie title!");
            return;
        }

        const movies = await searchMoviesByTitle(movieTitle);
        displayMovies(movies);
    });
});
