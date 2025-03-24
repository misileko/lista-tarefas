import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/BackgroundColor.css';

function BackgroundColor(){

        const [color, setColor] = useState('');

         const handleChangeColor = color => {
           setColor(color);          
         };
         useEffect(()=>{
          document.body.style.backgroundColor = color;
         },[color]);

  return (
    <div className='container-input'>
      <input 
      type="radio" 
      name="color" 
      onChange={()=>{handleChangeColor("blueviolet")}}
      /> <label>Blueviolet</label>
      <input 
      type="radio" 
      name="color" 
      onChange={()=>{handleChangeColor("cadetblue")}}
      /> <label>Cadetblue</label>
      <input 
      type="radio" 
      name="color" 
      onChange={()=>{handleChangeColor("cornsilk")}}
      /> <label>Cornsilk</label>
      <input 
      type="radio" 
      name="color" 
      onChange={()=>{handleChangeColor("")}}
      /> <label>Reset</label>
    </div>
  )
}

export default BackgroundColor;