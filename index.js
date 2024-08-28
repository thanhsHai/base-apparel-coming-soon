var errorIcon = document.querySelector("#error-icon");
var errorMessage = document.querySelector("#error-message");
var submitBtn = document.querySelector("Button");

function handleSubmitBtn() {
  var email = document.querySelector("input").value;

  if (!isValidEmail(email)) {
    if (
      errorIcon.classList.contains("display-none") &&
      errorMessage.classList.contains("display-none")
    ) {
      errorIcon.classList.remove("display-none");
      errorMessage.classList.remove("display-none");
    }
  } else {
    if (
      !errorIcon.classList.contains("display-none") &&
      !errorMessage.classList.contains("display-none")
    ) {
      errorIcon.classList.add("display-none");
      errorMessage.classList.add("display-none");
    }
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

submitBtn.addEventListener("click", handleSubmitBtn);
