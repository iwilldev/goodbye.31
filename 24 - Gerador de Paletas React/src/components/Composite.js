import React, { useEffect, useState } from 'react';

import ColorCard from './ColorCard';

import { generateCardColors } from '../utils/convertColors';

function Composite(props) {

  const [compositeColors, SetCompositeColors] = useState(null);

  useEffect(() => {
    SetCompositeColors([])
    const { h, s, l } = props.colors;
    
    const hueVariation = [h+15,h+15,h,h+170,h+160];
    const saturationVariation = [s+10,s-30,s,s-30,s+10];
    const lightVariation = [l-20,l-30,l,l,l-20];
    
    SetCompositeColors(() => generateCardColors(hueVariation, saturationVariation, lightVariation))
  }, [props.colors])

  return (
    <>
      <h3>COMPOSTO</h3>
      <div className='color-line'>
        {
          compositeColors
          ? compositeColors.map((color) => {
            return <ColorCard key={color.hsl} color={color}/>})
          : null
        }
      </div>
    </>
  )
}

export default Composite;