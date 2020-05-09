$(document).ready(function() {
    var loginForm = $("form.login");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");

    loginForm.on("submit", function(event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            alert("Something has gone wrong. Please make sure you entered an email and password, and make sure it is all correct.")
            return;
        }

        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    function loginUser(email, password) {
        $.post("/api/login", {
            email: email,
            password: password
        })
        .then(function() {
            window.location.replace("/members");
        })
        .catch(function(err) {
            alert("Something has gone wrong. Please make sure you entered an email and password, and make sure it is all correct.")
            console.log(err);
        });
    }
});