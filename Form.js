const formSteps=document.querySelectorAll("fieldset");
const prevButton=document.querySelector(".prev-button");
const nextButton=document.querySelector(".next-button");
let currentStep=0;
const form=document.getElementById("registration");

function showStep(stepInd){
    formSteps.forEach((step,index)=>{
        if(index===stepInd){
            step.style.display="block";
        }else{
            step.style.display="none";
        }
        if(stepInd===formSteps.length-1){
            nextButton.value="Register";
            nextButton.type="submit"
        }else{
            nextButton.value="Next";
            nextButton.type="button"
        }
    })
}
nextButton.addEventListener("click", function () {
    if (currentStep < formSteps.length - 1) {
        if(validateForm()){
        currentStep++;
        showStep(currentStep);
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

function validateForm(){
//Find all elements
    let validity=true;
    const f_name=document.forms["registration"]["f-name"].value
    const l_name=document.forms["registration"]["l-name"].value
    const email=document.forms["registration"]["email"].value
    const password=document.forms["registration"]["password"].value
    const conf_password=document.forms["registration"]["conf-password"].value
    const country=document.forms["registration"]["country"].value
    const policy=document.forms["registration"]["policy"].checked
    //Reset all errors
    document.getElementById("name-error").innerText=""
    document.getElementById("email-error").innerText=""
    document.getElementById("password-error").innerText=""
    document.getElementById("conf-password-error").innerText=""
    document.getElementById("country-error").innerText=""
    document.getElementById("policy-error").innerText=""

    switch(currentStep){
        case 0:
            //Not empty names validation
            if(f_name===""){
                document.getElementById("name-error").innerText="Please enter your first name"
                validity=false;
            }
            if(l_name===""){
                document.getElementById("name-error").innerText="Please enter your last name"
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

