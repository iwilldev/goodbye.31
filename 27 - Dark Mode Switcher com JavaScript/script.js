const button = document.querySelector('#btn');
const buttonIcon = document.querySelector('#btn p i')

let isThemeBlack = false;

button.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  button.classList.toggle('dark');

  if (isThemeBlack) {
    buttonIcon.classList.remove('icofont-moon')
    buttonIcon.classList.add('icofont-sun')
    isThemeBlack = false;
  } else {
    buttonIcon.classList.remove('icofont-sun')
    buttonIcon.classList.add('icofont-moon')
    isThemeBlack = true;
  }
})