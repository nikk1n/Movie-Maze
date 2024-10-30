document.addEventListener("DOMContentLoaded", function() {
    const API_KEY = '3d2bda8d';  // my key API 
    const BASE_URL = 'https://www.omdbapi.com/';

    async function fetchMovieData(movieTitle) {
        try {
            const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(movieTitle)}`);
            if (!response.ok) throw new Error("Ошибка запроса");
            
            const data = await response.json();
            
            if (data.Response === "False") {
                console.error("we can't find :", data.Error);
                alert("Movie not found, check the name");
                return null;
            }

            console.log("data check:", data); // Проверка полученных данных
            return data;
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }

    function displayMovieData(movie) {
        const titleElement = document.getElementById('movie-title');
        const overviewElement = document.getElementById('movie-overview');
        const posterElement = document.getElementById('movie-poster');

        titleElement.textContent = movie.Title || "Название не найдено";
        overviewElement.textContent = movie.Plot || "Описание не найдено";
        posterElement.src = movie.Poster !== "N/A" ? movie.Poster : ""; // check for allowing poster

        if (movie.Poster === "N/A") {
            posterElement.alt = "Постер недоступен";
            posterElement.style.display = "none"; // hide img, if poster none
        } else {
            posterElement.style.display = "block"; // show img, is poster haveee
        }
    }

    document.getElementById('search-form').addEventListener('submit', async (event) => {
        event.preventDefault();
        const movieTitle = document.getElementById('movie-input').value;
        const movieData = await fetchMovieData(movieTitle);
        if (movieData) displayMovieData(movieData);
    });
});