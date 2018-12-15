$(document).ready(function () {
    // Users Info
    let goalName = $("#goal_name");
    let goalWeight = $("#goal_weight");
    let startDate = $("#start_date")
    let timeFrameAmount = $("#time_frame_amount");
    let timeFrameType = $("#time_frame");

    $(document).on("click", "#submitForm", handleUserFormSubmit);

    function handleUserFormSubmit(event) {
        event.preventDefault();
        // Don't do anything if the name fields hasn't been filled out
        if (!goalName.val().trim() || !goalWeight.val().trim() || !timeFrameAmount.val().trim() || !timeFrameType.val().trim() || !startDate.val().trim()) {
            return;
        }
        // Calling the upsertGoal function and passing in the value of the name input
        upsertGoal({
            name: goalName.val().trim(),
            goalWeight: goalWeight.val().trim(),
            startDate: startDate.val().trim(),
            timeFrameAmount: timeFrameAmount.val().trim(),
            timeFrameType: timeFrameType.val().trim(),
        });
    }

    function upsertGoal(userData) {
        $.post("/api/goals", userData)
    }
});
