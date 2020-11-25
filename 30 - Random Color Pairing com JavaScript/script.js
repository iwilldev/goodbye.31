const changeButton = document.querySelector('#change');
const firstColorText = document.querySelector('#first-color-text');
const secondColorText = document.querySelector('#second-color-text');
const firstColorSquare = document.querySelector('#first-color-square');
const secondColorSquare = document.querySelector('#second-color-square');

changeButton.addEventListener('pointerdown', () => {
  let randomColorsArray = randomColors();
  console.log(randomColorsArray)

  document.body.style.backgroundColor = randomColorsArray[1];
  document.body.style.color = randomColorsArray[0];

  changeButton.style.backgroundColor = randomColorsArray[0];
  changeButton.style.color = randomColorsArray[1];

  firstColorText.innerHTML = HSLToHex(randomColorsArray[0]);
  secondColorText.innerHTML = HSLToHex(randomColorsArray[1]);

  firstColorSquare.style.backgroundColor = randomColorsArray[0];
  firstColorSquare.style.borderColor = randomColorsArray[1];

  secondColorSquare.style.backgroundColor = randomColorsArray[1];
  secondColorSquare.style.borderColor = randomColorsArray[0];

  return changeButton.removeEventListener('pointerdown', this);
})

function randomColors() {
  let hue = Math.floor(Math.random() * 360);
  let hueColor = hue - (360 / Math.ceil(Math.random() * 3));
  if (hueColor < 0) {
    hueColor += 360;
  }
  let saturation = Math.floor(Math.random() * 100);

  return [`hsl(${hue}, ${saturation}%, 80%)`, `hsl(${hueColor}, ${saturation}%, 20%)`]
}

function HSLToHex(hsl) {
  let sep = hsl.indexOf(",") > -1 ? "," : " ";
  hsl = hsl.substr(4).split(")")[0].split(sep);

  let h = hsl[0],
      s = hsl[1].substr(0,hsl[1].length - 1) / 100,
      l = hsl[2].substr(0,hsl[2].length - 1) / 100;
        
  // Strip label and convert to degrees (if necessary)
  if (h.indexOf("deg") > -1)
    h = h.substr(0,h.length - 3);
  else if (h.indexOf("rad") > -1)
    h = Math.round(h.substr(0,h.length - 3) * (180 / Math.PI));
  else if (h.indexOf("turn") > -1)
    h = Math.round(h.substr(0,h.length - 4) * 360);
  if (h >= 360)
    h %= 360;

  let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c/2,
      r = 0,
      g = 0,
      b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  // Having obtained RGB, convert channels to hex
  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  // Prepend 0s, if necessary
  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}