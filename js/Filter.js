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
                localStorage.setItem("popularFilter","high-grossing");
                break;
            case 'low-grossing':
                sortMovies('low');
                localStorage.setItem("popularFilter","low-grossing");
                break;
        }
    });
    function filterInit(){
        //Sets the filter option to the one stored in local storage
        let event=new Event('change')
        filterSelect.value=localStorage.getItem("popularFilter")||"high-grossing";
        filterSelect.dispatchEvent(event);
    }


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
    // Function to extract and parse gross earnings from text
    function parseGross(grossText) {
        let gross = 0;
        if (grossText.includes('B')) {
            // Convert all numbers
            gross = parseFloat(grossText.replace(/[^0-9.-]+/g, "")) * 1000000000;
        } else if (grossText.includes('M')) {
            gross = parseFloat(grossText.replace(/[^0-9.-]+/g, ""))*1000000;
        } else if (grossText.includes('K')) {
            gross = parseFloat(grossText.replace(/[^0-9.-]+/g, "")) * 1000;
        }else{
            gross = parseFloat(grossText.replace(/[^0-9.-]+/g, ""));
        }
        return gross;
    }
filterInit();

});
