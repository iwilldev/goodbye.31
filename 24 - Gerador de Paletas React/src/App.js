import React, { useState } from 'react';

import Analogous from './components/Analogous';
import Triad from './components/Triad';
import Monochromatic from './components/Monochromatic';
import Complementary from './components/Complementary';
import SplitComplementary from './components/SplitComplementary';
import Square from './components/Square';
import Composite from './components/Composite';
import Shadows from './components/Shadows';

import './App.css';

function App() {

  const [queryColor, setQueryColor] = useState('');
  const [hslProp, setHslProp] = useState(undefined);
  
  function generateColors(H) {

    let r = 0, g = 0, b = 0;

    if (/^#([A-Fa-f0-9]{6})$/.test(H)) {
      r = "0x" + H[1] + H[2];
      g = "0x" + H[3] + H[4];
      b = "0x" + H[5] + H[6];

      r /= 255;
      g /= 255;
      b /= 255;
      let cmin = Math.min(r,g,b),
          cmax = Math.max(r,g,b),
          delta = cmax - cmin,
          h = 0,
          s = 0,
          l = 0;

      if (delta === 0)
        h = 0;
      else if (cmax === r)
        h = ((g - b) / delta) % 6;
      else if (cmax === g)
        h = (b - r) / delta + 2;
      else
        h = (r - g) / delta + 4;

      h = Math.round(h * 60);

      if (h < 0)
        h += 360;

      l = (cmax + cmin) / 2;
      s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
      s = +(s * 100).toFixed(1);
      l = +(l * 100).toFixed(1);

      setHslProp({
        h: h,
        s: s,
        l: l
      });
    } else {
      setQueryColor('')
      setHslProp(undefined);
    }
  }

  return (
    <div 
      className="App" 
      style={
        hslProp 
        ? {
          background: 'hsl(' + hslProp.h + ',' + hslProp.s + '%,' + hslProp.l + '%, 50%)'
        } : {}
      }
    >
      <header>
        <div className="text">
          <h3><a href="https://omagotemum.site" target="_blank" rel="noreferrer noopener">MAGO</a>-ÍRIS: GERADOR DE CORES</h3>
          <p>Digite uma cor em formato HEX (#000000) no campo abaixo, para gerar paletas a partir dela.</p>
        </div>
        <form onSubmit={(event)=> {
          event.preventDefault();
          generateColors(queryColor)
        }}>
          <input 
            type="text"
            value={queryColor}
            onChange={(event) => setQueryColor(event.target.value)}
          />
          <button type="submit">
            Faça a Mágica!
          </button>
        </form>
      </header>
      
      {
        (hslProp )
        ? <>
            <Analogous colors={hslProp}/>
            <Triad colors={hslProp}/>
            <Monochromatic colors={hslProp}/>
            <Complementary colors={hslProp}/>
            <SplitComplementary colors={hslProp}/>
            <Square colors={hslProp}/>
            <Composite colors={hslProp}/>
            <Shadows colors={hslProp}/>
          </>
        : null 
      }
    </div>
  );
}

export default App;
