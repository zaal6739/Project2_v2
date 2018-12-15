$(document).ready(function () {
    var goalName = $("#goal_name");
    var goalWeight = $("#goal_weight");
    var timeFrameAmount = $("#time_frame_amount");
    var timeFrame = $("#time_frame");
    // get unique is from url
    let url = window.location.href;
    let id = url.substring(url.lastIndexOf('/') + 1);

    $(document).on("click", "#submitForm", handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();
        // Don't do anything if the name fields hasn't been filled out
        if (!goalName.val().trim().trim() || !goalWeight.val().trim().trim() || !timeFrameAmount.val().trim().trim() || !timeFrame.val().trim().trim()) {
            return;
        }

        // Calling the upsertAuthor function and passing in the value of the name input
        addGoalToDB({
            name: goalName.val().trim(),
            goalWeight: goalWeight.val().trim(),
            timeFrameAmount: timeFrameAmount.trim(),
            timeFrameType: timeFrame.val().trim()
        });
    }

    function addGoalToDB(goalData) {
        $.post("/api/goals", goalData);
        window.location.href = "/dashboard/" + id
    }





    // dashboard profile
    let tableUserName = $("#tableUserName")
    let tableFirstName = $("#tableFirstName")
    let tableLastName = $("#tableLastName")
    let tableEmail = $("#tableEmail")
    let tableBirthday = $("#tableBirthday")
    let tableGender = $("#tableGender")
    let tableHeight = $("#tableHeight")
    let tableWeight = $("#tableWeight")

    $.get("/api/users/" + id, function (data) {
        // console.log(data[0])
        tableUserName.html(data[0].username)
        tableFirstName.html(data[0].firstName)
        tableLastName.html(data[0].lastName)
        tableEmail.html(data[0].email)
        tableBirthday.html(data[0].birthdate.substring(0,10))
        tableGender.html(data[0].gender)
        tableHeight.html(data[0].heightFeet + "' " + data[0].heightInches + '"')
        tableWeight.html(data[0].weight)

    });
})
