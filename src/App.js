import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import InputForm from './components/InputForm';
import ResultsPage from './components/ResultsPage';

const apiCall = axios.create({
  baseURL: 'https://api.etherscan.io/api?module=account'
})

function App() {
  const [credentialsPage, setCredentialsPage] = useState(true);

  return (
    <div className="App">
      <Navbar />
      {credentialsPage && <InputForm 
        credentialsPage={credentialsPage}
        setCredentialsPage={setCredentialsPage}
      />}
      {!credentialsPage && <ResultsPage 
        credentialsPage={credentialsPage}
        setCredentialsPage={setCredentialsPage}
      />}
    </div>
  );
}

export default App;
