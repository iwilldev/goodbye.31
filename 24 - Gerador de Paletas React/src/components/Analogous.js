import React, { useEffect, useState } from 'react';

import ColorCard from './ColorCard';

import { generateCardColors } from '../utils/convertColors';

function Analogous(props) {

  const [analogousColors, SetAnalogousColors] = useState([]);

  useEffect(() => {
    SetAnalogousColors([])
    const { h, s, l } = props.colors;
    
    const hueVariation = [h-20,h-10,h,h+10,h+20];
    const saturationVariation = [s-5,s+5,s,s+5,s-5];
    const lightVariation = [l,l-9,l,l-9,l];
    
    SetAnalogousColors(() => generateCardColors(hueVariation, saturationVariation, lightVariation))
  }, [props.colors])

  return (
    <>
      <h3>ANÁLOGAS</h3>
      <div className='color-line'>
        {
          analogousColors
          ? analogousColors.map((color) => {
            return <ColorCard key={color.hsl} color={color}/>
            }) : null
        }
      </div>
    </>
  )
}

export default Analogous;