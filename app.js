const body = document.querySelector('body');
const button = document.querySelector('#btn-toggle');

button.addEventListener('click', function () {
  body.classList.toggle('dark-mode');
});