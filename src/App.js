import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = () =>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = "black"
    showAlert("Dark mode has been enabled.", "success")
    document.title = "ConvertCase - Dark Mode"
  }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled.", "success")
      document.title = "ConvertCase - Light Mode"
    }
  }
  return (
    <>
    <Router>
      

      <Navbar title="ConvertCase" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
               
          <Routes>
            <Route exact path="/about" element={<About/>} >

            </Route>

            <Route exact path="/home" element={<TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>}>

            </Route>
          </Routes>


      </div>


      </Router>

    </>
  );
}

export default App;

