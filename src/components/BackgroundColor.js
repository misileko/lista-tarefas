import React, { useEffect, useState } from 'react';

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
    <div className='container-radio-button'>
      <input 
      type="radio" 
      name="color" 
      onChange={()=>{handleChangeColor("blueviolet")}}
      /> <label>Blueviolet</label><br/>
      <input 
      type="radio" 
      name="color" 
      onChange={()=>{handleChangeColor("cadetblue")}}
      /> <label>Cadeblue</label><br/>
      <input 
      type="radio" 
      name="color" 
      onChange={()=>{handleChangeColor("cornsilk")}}
      /> <label>Cornsilk</label><br/>
      <input 
      type="radio" 
      name="color" 
      onChange={()=>{handleChangeColor("")}}
      /> <label>Reset</label>
    </div>
  )
}

export default BackgroundColor;