const submitLoginForm = () => {
  const username = document.querySelector("input#username");
  const password = document.querySelector("input#password");

  if (
    username &&
    username.value.length > 0 &&
    password &&
    password.value.length > 0
  ) {
    document.querySelector("input.btn-submit").click();
  }
};

document.addEventListener("DOMContentLoaded", submitLoginForm());
