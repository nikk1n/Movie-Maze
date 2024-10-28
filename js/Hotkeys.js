document.addEventListener("keydown",(event)=>{
    let navbar=document.querySelectorAll(".nav-link");
    let active=document.querySelector(".active");
    let activeInd=Array.from(navbar).findIndex(node=> node.isEqualNode(active));
    if(event.code==="ArrowLeft"){
        if(activeInd>0){
        navbar[activeInd-1].click();
        }
    }
    if(event.code==="ArrowRight"){
        if(activeInd<navbar.length-2){
            navbar[activeInd+1].click();
        }
    }
})