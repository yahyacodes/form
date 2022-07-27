const email = document.querySelector("#email");
const invalid = document.querySelector("#invalid");
const password = document.querySelector("#password");
const feedback = document.querySelector("#feedback");
const btnLogin = document.querySelector(".btn-login");

// invalid.style.display = "none";

function ValidateEmail() {
  const isValid = (email) => {
    const re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLowerCase());
  };

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "") {
    console.log("invalid");
    invalid.style.display = "block";
  } else if (!isValid(emailValue)) {
    console.log("Validate");
    invalid.style.display = "block";
  } else {
    console.log("Valid");
    invalid.style.display = "none";
  }

  if (passwordValue === "") {
    console.log("put password");
    feedback.style.display = "block";
  } else if (
    !passwordValue.match(/[a-z]/g) &&
    !passwordValue.match(/[A-Z]/g) &&
    !passwordValue.match(/[0-9]/g) &&
    !passwordValue.match(/[^a-zA-Z\d]/g) &&
    !passwordValue.length >= 8
  ) {
    console.log("add password");
    feedback.style.display = "block";
  } else {
    console.log("strong password");
    feedback.style.display = "none";
  }
}

btnLogin.addEventListener("click", function () {
  event.preventDefault();
  ValidateEmail();
});
