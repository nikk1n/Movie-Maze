const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const cards=document.querySelectorAll('.card');
const reviews=document.getElementById("Reviews");
const review_popup=document.getElementById("review-popup");
const inputs=document.querySelectorAll('input,select');
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
        for(let i=0;i<cards.length;i++){
            cards[i].className="card bg-light border-light";
            cards[i].style.transition = '2s';
        }
        if(reviews!=null){
        reviews.style.background="#d8d6d6";
        reviews.style.borderColor="black";
        reviews.style.color="black";
        reviews.style.transition='2s';
        }
        if(review_popup!=null){
            review_popup.style.background="#d8d6d6";
            review_popup.children[1].children[1].children[1].style.background="white";
            review_popup.children[1].children[1].children[1].style.color="black";
        }
        if(inputs!=null){
            for(let i=0;i<inputs.length;i++){

                inputs[i].style.background="white"
                inputs[i].style.color="black"
                inputs[i].style.borderColor="black"
                inputs[i].style.transition="2s";
            }
        }
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
        for(let i=0;i<cards.length;i++){
            cards[i].className="card bg-black border-black text-white";
            cards[i].style.transition = '2s';
        }
        if(reviews!=null) {
            reviews.style.background = "#555555";
            reviews.style.borderColor = "white";
            reviews.style.color = "white";
            reviews.style.transition = '2s';
        }
        if(review_popup!=null){
        review_popup.style.background="#555555";
        review_popup.children[1].children[1].children[1].style.background="#888888";
        review_popup.children[1].children[1].children[1].style.color="white";
        }
        if(inputs!=null){
            for(let i=0;i<inputs.length;i++){

                inputs[i].style.background="#555555"
                inputs[i].style.color="white"
                inputs[i].style.borderColor="white"
                inputs[i].style.transition="2s";
            }
        }
    }
});