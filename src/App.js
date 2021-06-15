import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import InputForm from './components/InputForm';

const apiCall = axios.create({
  baseURL: 'https://api.etherscan.io/api?module=account'
})

function App() {
  return (
    <div className="App">
      <Navbar />
      <InputForm />
    </div>
  );
}

export default App;
