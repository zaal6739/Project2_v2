$(document).ready(function() {
  // Users Info
  let firstName = $("#first_name");
  let lastName = $("#last_name");
  let birthdate = $("#birthday");
  let gender = $("#gender");
  let heightFeet = $("#feet");
  let heightInches = $("#inches");
  let weight = $("#weight");
  let weightUnit = $("#weightUnit");
  // get unique is from url
  let url = window.location.href;
  let id = url.substring(url.lastIndexOf('/') + 1);



  $(document).on("click", "#submitForm", handleUserFormSubmit);

  function handleUserFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!firstName.val().trim() || !lastName.val().trim() || !birthdate.val().trim() || !heightFeet.val().trim() || !heightInches.val().trim() || !weight.val().trim()) {
      alert("Please, input all your information.")
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    updateUser({
      firstName: firstName.val().trim(),
      lastName: lastName.val().trim(),
      birthdate: birthdate.val().trim(),
      gender: gender.val().trim(),
      heightFeet: heightFeet.val().trim(),
      heightInches: heightInches.val().trim(),
      weight: weight.val().trim(),
    });
  }

  function updateUser(userData) {
    $.post("/api/users/" + id, userData)
    window.location.href = "/dashboard/" + id
  }
});
