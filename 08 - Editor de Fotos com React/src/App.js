import React, { useState, useEffect } from 'react';
import * as htmlToImage from 'html-to-image';

import './App.css';

function App() {

  const defaulValues = [100, 100, 100, 0, 0, 0, 0, 0];

  const [valuesIndex, setValuesIndex] = useState(0);
  const [adjustedValues, setAdjustedValues] = useState(defaulValues);
  const [previewImage, setPreviewImage] = useState('');

  const defaultRange = [
    {
      min: 0,
      max: 200
    },
    {
      min: 0,
      max: 200
    },
    {
      min: 0,
      max: 200
    },
    {
      min: 0,
      max: 100
    },
    {
      min: 0,
      max: 360
    },
    {
      min: 0,
      max: 100
    },
    {
      min: 0,
      max: 100
    },
    {
      min: 0,
      max: 10
    },
  ]

  useEffect(() => {

    let canvaImage = document.querySelector('#canva-image');
    canvaImage.style.filter = `brightness(${adjustedValues[0]}%) contrast(${adjustedValues[1]}%) saturate(${adjustedValues[2]}%) grayscale(${adjustedValues[3]}%) hue-rotate(${adjustedValues[4]}deg) invert(${adjustedValues[5]}%) sepia(${adjustedValues[6]}%) blur(${adjustedValues[7]}px)`;

  }, [adjustedValues])

  function saveToJpeg() {
    htmlToImage.toJpeg(document.querySelector('#canva-image'), { quality: 1 })
    .then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'editei-com-o-mago.jpeg';
      link.href = dataUrl;
      link.click();
    });
  }

  return (
    <>
      <div className="App">
        
        <header>
          <div className="input">
            <p>Insira sua imagem:</p>
            <input type="file" accept="image/jpg, image/png, image/jpeg" onChange={(event) => {
              setAdjustedValues(defaulValues);

              var img = new Image();
              img.src = URL.createObjectURL(event.target.files[0]);
              setPreviewImage(img.src)
            }}/>
          </div>
          <button 
            className={!previewImage ? 'hidden' : ''} 
            onClick={saveToJpeg}
          >Salvar</button>
        </header>
        <img 
          id="canva-image"
          src={previewImage}
          alt="Selecione uma imagem (PNG/JPG) na barra acima"
        >
        </img>
        <footer>
          <input 
            type="range" 
            value={adjustedValues[valuesIndex]} 
            min={defaultRange[valuesIndex].min} 
            max={defaultRange[valuesIndex].max} 
            onChange={(event) => {
                let values = [...adjustedValues];
                values[valuesIndex] = event.target.value;
                setAdjustedValues(values);
              }}
          />
          <ul>
            <li className={valuesIndex === 0 ? 'selected' : ''} onClick={() => setValuesIndex(0)}>Brilho</li>
            <li className={valuesIndex === 1 ? 'selected' : ''} onClick={() => setValuesIndex(1)}>Contraste</li>
            <li className={valuesIndex === 2 ? 'selected' : ''} onClick={() => setValuesIndex(2)}>Saturação</li>
            <li className={valuesIndex === 3 ? 'selected' : ''} onClick={() => setValuesIndex(3)}>E. Cinza</li>
            <li className={valuesIndex === 4 ? 'selected' : ''} onClick={() => setValuesIndex(4)}>Hue</li>
            <li className={valuesIndex === 5 ? 'selected' : ''} onClick={() => setValuesIndex(5)}>Inverter</li>
            <li className={valuesIndex === 6 ? 'selected' : ''} onClick={() => setValuesIndex(6)}>Sépia</li>
            <li className={valuesIndex === 7 ? 'selected' : ''} onClick={() => setValuesIndex(7)}>Desfoque</li>
          </ul>
        </footer>
      </div>
      <a href="https://omagotemum.site" target="_blank" rel="noreferrer noopener">Made by Mago</a>
    </>
  );
}

export default App;
