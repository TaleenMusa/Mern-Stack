import React from 'react'
import { useParams } from 'react-router-dom'

const Hello = () => {
    const {hello} = useParams();
  return (
    <div>
      <h1 style={{ color: "black" }}>The word is : {hello}</h1>
    </div>
  )
}

export default Hello
