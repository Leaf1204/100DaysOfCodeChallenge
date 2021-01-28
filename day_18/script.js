const toggel = document.getElementById('toggle');
const nav = document.getElementById('nav');

toggel.addEventListener('click', () => 
  nav.classList.toggle('active')
);
