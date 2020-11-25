import React, { useEffect, useState } from 'react';

import ColorCard from './ColorCard';

import { generateCardColors } from '../utils/convertColors';

function Complementary(props) {

  const [complementaryColors, SetComplementaryColors] = useState(null);

  useEffect(() => {
    SetComplementaryColors([])
    const { h, s, l } = props.colors;
    
    const hueVariation = [h,h,h,h+180,h+180];
    const saturationVariation = [s,s,s,s,s];
    const lightVariation = [l-15,l+15,l,l-15,l];
    
    SetComplementaryColors(() => generateCardColors(hueVariation, saturationVariation, lightVariation))
  }, [props.colors])

  return (
    <>
      <h3>COMPLEMENTARES</h3>
      <div className='color-line'>
        {
          complementaryColors
          ? complementaryColors.map((color) => {
            return <ColorCard key={color.hsl} color={color}/>})
          : null
        }
      </div>
    </>
  )
}

export default Complementary;