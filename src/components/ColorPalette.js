import React from 'react'
import '../styles/ColorPalette.css';


export default function ColorPalette(props){

  const onSelectColor = (color) => {
    props.onSelectColor(color);
  };
     
  return (
    <div className="ColorPalette">
      {props.colors.map((color, index) => (
        <div
          key={index}
          className="ColorOption"
          style={{ backgroundColor: color}}
          onClick={() => onSelectColor(color)}
        />
      ))}
    </div>
  )
}
