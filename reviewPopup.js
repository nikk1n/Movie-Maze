document.addEventListener("DOMContentLoaded", function(){
  const reviewToggleButton=document.getElementById("Review");
  const reviewPopup=document.getElementById("review-popup")
    const overlay=document.getElementById("overlay")
  reviewToggleButton.addEventListener("click", ()=> {
      if(reviewPopup.style.display === "none" || reviewPopup.style.display===""){
          reviewPopup.style.display="block";
          reviewPopup.style.opacity="1";
          overlay.style.display="block"
      } else {
          reviewPopup.style.opacity="0";
          reviewPopup.style.display="none";
      }
  })
    overlay.addEventListener("click",()=>{
        reviewPopup.style.opacity="0";
        reviewPopup.style.display="none";
        overlay.style.display="none"
    })

})
function updateRating(star_amount){
    let stars=document.querySelectorAll(".star")
    for(let i=0;i<star_amount;i++){
        stars[i].className="star "+"checked "+"fs-1"
    }
    for(let i=star_amount;i<5;i++){
        stars[i].className="star "+"fs-1"
    }
}