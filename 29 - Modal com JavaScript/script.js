const openButton = document.querySelector('#open');
const closeButton = document. querySelector('#close');
const container = document.querySelector('#container');

openButton.addEventListener('pointerdown', () => {
  container.classList.add('active');
  return openButton.removeEventListener('pointerdown', this);
})

closeButton.addEventListener('pointerdown', () => {
  container.classList.remove('active');
  return closeButton.removeEventListener('pointerdown', this);
})