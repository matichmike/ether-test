import React from 'react';

function ResultsPage({setCredentialsPage}) {
  return (
    <div className="card login-card col-12 col-lg-4 mt-2 hv-center">
      <label htmlFor="resultsOutput">User has 100500 tokens</label>
      <a onClick={() => setCredentialsPage(true)} href="/" className="btn btn-secondary">Back To Home Page</a>
    </div>
  )
}

export default ResultsPage;