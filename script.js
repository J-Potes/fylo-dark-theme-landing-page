const form = document.querySelector('form');
const submitButton = form.querySelector('input[type="submit"]');

submitButton.addEventListener('click', (event) => {
  form.classList.add('submitted');
});
