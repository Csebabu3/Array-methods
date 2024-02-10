import React, { useRef, useState } from 'react'

function NoRender() {
    const [Counter,setcounter] = useState(0);
    const counterref = useRef(0);
    const handlClick = () =>{
        setcounter(Counter+1);
    }
    const handlRef = () => {
        counterref.current++
    }
    console.log("I am rendering");
  return (
    <>
      <h1>{`Counter is ${Counter}`}</h1>
      <button onClick={handlClick}>Increment values</button>
      <h1>{`Ref is ${counterref.current}`}</h1>
      <button onClick={handlRef}>Increment values</button>
    </>
  )
}

export default NoRender
