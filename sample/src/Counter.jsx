import React,{useState,useEffect} from 'react'

function Counter() {
    const [count,setCount]=useState(0)
    const [count2,setCount2]=useState(0)
    useEffect( ()=>{
        console.log('Mounting...');
        console.log('count1...'+count);
        console.log('updating count2...'+count2)
        
    },[count])

    return (
        <div>
        <button onClick={()=>setCount(count+1)}> Increment </button>
        <h1>I am Champion : {count}</h1>
        <button onClick={()=>setCount2(count2+1)}> Increment </button>
        <h1>I am component 2 : {count2}</h1>
        </div> 
    )
    }

export default Counter
