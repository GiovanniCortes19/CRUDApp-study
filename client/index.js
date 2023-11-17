// WAIT FOR DOM TO LOAD BEFORE RUNNING ANY JS
document.addEventListener('DOMContentLoaded', () => {
  const title = document.createElement('h1');
  title.innerText = 'Grad Assessment Study: CRUD APP';

  const body = document.querySelector('body');
  body.appendChild(title);
});
