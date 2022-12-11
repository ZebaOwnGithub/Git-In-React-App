import React from 'react'

export default function FunctionClick() {

  function changeEvent(e){
    e.preventDefault();
    console.log("Event happened");
  }

  return (
    <div>

    <a href="https://getbootstrap.com/docs/5.2/components/navbar/#how-it-works" onClick={changeEvent}> Hit </a><br></br>
    <button onClick={changeEvent}>Click Me</button>
    </div>
  )
}
