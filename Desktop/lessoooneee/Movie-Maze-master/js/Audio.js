const muteButton=document.getElementById("toggleSound");
let soundOn=localStorage.getItem("muted")==="true" || localStorage.getItem("muted")===null
if(!soundOn){
    muteButton.classList.toggle('bi-volume-up-fill');
    muteButton.classList.toggle('bi-volume-mute-fill')
}
muteButton.addEventListener("click", function() {
    this.classList.toggle('bi-volume-up-fill')
    soundOn = !this.classList.toggle('bi-volume-mute-fill');
    localStorage.setItem("muted", soundOn)
})
function play(audio){
    if(soundOn) {
        let sound = document.getElementById(audio);
        sound.play();
    }
}
