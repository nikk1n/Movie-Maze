const muteButton=document.getElementById("toggleSound");
let soundOn=localStorage.getItem("muted")==="true" || localStorage.getItem("muted")===null;
const sound=document.getElementById("notif_Sound");
const buttons=document.querySelectorAll(".btn");
if(!soundOn){
    muteButton.classList.toggle('bi-volume-up-fill');
    muteButton.classList.toggle('bi-volume-mute-fill')
}
muteButton.addEventListener("click", function() {
    this.classList.toggle('bi-volume-up-fill')
    soundOn = !this.classList.toggle('bi-volume-mute-fill');
    localStorage.setItem("muted", soundOn)
})
buttons.forEach(button =>{
    button.addEventListener("click",function(){
        if(soundOn) {
            sound.play();
        }
    })
})
