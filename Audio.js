const muteButton=document.getElementById("toggleSound");
let soundOn=true;
muteButton.addEventListener("click", function() {
    this.classList.toggle('bi-volume-up-fill')
    soundOn = !this.classList.toggle('bi-volume-mute-fill');
})
function play(audio){
    if(soundOn) {
        let sound = document.getElementById(audio);
        sound.play();
    }
}
