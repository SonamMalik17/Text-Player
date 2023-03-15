import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      // document.body.style.backgroundColor='#273443';
      document.body.style.backgroundColor = "#1c2630";
      showAlert("Dark mode has been enabled!", "success");
      document.title = "Text Player - Dark mode";
      // setInterval(()=>{
      //   document.title='Text Player is amazing';
      // }, 2000);
      // setInterval(()=>{
      //   document.title='Install Text Player now';
      // }, 3000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled!", "success");
      document.title = "Text Player - Light mode";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="Text Player"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        {/* <Navbar/> */}
        {/* <Navbar title='Text Player'/> */}
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route
              exact
              path="/"
              element={ */}
                <TextForm
                  showAlert={showAlert}
                  heading="Enter text to be analyzed below : "
                  mode={mode}
                />
              {/* }
            /> */}
          {/* </Routes> */}
          {/* document.style.backgroundColor='#ccffff'; */}
          {/* document.body.style.backgroundColor='#66e0ff';  */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
