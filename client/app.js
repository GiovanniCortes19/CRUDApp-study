// WAIT DOM LOAD
document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');

  const title = document.createElement('h1');
  title.innerText = 'Inside CRUD APP';
  title.style.textAlign = 'center';
  title.style.color = 'green';

  body.appendChild(title);
});
