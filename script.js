const email = document.querySelector("#email");
const invalid = document.querySelector("#invalid");
const password = document.querySelector("#password");
const feedback = document.querySelector("#feedback");
const btnLogin = document.querySelector(".btn-login");
const signup = document.querySelector("#signup");
const forgotPassword = document.querySelector("#forgot-password");
const login = document.querySelector("#login");
//sign Up Form
const signupForm = document.querySelector("#signup-form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const signupEmail = document.querySelector("#signup-email");
const signupPassword = document.querySelector("#signup-password");
const confirmPassword = document.querySelector("#confirm-password");
const selector = document.querySelector("#select");
const btnSignup = document.querySelector("#btn-signup");
const invalidSignup = document.querySelector("#invalid-signup");
const feedbackSignup = document.querySelector("#feedback-signup");
const feedbackConfirm = document.querySelector("#confirm-feedback");

signupForm.style.display = "block";
login.style.display = "none";

// invalid.style.display = "none";

function ValidateInput() {
  const isValid = (email) => {
    const re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLowerCase());
  };

  // const validName = (firstName, lastName) => {
  //   const name = /^[a-zA-Z]+ [a-zA-Z]+$/;
  //   return name.test(String(firstName, lastName).toLowerCase());
  // };

  //Assigning input values

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
  ValidateInput();
});

function signupInputs() {
  const signupValid = (signupEmail) => {
    const re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(signupEmail).toLowerCase());
  };

  // const firstNameValue = firstName.value.trim();
  // const lastNameValue = lastName.value.trim();
  const signupPasswordValue = signupPassword.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();
  const signupEmailValue = signupEmail.value.trim();

  if (signupEmailValue === "") {
    invalidSignup.style.display = "block";
  } else if (!signupValid(signupEmailValue)) {
    invalidSignup.style.display = "block";
  } else {
    console.log("valid");
    invalidSignup.style.display = "none";
  }

  if (signupPasswordValue === "") {
    feedbackSignup.style.display = "block";
  } else if (signupPasswordValue.length < 8) {
    feedbackSignup.style.display = "block";
  } else {
    feedbackSignup.style.display = "none";
  }

  if (confirmPasswordValue === signupPasswordValue) {
    feedbackConfirm.style.display = "none";
  } else if (!confirmPasswordValue.match(signupPasswordValue)) {
    feedbackConfirm.style.display = "block";
  }
}

btnSignup.addEventListener("click", function () {
  event.preventDefault();
  signupInputs();
});

// signupForm.style.display = "none";

// signup.addEventListener("click", function () {
//   signupForm.style.display = "block";
//   login.style.display = "none";
// });
