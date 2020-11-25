import React from 'react'

function ColorCard(props) {
  return (
    <>
      <div 
        key={props}
        className="color-alone" 
        style={
          props.color.hsl ? 
          {
            background: props.color.hsl
          } : {}}
      >
        <p>{props.color.hex}</p>
        <p>{props.color.rgb}</p>
        <p>{props.color.hsl}</p>
      </div>
    </>
  )
}

export default ColorCard;