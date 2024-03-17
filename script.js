function ValidateForm() {
  const email = document.getElementById("email");
  const emailValidatorRegex =
    /^[a-z]([a-z0-9]*[._-]{0,1}[a-z0-9]+){3,}@[a-z]([a-z0-9]*[-]{0,1}[a-z0-9]+){3,}\.[a-z]{2,4}$/;

  if (email.value == "") {
    SetEmailError(email, "Email must not be empty");
    return false;
  } else if (!email.value.match(emailValidatorRegex)) {
    SetEmailError(email, "Valid email required");
    return false;
  }
  document.getElementById("subscribedEmail").innerHTML = email.value;
  document.getElementById("formSection").classList.add("form-valid");
  ResetEmailError(email);
  return false;
}

function ResetEmailError(email) {
  email.classList.remove("email-error");
  email.value = "";
  const emailError = document.getElementById("emailError");
  emailError.innerHTML = "";
  emailError.classList.remove("email-error");
}

function SetEmailError(email, errorText) {
  email.classList.add("email-error");
  const emailError = document.getElementById("emailError");
  emailError.innerHTML = errorText;
  emailError.classList.add("email-error");
}

function Dismiss() {
  document.getElementById("formSection").classList.remove("form-valid");
}
