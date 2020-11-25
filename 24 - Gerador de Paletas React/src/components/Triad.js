import React, { useEffect, useState } from 'react';

import ColorCard from './ColorCard';

import { generateCardColors } from '../utils/convertColors';

function Triad(props) {

  const [triadColors, setTriadColors] = useState(null);

  useEffect(() => {
    setTriadColors([])
    const { h, s, l } = props.colors;
    
    const hueVariation = [h-120,h-120,h,h+120,h+120];
    const saturationVariation = [s,s,s,s,s];
    const lightVariation = [l,l-15,l,l,l-15];
    
    setTriadColors(() => generateCardColors(hueVariation, saturationVariation, lightVariation))
  }, [props.colors])

  return (
    <>
      <h3>TRÍADE</h3>
      <div className='color-line'>
        {
          triadColors
          ? triadColors.map((color) => {
            return <ColorCard key={color.hsl} color={color}/>})
          : null
        }
      </div>
    </>
  )
}

export default Triad;