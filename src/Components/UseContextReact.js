import React, { Component, useContext, useState } from 'react'
import { createContext } from 'react'

const userContext = createContext()

function UseContextReact() {
    const [user,setUser] = useState("React")
  return (

    <userContext.Provider value={user}>
      <h1>Work on UseContext</h1>
      <Component1 />
      </userContext.Provider>
    
  )
}

export default UseContextReact
function Component1(){
    return(
        <>
        <h2>Component1</h2>
        <Component2 />
        </>
    )
}

function Component2(){
    return(
        <>
        <h2>Component2</h2>
        <Component3  />
        </>
    )
}

function Component3(){
    return(
        <>
        <h2>Component3</h2>
        <Component4  />
        </>
    )
}

function Component4(){
    return(
        <>
        <h2>Component4</h2>
        <Component5 />
        </>
    )
}
function Component5(){
    const user = useContext(userContext)

    return(
        <>
        <h2>Component5</h2>
        <h1>{`user is ${user}`}</h1>
        </>
    )
}