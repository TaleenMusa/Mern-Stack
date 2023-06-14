import React from 'react';
import { useParams } from 'react-router-dom';

const Color = () => {
  const { word, color, backgroundColor } = useParams();

  const style = {
    color: color,
    backgroundColor: backgroundColor,
  };

  return (
    <div>
      <h1 style={style}> {word}</h1>
    </div>
  );
}


export default Color
