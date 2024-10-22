document.addEventListener("DOMContentLoaded", function(){
    const filterSelect = document.getElementById('filterSelect');
    const originalMovieCards = Array.from(document.querySelectorAll('.card')); // Original order of movie cards
    let movieCards = [...originalMovieCards]; // Clone of movie cards to manipulate
    const container = document.querySelector('.row'); // Container for movie cards

    filterSelect.addEventListener('change', function() {
        const filter = this.value;
        switch (filter) {
            case 'high-grossing':
                sortMovies('high');
                break;
            case 'low-grossing':
                sortMovies('low');
                break;
            default:
                resetMovies(); // Reset to the original order
                break;
        }
    });


    function sortMovies(lala) {
        // Sort the cloned array of movie cards based on gross value
        movieCards.sort((a, b) => {
            const grossA = parseGross(a.querySelector('.card-text').innerText);
            const grossB = parseGross(b.querySelector('.card-text').innerText);

            if( lala === 'high'){
                 return grossB - grossA; 
            }else {
                 return grossA - grossB;
            }// Sort: high for descending, low for ascending
        });

        // Clear the current display and append sorted movies
        container.innerHTML = ''; // Clear current movie cards
        movieCards.forEach(card => container.appendChild(card)); // Re-add sorted cards
    }

    // Function to reset the movies to the original order
    function resetMovies() {
        movieCards = [...originalMovieCards]; // Reset movie cards to original order
        container.innerHTML = ''; // Clear current movie cards
        originalMovieCards.forEach(card => container.appendChild(card)); // Re-add cards in the original order
    }

    // Function to extract and parse gross earnings from text
    function parseGross(grossText) {
        let gross = 0;
        if (grossText.includes('B')) {
            // Convert billions to millions
            gross = parseFloat(grossText.replace(/[^0-9.-]+/g, "")) * 1000;
        } else if (grossText.includes('M')) {
            gross = parseFloat(grossText.replace(/[^0-9.-]+/g, ""));
        } else {
            gross = parseFloat(grossText.replace(/[^0-9.-]+/g, ""));
        }
        return gross; // Always return the value in millions
    }


});
