$(document).ready(function () {
    /* global moment */

    // Users Info
    let username = $("#user_name");
    let password = $("#password");
    let confirmPasword = $("#confirmPassword");
    let email = $("#email_address");
    // get unique id to user
    let uniqueId = Math.random().toString(36).substr(2, 9);

    $(document).on("click", "#submitForm", handleUserFormSubmit);

    function handleUserFormSubmit(event) {
        event.preventDefault();
       //   validate that passowrd and confirm password are requal to each other are correct
        if (password.val().trim().trim() !== confirmPasword.val().trim().trim()) {
            alert("Your password and confirmation password do not match.");
            return
        }        
        // Don't do anything if the name fields hasn't been filled out
        if (!username.val().trim().trim() || !password.val().trim().trim() || !confirmPasword.val().trim().trim() || !email.val().trim().trim()) {
            return;
        }

        // Calling the upsertAuthor function and passing in the value of the name input
        upsertUser({
            username: username.val().trim(),
            password: password.val().trim(),
            userUniqueID: uniqueId.trim(),
            email: email.val().trim(),
            loggedIn: true
        });
    }

    function upsertUser(userData) {
        $.post("/api/users", userData);
        window.location.href = "/register/" + uniqueId.trim()
    }
});
