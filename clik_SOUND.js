document.addEventListener("DOMContentLoaded", function(){
    // Get the button and audio elements
const playSoundButton = document.getElementById('click_Sound');
const notificationSound = document.getElementById('notif_Sound');

// Add event listener to the button
playSoundButton.addEventListener('click', function() {
    notificationSound.play();
});
});
