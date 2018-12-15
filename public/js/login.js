$(document).ready(function () {
    var username = $("#Username");
    var passwordInput = $("#password_login");

    $(document).on("click", "#submitForm", handleUserFormSubmit);

    function handleUserFormSubmit(event) {

        event.preventDefault();

        if (!username.val().trim() || !passwordInput.val().trim()) {
            alert("Enter a valid user name and password")
            return;
        }

        $.get("/api/users", function (data) {
            for (let i = 0; i < data.length; i++) {

                if (username.val().trim() === data[i].username && passwordInput.val().trim() === data[i].password) {
                    window.location.href = "/dashboard/" + data[i].uniqueId
                    return
                } else {
                    alert("Enter a valid user name and password")
                    return
                }
            }
        });
    };
});
