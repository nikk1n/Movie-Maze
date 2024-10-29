//Find all elements
const toggle = document.getElementById('toggleDark');
const stylesheet=document.getElementById("style");
if(theme==='on'){
    toggle.classList.toggle('bi-moon');
    toggle.classList.toggle('bi-brightness-high-fill');
}
toggle.addEventListener('click', function(){
     //Changes toggle button state
     this.classList.toggle('bi-moon');
     if(this.classList.toggle('bi-brightness-high-fill')){
         localStorage.setItem('dark','off');
         stylesheet.href="stylesheets/Light.css"
     }else{
         localStorage.setItem('dark','on');
         stylesheet.href="stylesheets/Dark.css"
     }
})
