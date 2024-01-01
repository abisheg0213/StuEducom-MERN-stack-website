import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import Adminentry from './Components/Adminentry';
import Staffentry from './Components/Staffentry';
import DataEntry from './Components/DataEntry';
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home';
import Display from './Components/Display';
import Results from './Components/Results';
import Internals from './Components/Internals';
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coeadmin" element={<Adminentry/>}/>
        <Route path="/register" element={<DataEntry/>}/>
        <Route path="/staffadmin" element={<Staffentry/>}/>
        <Route path="/data/:regno" element={<Display/>}/>
        <Route path="/result/:regno" element={<Results/>}/>
        <Route path="/internals/:regno" element={<Internals/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
