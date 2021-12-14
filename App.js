import './App.js';
import React, { useState } from 'react';

//import About from './components/About.js'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert.js';
import About from './components/About.js';
// eslint-disable-next-line no-unused-vars
import { Routes ,Route } from 'react-router-dom';


function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (massege, type) => {
    setalert({
      msg: massege,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    },2000);
  }

  const toggleMode = () => {
    if (Mode === 'light') {
      
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.border = '2 px solid white'
      showAlert("Dark Mode is Enabled", "success");
      document.title="TextUtil-Dark Mode"
    }
    else {
      
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light Mode is Enabled", "success");
      document.title="TextUtil-Light Mode"
    }
  }

  return (
    <>
      <Navbar title="Texteditor" about="About Us" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
     
    
       <div className="container my-3">

      <Routes>
      {/*eslint-disable-next-line no-undef*/}
    
          <Route path="/about" element={<About/>}/>
           
      
          <Route path="/" element={<Textform showAlert={showAlert}/>}/>
     
        </Routes>
        </div>

    </>
  );
}

export default App;
