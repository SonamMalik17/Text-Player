import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title='Text Player' aboutText='About Text Player'/>
      {/* <Navbar/> */}
      {/* <Navbar title='Text Player'/> */}
      <div className="container my-3">
        <TextForm heading='Enter text to be analyzed below : '/>
      </div>
    </>
  );
}

export default App;
