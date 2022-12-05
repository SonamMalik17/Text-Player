import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleTrimClick = () => {
    let regexPattern = /\s+/g;
    let newText = text.replace(regexPattern, " ");
    setText(newText);
  };
  const handleClearClick = () => {
    setText("");
  };
  const handleCopyClick = () => {
    console.log("Copy was clicked");
    navigator.clipboard.writeText(text);
  };
  const handleReverseClick = () => {
    let newString = "";
    for (let i = text.length - 1; i >= 0; i--) newString += text[i];
    setText(newString);
  };
  const handleSpeakClick = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById("toggle");
    if (toogle.textContent === "Recite Text") {
      toogle.innerHTML = "Stop";
    } else {
      toogle.innerHTML = "Recite Text";
      if (toogle.innerHTML === "Recite Text") {
        window.speechSynthesis.cancel();
      }
    }
  };
  const handleUndoClick = () => {
    let newText = text.substring(0, text.length - 1);
    setText(newText);
  };
  const handleDownloadClick = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
  };
  const handleParagraphClick = () => {
    let newText = text.replaceAll(".", ".\n");
    setText(newText);
  };
  const handleOppositeClick = () => {
    let newText = text
      .split("")
      .map(function (letter) {
        if (letter.toUpperCase() === letter) {
          return letter.toLowerCase();
        } else {
          return letter.toUpperCase();
        }
      })
      .join("");
    setText(newText);
  };
  const handleCapitalizeSClick = () => {
    if (window.getSelection) {
      let selectedText = window.getSelection().toString();
      if (selectedText) {
        let newText = text.replace(selectedText, selectedText.toUpperCase());
        setText(newText);
      }
    }
  };
  const handleSearchClick = () => {
    let str = prompt("Enter the string you wanna Search :");
    let newText = text.includes(str, 0);
    if (newText === true) {
      setText("the string " + str + " is present..");
    } else {
      setText("the string " + str + " is not present..");
    }
  };
  const handleVowelClick = () => {
    let newText = text.match(/[aeiou]/gi).length;
    setText(newText);
  };
  const handleReplaceClick = () => {
    let repval = prompt("Enter the word to be replaced:");
    let tobereplaced = new RegExp(repval, "g");
    let toreplace = prompt("Enter the text that you want to replace with:");
    let newText = text.replace(tobereplaced, toreplace);
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
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
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary" onClick={handleTrimClick}>
          Trim Whitespaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleReverseClick}>
          Reverse Text
        </button>
        <button
          className="btn btn-primary"
          onClick={handleSpeakClick}
          id="toggle"
        >
          Recite Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleUndoClick}>
          Undo Text
        </button>
        <button className="btn btn-primary my-1" onClick={handleDownloadClick}>
          Download Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleParagraphClick}>
          Paragraph Break
        </button>
        <button className="btn btn-primary" onClick={handleOppositeClick}>
          Opposite Case
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleCapitalizeSClick}
        >
          Capitalize Selected Text
        </button>
        <button className="btn btn-primary" onClick={handleSearchClick}>
          Search Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleVowelClick}
        >
          Vowel Count
        </button>
        <button className="btn btn-primary" onClick={handleReplaceClick}>
          Replace Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.length} characters,{" "}
          {text.length > 0 ? text.split(" ").length : 0} words
          {/* , {text.length>0 ? text.split('\n').length : 0} lines */}
        </p>
        <p>
          {text.length > 0 ? 0.008 * text.split(" ").length : 0} Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
