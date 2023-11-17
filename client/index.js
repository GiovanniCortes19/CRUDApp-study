// CREATE MY COMPONENTS?

// WAIT FOR DOM TO LOAD BEFORE RUNNING ANY JS
document.addEventListener('DOMContentLoaded', () => {
  const title = document.createElement('h1');
  title.innerText = 'Grad Assessment Study: CRUD APP';
  title.style.textAlign = 'center';

  const body = document.querySelector('body');
  // INSERT TITLE HEADER INSIDE THE BODY
  body.appendChild(title);
});
