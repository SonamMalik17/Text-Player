import React, {useState} from "react";


export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleTrimClick=()=>{
      let regexPattern=/\s+/g;
        let newText=text.replace(regexPattern," ");
        setText(newText);
    }
    const handleClearClick=()=>{
        setText('');
    }
    const handleCopyClick=()=>{
        let newText=text;
        setText(newText);
    }
    const handleReverseClick=()=>{
      let newString = "";
      for (let i = text.length - 1; i >= 0; i--) 
          newString += text[i];
      setText(newString);
  }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
      <div className="mb-3"> 
        <textarea
          value={text}
          onChange={handleOnChange}
          className="form-control"
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary" onClick={handleTrimClick}>Trim Whitespaces</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary" onClick={handleCopyClick}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleReverseClick}>Reverse Text</button>
    </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.length} characters, {text.length>0 ? text.split(" ").length : 0} words
        {/* , {text.length>0 ? text.split('\n').length : 0} lines */}
        </p>
        <p>{text.length>0 ? 0.008*text.split(" ").length : 0} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
    
  );
}
