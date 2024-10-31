const profileLink=document.getElementById("Profile");
let checkProfile=function (){
    console.log(localStorage.getItem("profileFirstName"))
    if(localStorage.getItem("profileFirstName")!=null){
        if(localStorage.getItem("loggedIn")==="true"){
            profileLink.textContent=localStorage.getItem("profileFirstName");
        } else{
            profileLink.textContent="Login";
        }
        profileLink.href="Profile.html";
    }
}
checkProfile();