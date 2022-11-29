import React from "react";

export default function TextForm(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3"> 
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
        ></textarea>
      </div>
    </div>
  );
}
