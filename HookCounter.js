import React, {useState, useEffect} from 'react'

export default function HookCounter() {
    const [channelname, setname] = useState("This is Hook");
    const [counter, setcounter] = useState(0);
    const [counter1, setcounter1] = useState(0);

    const stateHandler = ()=>{
        setname("Changed Hook");
    }

    const Increment = ()=>{
        setcounter(counter+1)
    }

    const Decrement=()=>{
        setcounter1(counter1-1)
    }

    useEffect(()=>{
        console.log("Zeba");
    })
  return (
    <div>
      {channelname}
      <button onClick={stateHandler}>Click</button>
      <button onClick={Increment}>Increment{counter}</button>
      <button onClick={Decrement}>Decrement{counter1}</button>
    </div>
  )
}
