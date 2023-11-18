// CREATE MY COMPONENTS?

// WAIT FOR DOM TO LOAD BEFORE RUNNING ANY JS
document.addEventListener('DOMContentLoaded', () => {
  const title = document.createElement('h1');
  title.innerText = 'Grad Assessment Study: CRUD APP';
  title.style.textAlign = 'center';

  const body = document.querySelector('body');
  // INSERT TITLE HEADER INSIDE THE BODY
  body.appendChild(title);

  // LOG IN FORM
  const logIn = document.createElement('form');
  logIn.setAttribute('action', '/login');
  logIn.setAttribute('method', 'post');
  logIn.style.border = 'solid 1px black';
  logIn.style.borderRadius = '10px';
  logIn.style.padding = '10px';
  logIn.style.width = '40vw';
  logIn.style.display = 'flex';
  logIn.style.flexDirection = 'column';
  logIn.style.margin = 'auto';
  logIn.style.gap = '10px';
  // USERNAME & PASSWORD INPUT
  const usernameInput = document.createElement('input');
  usernameInput.setAttribute('type', 'text');
  usernameInput.setAttribute('placeholder', 'username');
  usernameInput.setAttribute('type', 'text');
  usernameInput.style.height = '30px';

  const passwordInput = document.createElement('input');
  passwordInput.setAttribute('type', 'text');
  passwordInput.setAttribute('placeholder', 'password');
  passwordInput.style.height = '30px';

  const submitButton = document.createElement('input');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('value', 'Log In');
  submitButton.style.height = '25px';

  // APPEND LOGIN INTO BODY
  logIn.append(usernameInput, passwordInput, submitButton);
  body.appendChild(logIn);
});
