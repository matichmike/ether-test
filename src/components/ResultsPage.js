import React from 'react';

function ResultsPage({setCredentialsPage, tokensResponse}) {
  return (
    <div className="card login-card col-12 col-lg-4 mt-2 hv-center">
      <label htmlFor="resultsOutput">User has {tokensResponse} tokens</label>
      <a onClick={(event) => {
        event.preventDefault();
        setCredentialsPage(true);
        }} href="/" className="btn btn-secondary">Back To Home Page</a>
    </div>
  )
}

export default ResultsPage;