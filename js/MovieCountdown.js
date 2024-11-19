function calculateCountdown(releaseDate, elementId) {
    const now = new Date();
    const release = new Date(releaseDate);
    const diff = release - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById(elementId).innerText = `${days} days remaining`;
    } else {
        document.getElementById(elementId).innerText = "Released!";
    }
}

// Call the function for each movie
calculateCountdown("2025-03-15", "countdown-movie1");
calculateCountdown("2025-07-20", "countdown-movie2");
calculateCountdown("2025-11-05", "countdown-movie3");
calculateCountdown("2025-09-10", "countdown-movie4");
calculateCountdown("2025-12-25", "countdown-movie5");
calculateCountdown("2025-05-01", "countdown-movie6");
calculateCountdown("2025-08-15", "countdown-movie7");
calculateCountdown("2025-10-01", "countdown-movie8");
calculateCountdown("2025-04-20", "countdown-movie9");
calculateCountdown("2025-06-30", "countdown-movie10");