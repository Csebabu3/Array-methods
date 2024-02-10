import React, { useState } from 'react'

function UseContext() {
    const [user,setUser] = useState("React")
  return (
    <div>
      <h1>Work on UseContext</h1>
      <Component1 user={user} />
    </div>
  )
}

export default UseContext

function Component1({user}){
    return(
        <>
        <h2>Component1</h2>
        <Component2 user={user} />
        </>
    )
}

function Component2({user}){
    return(
        <>
        <h2>Component2</h2>
        <Component3 user={user} />
        </>
    )
}

function Component3({user}){
    return(
        <>
        <h2>Component3</h2>
        <Component4 user={user} />
        </>
    )
}

function Component4({user}){
    return(
        <>
        <h2>Component4</h2>
        <Component5 user={user} />
        </>
    )
}
function Component5({user}){
    return(
        <>
        <h2>Component5</h2>
        <h1>{`user is ${user}`}</h1>
        </>
    )
}