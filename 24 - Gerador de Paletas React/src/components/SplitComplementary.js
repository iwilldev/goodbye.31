import React, { useEffect, useState } from 'react';

import ColorCard from './ColorCard';

import { generateCardColors } from '../utils/convertColors';

function SplitComplementary(props) {

  const [splitComplementaryColors, SetSplitComplementaryColors] = useState(null);

  useEffect(() => {
    SetSplitComplementaryColors([])
    const { h, s, l } = props.colors;
    
    const hueVariation = [h+15,h+165,h,h+205,h-15];
    const saturationVariation = [s-5,s-10,s,s+10,s+5];
    const lightVariation = [l,l,l,l,l];
    
    SetSplitComplementaryColors(() => generateCardColors(hueVariation, saturationVariation, lightVariation))
  }, [props.colors])

  return (
    <>
      <h3>COMPLEMENTARES DIVIDIDAS</h3>
      <div className='color-line'>
        {
          splitComplementaryColors
          ? splitComplementaryColors.map((color) => {
            return <ColorCard key={color.hsl} color={color}/>})
          : null
        }
      </div>
    </>
  )
}

export default SplitComplementary;