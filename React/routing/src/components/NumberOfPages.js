import React from 'react'
import { useParams } from 'react-router-dom';

const NumberOfPages = () => {
    const { number } = useParams();
    const parsedNumber = Number(number);
  return (
    <div>
      {isNaN(parsedNumber) ? (
        <h1>Invalid number
        </h1>
      ) : (
        <h1>The Number is: {parsedNumber}</h1>
      )}
    </div>
  )
}

export default NumberOfPages

