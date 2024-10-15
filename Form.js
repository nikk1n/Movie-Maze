function validateForm(){

    let validity=true;
    let f_name=document.forms["registration"]["f-name"].value
    let l_name=document.forms["registration"]["l-name"].value
    let email=document.forms["registration"]["email"].value
    let password=document.forms["registration"]["password"].value
    let conf_password=document.forms["registration"]["conf-password"].value
    let country=document.forms["registration"]["country"].value
    let policy=document.forms["registration"]["policy"].checked
    document.getElementById("name-error").innerText=""
    document.getElementById("email-error").innerText=""
    document.getElementById("password-error").innerText=""
    document.getElementById("conf-password-error").innerText=""
    document.getElementById("country-error").innerText=""
    document.getElementById("policy-error").innerText=""
    if(f_name===""){
        document.getElementById("name-error").innerText="Please enter your first name"
        validity=false;
    }
    if(l_name===""){
        document.getElementById("name-error").innerText="Please enter your last name"
        validity=false;
    }
    if(email===""){
        document.getElementById("email-error").innerText="Please enter your email"
        validity=false;
    }
    if(password.length<6){
        document.getElementById("password-error").innerText="Password length needs to be at least 6"
        validity=false;
    }
    if(password===""){
        document.getElementById("password-error").innerText="Please enter your password"
    }
    if(conf_password!==password){
        document.getElementById("conf-password-error").innerText="Passwords do not match"
    }
    if(conf_password===""){
        document.getElementById("conf-password-error").innerText="Please confirm your password"
    }
    if(country===""){
     document.getElementById("country-error").innerText="Please select your country"
    }
    if(policy===false){
        document.getElementById("policy-error").innerText="Please agree to our terms and privacy policy"
    }
    return validity;
}