$(document).ready(function(){
    var signUpForm = $("form.signup");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
    const savingArray = [];
    
    signUpForm.on("submit", function(event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            alert("Something has gone wrong. Please make sure you entered an email and password, and make sure it is all correct.")
            return;
        }

        signUpUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    function signUpUser(email, password) {
        $.post("/api/signup", {
            email: email,
            password: password,
            saved: JSON.stringify({savingArray})
        })
        .then(function(data){
            window.location.replace("/members");
        })
        .catch(handleLoginErr);
    }

    function handleLoginErr(err){
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});