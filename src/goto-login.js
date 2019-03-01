const goToLogin = () => {
  const selector = window.location.hostname == "my.northeastern.edu" ? "div.login-box a" : "div.loginBody a#ssoUrl"
  const loginButton = document.querySelector(selector);

  if (loginButton) {
    loginButton.click();
  }
}

document.addEventListener('DOMContentLoaded', goToLogin());
