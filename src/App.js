// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import {BrowserRouter ,Route,Routes} from "react-router-dom";


function App() {
  let [darkMode, setdarkMode] = useState("light");

  let togglemodefunc = () => {
    if (darkMode === "light") {
      setdarkMode("dark");
      document.body.style.backgroundColor = "black";
      setMsg("Dark Mode has been enabled", "success");
      document.title = "TextUtils -DarkMode ";
    } else {
      setdarkMode("light");
      document.body.style.backgroundColor = "white";
      setMsg("Light Mode has been enabled", "success");
      document.title = "TextUtils -Ligth mode ";
    }
  };

  //  for alert
  const [alertMsg, setalertmsg] = useState(null);
  //type is --> success, primary, danger etc
  const setMsg = (message, type) => {
    setalertmsg({
      msg: message,
      type: type,
    });
    //removing alter after 2 sec
    setTimeout(() => {
      setalertmsg(null);
    }, 1500);
  };

  return (
    
    // <h1></h1> <-- not allowed
    <>
      {/* <Navbar title= "TextUtils" downTxt = "Down_btn"></Navbar> */}
      <BrowserRouter>
      <Navbar mode={darkMode} toggleMode={togglemodefunc} />
      <Alert alertMsg={alertMsg} />
      
      <div className="container my-3">
         <Routes>
              <Route path="/" element ={<TextForm
              setMsg={setMsg}
              heading="Enter the text to analyze"
              mode={darkMode}
              heading2="Summary"
            />} />
            <Route path="/about" element={<About />}/>
         </Routes>
            
          
            
       
            
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
