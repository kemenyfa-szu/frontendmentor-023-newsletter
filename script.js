function ValidateForm() {
  const email = document.getElementById("email");
  const emailValidatorRegex =
    /^[a-z]([a-z0-9]*[._-]{0,1}[a-z0-9]+){3,}@[a-z]([a-z0-9]*[-]{0,1}[a-z0-9]+){3,}\.[a-z]{2,4}$/;

  if (email.value == "") {
    SetErrorStat(email, "Email must not be empty");
  } else if (!email.value.match(emailValidatorRegex)) {
    SetErrorStat(email, "Valid email required");
  } else {
    document.getElementById("subscribedEmail").innerHTML = email.value;
    document.getElementById("formSection").classList.add("form-valid");
  }
  return false;
}

function SetErrorStat(email, errorText) {
  email.classList.add("email-error");
  const emailError = document.getElementById("emailError");
  emailError.innerHTML = errorText;
  emailError.classList.add("email-error");
}

function Dismiss() {
  document.getElementById("formSection").classList.remove("form-valid");
}
