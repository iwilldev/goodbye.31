import React, { useEffect, useState } from 'react';

import ColorCard from './ColorCard';

import { generateCardColors } from '../utils/convertColors';

function Monochromatic(props) {

  const [monochromaticColors, SetMonochromaticColors] = useState([]);
  
  useEffect(() => {
    SetMonochromaticColors([])
    const { h, s, l } = props.colors;
    
    const hueVariation = [h,h,h,h,h];
    const saturationVariation = [s,s,s,s,s];
    const lightVariation = [l-20,l-10,l,l+10,l+20];
    
    SetMonochromaticColors(() => generateCardColors(hueVariation, saturationVariation, lightVariation))
  }, [props.colors])

  return (
    <>
      <h3>MONOCROMÁTICAS</h3>
      <div className='color-line'>
        {
          monochromaticColors
          ? monochromaticColors.map((color) => {
            return <ColorCard key={color.hsl} color={color}/>
          }) : null
        }
      </div>
    </>
  )
}

export default Monochromatic;