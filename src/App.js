import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';

const apiCall = axios.create({
  baseURL: 'https://api.etherscan.io/api?module=account'
})

function App() {
  return (
    <Navbar />
  );
}

export default App;
