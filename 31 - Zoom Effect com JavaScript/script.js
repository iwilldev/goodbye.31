const container = document.querySelector('#container');
const image = document.querySelector('#container img');

container.addEventListener('mousemove', (event) => {
  const x = event.clientX - event.target.offsetLeft;
  const y = event.clientY - event.target.offsetTop;

  image.style.transformOrigin = `${x}px ${y}px`;
  image.style.transform = "scale(2)";
  return container.removeEventListener('mousemove', this);
});

container.addEventListener('mouseleave', () => {
  image.style.transformOrigin = "center center";
  image.style.transform = "scale(1)";
  return container.removeEventListener('mouseleave', this);
})