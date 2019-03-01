const submitLoginForm = () => {
  const autocomplete =
    document.querySelector("input#username").value.length > 0 &&
    document.querySelector("input#password").value.length > 0;

  if (autocomplete) {
    document.querySelector("input.btn-submit").click();
  }
};

document.addEventListener('DOMContentLoaded', submitLoginForm())

