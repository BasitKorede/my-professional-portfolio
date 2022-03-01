const toggleButton = document.querySelector('.toggle-button');
const menuButton = document.querySelector('.x-button');
const navbarLinks = document.querySelector('.nav-ul');
const bodyElement = document.querySelector('body');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('display-none-sm');

  toggleButton.classList.add('display-none-sm');
  menuButton.classList.toggle('display-none-sm');
  bodyElement.style.overflow = 'hidden';
});

menuButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('display-none-sm');

  toggleButton.classList.toggle('display-none-sm');
  menuButton.classList.toggle('display-none-sm');
  bodyElement.style.overflow = 'auto';
});

navbarLinks.addEventListener('click', () => {
  navbarLinks.classList.toggle('display-none-sm');
});
