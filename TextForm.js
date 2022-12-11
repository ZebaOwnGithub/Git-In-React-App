import React, {useState} from 'react'

export default function TextForm(props) {

    let handleOnChange = (event)=>{
        console.log("handle change");
        setText(event.target.value);
    }

    let handleUpClick = ()=>{
        console.log("Change to Upper case" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    let handleLower = ()=>{
        console.log("changed to lower case");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const [text, setText] = useState("");
    

  return (
    <div>
       <div>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox"  rows="9"  />
        </div>
      </div>

      <button className='btn btn-primary mx-2' onClick={handleUpClick}>ConvertToUpperCase</button>
      <button className='btn btn-primary mx-2' onClick={handleLower}>ConvertToLowerCase</button>

      <div className='container my-3'>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words {text.length} character</p>
        <p>{0.008 * text.split(" ").length} Time needed to read</p>
      </div>

      <h3>Preview</h3>
      <p>{text}</p>
  </div>
);

}
