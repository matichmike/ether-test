import React, {useState} from 'react';

function InputForm({setCredentialsPage, setUserCredentials, fetchTokens}) {
  const [state, setState] = useState({
    contract: "",
    address: ""
  });

  const handleChange = (event) => {
    setState(prevState => ({
      ...prevState, [event.target.id]: event.target.value
    }));
    setUserCredentials(prevState => ({
      ...prevState, [event.target.id]: event.target.value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchTokens();
    setCredentialsPage(false);
  }

  return (
    <div className="card login-card col-12 col-lg-4 mt-2 hv-center">
      <form onSubmit={(event) =>
            handleSubmit(event)
          }>
        <div className="form-group text-left">
          <label htmlFor="contractInput">Contract</label>
          <input 
            type="text"
            id="contract"
            className="form-control"
            placeholder="Enter Contract"
            value={state.contract}
            onChange={handleChange}
          />
        </div>

        <div className="form-group text-left">
          <label htmlFor="addressInput">Address</label>
          <input 
            type="text"
            id="address"
            className="form-control"
            placeholder="Enter Address"
            value={state.address}
            onChange={handleChange}
          />
        </div>

        <button 
          className="btn btn-secondary" 
          type="submit"
          
          >
            Submit
        </button>
      </form>
    </div>
  )
}

export default InputForm;