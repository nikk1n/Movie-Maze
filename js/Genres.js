document.addEventListener("DOMContentLoaded", () => {
    const genreFigures = document.querySelectorAll(".Genres");

    genreFigures.forEach(figure => {
        figure.addEventListener("click", () => {
            const genre = figure.previousElementSibling.textContent.trim();
            const genreId = getGenreId(genre); // Получаем ID жанра
            if (genreId) {
                // Открываем страницу с передачей ID жанра
                window.open(`gener2.html?genreId=${encodeURIComponent(genreId)}`, "_blank");
            } else {
                alert("Genre not found!");
            }
        });
    });
});

// Сопоставление названия жанра с его ID (по данным TMDb API)
function getGenreId(genreName) {
    const genres = {
        "Action": 28,
        "Adventure": 12,
        "Animated": 16,
        "Comedy": 35,
        "Drama": 18,
        "Fantasy": 14,
        "Documentary": 99,
        "Horror": 27,
        "Romance": 10749,
        "Science fiction": 878,
        "Thriller": 78,
    };
    return genres[genreName] || null;
}
