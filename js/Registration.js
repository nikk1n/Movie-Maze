const formSteps=document.querySelectorAll("fieldset");
const prevButton=document.querySelector(".prev-button");
const nextButton=document.querySelector(".next-button");
let currentStep=0;
const registration=document.getElementById("registration");
let f_name;
let l_name;
let email;
let password;
let conf_password;
let country;
let policy;

function showStep(stepInd){
    formSteps.forEach((step,index)=>{
        if(index===stepInd){
            step.style.display="block";
        }else{
            step.style.display="none";
        }
        if(stepInd===formSteps.length-1){
            nextButton.value="Register";
        }else{
            nextButton.value="Next";
        }
    })
}
nextButton.addEventListener("click", function () {
    if(validateForm()){
    if (currentStep < formSteps.length - 1) {
        currentStep++;
        showStep(currentStep);
        }
     else{
        registration.requestSubmit();
    }
     }
});
prevButton.addEventListener("click", function () {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
});
showStep(currentStep);

registration.addEventListener("submit", function(event){
    event.preventDefault();
    if (validateForm()) {
        localStorage.setItem("profileFirstName", f_name);
        localStorage.setItem("profileLastName", l_name);
        localStorage.setItem("profileEmail", email);
        localStorage.setItem("profilePassword", password);
        localStorage.setItem("profileCountry", country);
        location.reload();
    }
})


function validateForm(){
//Find all elements
    let validity=true;
    f_name=document.forms["registration"]["f-name"].value
    l_name=document.forms["registration"]["l-name"].value
    email=document.forms["registration"]["email"].value
    password=document.forms["registration"]["password"].value
    conf_password=document.forms["registration"]["conf-password"].value
    country=document.forms["registration"]["country"].value
    policy=document.forms["registration"]["policy"].checked
    //Reset all errors
    document.getElementById("first-name-error").innerText=""
    document.getElementById("last-name-error").innerText=""
    document.getElementById("email-error").innerText=""
    document.getElementById("password-error").innerText=""
    document.getElementById("conf-password-error").innerText=""
    document.getElementById("country-error").innerText=""
    document.getElementById("policy-error").innerText=""

    switch(currentStep){
        case 0:
            //Not empty names validation
            if(f_name===""){
                document.getElementById("first-name-error").innerText="Please enter your first name"
                validity=false;
            }
            if(l_name===""){
                document.getElementById("last-name-error").innerText="Please enter your last name"
                validity=false;
            }
            //Not empty email validation
            if(email===""){
                document.getElementById("email-error").innerText="Please enter your email"
                validity=false;
            }
            break;
        case 1:
            //Password length validation
            if(password.length<6){
                document.getElementById("password-error").innerText="Password length needs to be at least 6"
                validity=false;
            }
            //Not empty password validation
            if(password===""){
                document.getElementById("password-error").innerText="Please enter your password"
                validity=false;
            }
            //Confirm password is equal to password validation
            if(conf_password!==password){
                document.getElementById("conf-password-error").innerText="Passwords do not match"
                validity=false;
            }
            //Not empty confirm validation
            if(conf_password===""){
                document.getElementById("conf-password-error").innerText="Please confirm your password"
                validity=false;
            }
            break;
        case 2:
            //Chosen country validation
            if(country===""){
                document.getElementById("country-error").innerText="Please select your country"
                validity=false;
            }
            //Policy agree validation
            if(policy===false){
                document.getElementById("policy-error").innerText="Please agree to our terms and privacy policy"
                validity=false;
            }
            break;
    }
    return validity;
}

