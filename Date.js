document.addEventListener("DOMContentLoaded", function() {
  // Function to display current date
   function displayCurrentDate() {
    const dateElement = document.getElementById("current-date");
    const currentDate = new Date(); // Get current date
    const options = { year: 'numeric', month: 'long', day: 'numeric' }; // Format options
    dateElement.textContent = `Current Date: ${currentDate.toLocaleDateString(undefined, options)} ${currentDate.toLocaleTimeString([],{hour: '2-digit', minute: '2-digit'})}`; // Update the HTML element
}

// Call the function to display the date
displayCurrentDate();
});