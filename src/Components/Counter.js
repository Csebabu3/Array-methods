import React,{useState,useEffect} from 'react'

function Counter() {
    const [count,setCount] = useState(0);
    const [msg,setMsg] = useState('initial message');
    useEffect(() =>{
        console.log('component update')
        console.log(msg)
        console.log('count is incresed',count)
    },[count,msg]);
  return (
    <div>
      <button onClick={() =>{setCount(count+1)}}>Increment count</button>
      <p>the count values is{count}</p>
      <button onClick={() =>{setMsg('msg update click event')}}>update message</button>
    </div>
  )
}

export default Counter
