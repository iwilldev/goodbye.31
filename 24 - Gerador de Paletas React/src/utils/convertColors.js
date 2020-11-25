/* 
  As funções para conversão dos padrões de cores utilizadas aqui e no 'App.js' 
  foram baseadas no artigo 'Converting Color Spaces in JavaScript' de Jon Kantner para o CSS-Tricks:
  https://css-tricks.com/converting-color-spaces-in-javascript/
*/

function validateH (h) {
  if (h < 0) {
    return h + 360;
  } else if (h > 360) {
    return h - 360 ;
  } else {
    return h;
  }
}

function validateS (s) {
  if (s < 0) {
    return s = 0;
  } else if (s > 100) {
    return s = 100;
  } else {
    return s;
  }
}

function validateL (l) {
  if (l < 0) {
    return l = 0;
  } else if (l > 100) {
    return l = 100;
  } else {
    return l;
  }
}

export function fillHsl(h,s,l) {
  h = validateH(h)
  s = validateS(s)
  l = validateL(l)
  
  s = s.toFixed(0)
  l = l.toFixed(0)
  return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}

export function fillText(h,s,l) {
  h = validateH(h)
  s = validateS(s)
  l = validateL(l)

  let lText = l - 50
  if (lText < 0) {
    lText += 100;
  }

  return 'hsl(' + h + ',' + s + '%,' + lText + '%)'
}

export function fillRgb(h,s,l) {
  h = validateH(h)
  s = validateS(s)
  l = validateL(l)

  s /= 100;
  l /= 100;

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
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return [r, g, b];
}

export function fillHex(r,g,b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length === 1)
    r = '0' + r;
  if (g.length === 1)
    g = '0' + g;
  if (b.length === 1)
    b = '0' + b;

  return '#' + r + g + b;
}

export function generateCardColors(hueVariation, saturationVariation, lightVariation) {
  let newColors = [];



  for (let colorIndex = 0; colorIndex <= 4; colorIndex++) {
    let hslValue = fillHsl(hueVariation[colorIndex],saturationVariation[colorIndex],lightVariation[colorIndex]);
    
    let textValue = fillText(hueVariation[colorIndex],saturationVariation[colorIndex],lightVariation[colorIndex]);

    let rgb = fillRgb(hueVariation[colorIndex],saturationVariation[colorIndex],lightVariation[colorIndex]);

    let rgbValue = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';

    let hexValue = fillHex(rgb[0], rgb[1], rgb[2]);

    newColors.push({
      hex: hexValue,
      rgb: rgbValue,
      hsl: hslValue,
      text: textValue
    })
  }
  return newColors;
}