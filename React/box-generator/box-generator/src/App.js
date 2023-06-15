import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker';
import ColorBox from './components/ColorBox';
import './bs.css';

function App() {
  const [colors, setColors] = useState([]);

  const addColor = (color) => {
    setColors([...colors,{ backgroundColor: color }]);
  }

  return (
    <div className='container'>
      <ColorPicker addColor={addColor} /> 
      <ColorBox colors={colors}/>
    </div>
  );
}

export default App;
