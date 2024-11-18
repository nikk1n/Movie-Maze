const profileName=document.getElementById("profileName");
const profileEmail=document.getElementById("profileEmail");
const profileCountry=document.getElementById("profileCountry");
const logOutButton=document.getElementById("log-out");
const changePasswordButton=document.getElementById("change-password");
const loginPage=document.getElementById("login");
const profilePage=document.getElementById("profile-display");
const loginForm=document.getElementById("login-form");
const deleteAccountButton=document.getElementById("delete-account");
const changePasswordForm=document.getElementById("password-change-form");
const changePasswordBackButton=document.getElementById("back");
const changePassword=document.getElementById("password-change");
function fetchProfileData(){
    //Gets all profile data from storage
    profileName.innerText=localStorage.getItem("profileFirstName")+' '+localStorage.getItem("profileLastName");
    profileEmail.innerText=localStorage.getItem("profileEmail")
    profileCountry.innerText=localStorage.getItem("profileCountry");
    if(localStorage.getItem("loggedIn")==="true"){
        profilePage.style.display="block";
        loginPage.style.display="none";
    }
}
logOutButton.addEventListener("click",function (){
    //Logs out of account
    profilePage.style.display="none";
    loginPage.style.display="block";
    localStorage.setItem("loggedIn","false");
    checkProfile();
})
loginForm.addEventListener("submit",function (event){
    //validates login info and logs in if its correct
    event.preventDefault();
    if(validateLogin()){
        localStorage.setItem("loggedIn","true");
        loginPage.style.display="none";
        profilePage.style.display="block";
        //Restore values to default
        document.forms["login-form"]["email"].value="";
        document.forms["login-form"]["password"].value="";
        checkProfile();
    }

})
function validateLogin(){
    //Login info validation
    let email=document.forms["login-form"]["email"].value;
    let password=document.forms["login-form"]["password"].value;
    document.getElementById("email-error").innerText="";
    document.getElementById("password-error").innerText="";
    if(email===localStorage.getItem("profileEmail")){
        if(password===localStorage.getItem("profilePassword")){
            return true;
        }
        else{
            document.getElementById("password-error").innerText="Wrong password"

        }
    }else{
        document.getElementById("email-error").innerText="Account with this e-mail doesn't exist"
    }
    return false;
}
deleteAccountButton.addEventListener("click", function(){
    //Deletes all account information
    localStorage.removeItem("profileFirstName");
    localStorage.removeItem("profileLastName");
    localStorage.removeItem("profileEmail");
    localStorage.removeItem("profilePassword");
    localStorage.removeItem("profileCountry");
    location.reload();
})
changePasswordBackButton.addEventListener("click",function(){
    //Returns to profile page
    changePassword.style.display="none";
    profilePage.style.display="block";
})
changePasswordButton.addEventListener("click", function(){
    //Moves user to change password page
    changePassword.style.display="block";
    profilePage.style.display="none";
})
changePasswordForm.addEventListener("submit",function (event){
    //Validates change password info and changes password if its correct
    event.preventDefault();
    if(validateChangePassword()){
        localStorage.setItem("loggedIn","false");
        localStorage.setItem("profilePassword",document.forms["password-change-form"]["new-password"].value);
        changePassword.style.display="none";
        loginPage.style.display="block";
        //Restore values to default
        document.forms["password-change-form"]["old-password"].value="";
        document.forms["password-change-form"]["new-password"].value="";
        document.forms["password-change-form"]["new-password-confirm"].value="";
        checkProfile();
    }
})
function validateChangePassword(){
    //Change password validation
    let validity=true;
    let oldPassword=document.forms["password-change-form"]["old-password"].value;
    let newPassword=document.forms["password-change-form"]["new-password"].value;
    let newPasswordConfirm=document.forms["password-change-form"]["new-password-confirm"].value;
    document.getElementById("old-password-error").innerText="";
    document.getElementById("new-password-error").innerText="";
    document.getElementById("new-password-confirm-error").innerText="";
    if(oldPassword!==localStorage.getItem("profilePassword")){
        document.getElementById("old-password-error").innerText="Wrong old password";
        validity=false;
    }
    if(newPassword.length<6){
        document.getElementById("new-password-error").innerText="New password needs to have at least 6 characters";
        validity=false;
    }
    if(newPassword===localStorage.getItem("profilePassword")){
        document.getElementById("new-password-error").innerText="New password can't be the same as old one";
        validity=false;
    }
    if(newPassword===""){
        document.getElementById("new-password-error").innerText="New password can't be empty";
    }
    if(newPassword!==newPasswordConfirm){
        document.getElementById("new-password-confirm-error").innerText="Passwords do not match";
        validity=false;
    }
    if(newPasswordConfirm===""){
        document.getElementById("new-password-confirm-error").innerText="Please confirm your password";
    }
    return validity;
}
fetchProfileData();