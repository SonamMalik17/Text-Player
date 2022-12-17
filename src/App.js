import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      // document.body.style.backgroundColor='#273443';
      document.body.style.backgroundColor='#1c2630';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';  
    }
  }
  return (
    <>
      <Navbar title='Text Player' aboutText='About Text Player' mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}
      {/* <Navbar title='Text Player'/> */}
      <div className="container my-3">
        <TextForm heading='Enter text to be analyzed below : ' mode={mode}/>
        {/* <About/> */}
        {/* document.style.backgroundColor='#ccffff'; */}
        {/* document.body.style.backgroundColor='#66e0ff';  */}
      </div>
    </>
  );;
}

export default App;
