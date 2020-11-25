const imageContainer = document.querySelector('#images')
const images = document.querySelectorAll('#images img')

let imageId = 0;

function runCarousel() {
  imageId++;

  if (imageId > images.length - 1) {
      imageId = 0;
  }

  imageContainer.style.transform = `translateX(${-imageId * 600}px)`;
}

setInterval(runCarousel, 2000);