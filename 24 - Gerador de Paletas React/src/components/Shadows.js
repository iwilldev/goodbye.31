import React, { useEffect, useState } from 'react';

import ColorCard from './ColorCard';

import { generateCardColors } from '../utils/convertColors';

function Shadows(props) {

  const [shadowsColors, SetShadowsColors] = useState(null);

  useEffect(() => {
    SetShadowsColors([])
    const { h, s, l } = props.colors;
    
    const hueVariation = [h,h,h,h,h];
    const saturationVariation = [s,s,s,s,s];
    const lightVariation = [25,50,75,90,l];
    
    SetShadowsColors(() => generateCardColors(hueVariation, saturationVariation, lightVariation))
  }, [props.colors])

  return (
    <>
      <h3>SOMBRAS</h3>
      <div className='color-line'>
        {
          shadowsColors
          ? shadowsColors.map((color) => {
            return <ColorCard key={color.hsl} color={color}/>})
          : null
        }
      </div>
    </>
  )
}

export default Shadows;