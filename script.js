'use stirct';

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
const firstNameValid = document.querySelector("#name-valid");
const lastNameValid = document.querySelector("#last-valid");

// invalid.style.display = "none";

function ValidateInput() {
  const isValid = (email) => {
    const re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLowerCase());
  };

  //Assigning input values

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "") {
    invalid.style.display = "block";
  } else if (!isValid(emailValue)) {
    invalid.style.display = "block";
  } else {
    invalid.style.display = "none";
  }

  if (passwordValue === "") {
    feedback.style.display = "block";
  } else if (
    !passwordValue.match(/[a-z]/g) &&
    !passwordValue.match(/[A-Z]/g) &&
    !passwordValue.match(/[0-9]/g) &&
    !passwordValue.match(/[^a-zA-Z\d]/g) &&
    !passwordValue.length >= 8
  ) {
    feedback.style.display = "block";
  } else {
    feedback.style.display = "none";
  }
}

function signupInputs() {
  const signupValid = (signupEmail) => {
    const re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(signupEmail).toLowerCase());
  };

  const signupPasswordValue = signupPassword.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();
  const signupEmailValue = signupEmail.value.trim();

  if (signupEmailValue === "") {
    invalidSignup.style.display = "block";
  } else if (!signupValid(signupEmailValue)) {
    invalidSignup.style.display = "block";
  } else {
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

  localStorage.setItem(signupPassword, JSON.stringify(signupPassword))
  localStorage.setItem(signupEmail, JSON.stringify(signupEmail))

  login.style.display = "block";
  signupForm.style.display = "none";
});

btnLogin.addEventListener("click", function () {
  event.preventDefault();
  ValidateInput();

  if(!localStorage === signupEmail ) {
    console.log('put your email');
  } else {
    console.log('done');
  }

  if(!localStorage === signupPassword) {
    console.log('wrong pin');
  } else {
    console.log('password set');
  }

  localStorage.getItem(signupPassword)
  localStorage.getItem(signupEmail)
});



signupForm.style.display = "none";

signup.addEventListener("click", function () {
  signupForm.style.display = "block";
  login.style.display = "none";
});