const profileLink=document.getElementById("Profile");
let checkProfile=function (){
    if(localStorage.getItem("profileFirstName")!=null){
        if(localStorage.getItem("loggedIn")==="true"){
            profileLink.textContent=localStorage.getItem("profileFirstName");
        } else{
            profileLink.textContent="Login";
        }
    }
}
checkProfile();
// Function to load the login popup dynamically
function loadRegisterPopup() {
    fetch('Register.html')
        .then((response) => response.text())
        .then((data) => {
            document.body.insertAdjacentHTML('beforeend', data);

            // Add event listeners for popup
            const popup = document.getElementById('register-popup');
            const closeBtn = document.getElementById('close-popup');
            const overlay=document.querySelector('.overlay')
            closeBtn.addEventListener('click', () => {
                popup.style.display='none';
                popup.style.opacity='0';
                overlay.style.display='none';
            });
            overlay.addEventListener('click',function(){
                popup.style.display='none';
                popup.style.opacity='0';
                overlay.style.display='none';
            })
             let registration=document.createElement('script')
            registration.src='js/Registration.js'
            document.body.appendChild(registration)
        })
        .catch((error) => console.error('Error loading login popup:', error));
}
function loadProfilePopup() {
    fetch('Profile.html')
        .then((response) => response.text())
        .then((data) => {
            document.body.insertAdjacentHTML('beforeend', data);

            // Add event listeners for popup
            const popup = document.getElementById('profile-popup');
            const closeBtn = document.getElementById('close-popup');
            const overlay=document.querySelector('.overlay')
            if(localStorage.getItem("loggedIn")==="true"){
                const loginPage=document.getElementById("login");
                const profilePage=document.getElementById("profile-display");
                loginPage.style.display="none";
                profilePage.style.display="block";
            }
            closeBtn.addEventListener('click', () => {
                popup.style.display='none';
                popup.style.opacity='0';
                overlay.style.display='none';
            });
            overlay.addEventListener('click',function(){
                popup.style.display='none';
                popup.style.opacity='0';
                overlay.style.display='none';
            })
            let login=document.createElement('script')
            login.src='js/Profile.js'
            document.body.appendChild(login)
        })
        .catch((error) => console.error('Error loading login popup:', error));
}

// Call the function to load the popup on page load
function loadPopup(){
    if(localStorage.getItem("profileFirstName")!=null){

            document.addEventListener('DOMContentLoaded', loadProfilePopup);
        }
    else{
        document.addEventListener('DOMContentLoaded', loadRegisterPopup);
    }
}
loadPopup()
profileLink.addEventListener('click', function(){
    let popup;
    if(localStorage.getItem("profileFirstName")!=null){
        popup = document.getElementById('profile-popup');
    }
    else{
        popup = document.getElementById('register-popup');
    }

    const overlay=document.querySelector('.overlay')
    popup.style.display='block';
    popup.style.opacity='1';
    overlay.style.display='block';
})