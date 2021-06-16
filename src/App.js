import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import InputForm from './components/InputForm';
import ResultsPage from './components/ResultsPage';

require('dotenv').config();
const token = process.env.API_KEY;

const apiCall = axios.create({
  baseURL: 'https://api.etherscan.io'
});

function App() {
  const [credentialsPage, setCredentialsPage] = useState(true);
  const [userCredentials, setUserCredentials] = useState({
    contract: "",
    address: ""
  });
  const [tokensResponse, setTokensResponse] = useState(null);

  const fetchTokens = function() {
    apiCall.get('/api?module=account', {
      params: {
        action: "tokenbalance",
        contractaddress: userCredentials.contract,
        address: userCredentials.address,
        tag: "latest",
        apikey: token
      }
    })
    .then(response => setTokensResponse(response.data.result));
  } 
  
  return (
    <div className="App">
      <Navbar />
      {credentialsPage && <InputForm 
        credentialsPage={credentialsPage}
        setCredentialsPage={setCredentialsPage}
        userCredentials={userCredentials}
        setUserCredentials={setUserCredentials}
        fetchTokens={fetchTokens}
      />}
      {!credentialsPage && <ResultsPage 
        credentialsPage={credentialsPage}
        setCredentialsPage={setCredentialsPage}
        fetchTokens={fetchTokens}
        tokensResponse={tokensResponse}
      />}
    </div>
  );
}

export default App;
