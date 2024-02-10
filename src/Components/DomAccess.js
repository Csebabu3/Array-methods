import React, { useEffect, useRef } from 'react'

function DomAccess() {
    const textref = useRef();
    useEffect(() =>{
        textref.current.focus()
    },[])
  return (
    <div>
      <input ref={textref} type='text'></input>
    </div>
  )
}

export default DomAccess
