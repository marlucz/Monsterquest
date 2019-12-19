import './scss/style.scss';

window.addEventListener('DOMContentLoaded', function() {
  const fetchBtn = document.getElementById('fetchBtn');
  fetchBtn.addEventListener('click', () => {
    document.querySelectorAll('.hero__image').forEach(image => {
      image.classList.add('faded--monsters');
    });
    document.querySelector('.hero__header').classList.add('faded--hero');
  });
});
