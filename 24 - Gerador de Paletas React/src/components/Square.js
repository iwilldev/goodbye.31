import React, { useEffect, useState } from 'react';

import ColorCard from './ColorCard';

import { generateCardColors } from '../utils/convertColors';

function Square(props) {

  const [squareColors, SetSquareColors] = useState(null);

  useEffect(() => {
    SetSquareColors([])
    const { h, s, l } = props.colors;
    
    const hueVariation = [h,h+90,h,h+180,h-90];
    const saturationVariation = [s+10,s-10,s,s+10,s+5];
    const lightVariation = [l,l,l,l,l];
    
    SetSquareColors(() => generateCardColors(hueVariation, saturationVariation, lightVariation))
  }, [props.colors])

  return (
    <>
      <h3>QUADRADO</h3>
      <div className='color-line'>
        {
          squareColors
          ? squareColors.map((color) => {
            return <ColorCard key={color.hsl} color={color}/>})
          : null
        }
      </div>
    </>
  )
}

export default Square;