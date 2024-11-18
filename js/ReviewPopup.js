document.addEventListener("DOMContentLoaded", function(){
    //Find elements
  const reviewToggleButton=document.getElementById("Review");
  const reviewPopup=document.getElementById("review-popup")
    const overlay=document.querySelector(".overlay")
  reviewToggleButton.addEventListener("click", ()=> {
      //Toggle review popup through button
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
        //Close popup after an outside click
        reviewPopup.style.opacity="0";
        reviewPopup.style.display="none";
        overlay.style.display="none"
    })

})
function updateRating(star_amount){
    //Find elements
    let stars=document.querySelectorAll(".star")
    //Changes star amount
    for(let i=0;i<star_amount;i++){
        stars[i].className="star "+"checked "+"fs-1"
    }
    for(let i=star_amount;i<5;i++){
        stars[i].className="star "+"fs-1"
    }
}