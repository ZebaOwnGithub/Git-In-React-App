import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("Enter the text");
    console.log(useState("Enter the text"));
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        console.log("Onchange was done");
        setText(event.target.value);
    }

  return (
    <div>
    <h1>{props.heading}</h1>
    <div className="mb-3 my-8">
      <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows={8} defaultValue={""} />
    </div>

    <div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
  </div>
  )
}
