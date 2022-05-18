import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BrLogin = () => {
  let nav = useNavigate();

  const [user, setUser] = useState({ br_username: '', br_password: '' })

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }


  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      br_username: user.br_username,
      br_password: user.br_password,

    }

    console.log(sendData);
    axios.post('http://localhost:3300/login', sendData)
      .then((result) => {
        if (result.data.Status === 'Invalid') {
          alert('invalid User');
        }
        else {
          nav('/');
          alert("Login Successful");
        }
      })
  }

  return (
    <form onSubmit={submitForm}>
      <div className="main-box1">
        <div className="row">
          <div className="col-md-12 text-center"><h1>Broker Login</h1></div>
        </div>

        <div className="row">
          <div  className="col-md-6" >Broker Username</div>
          <div className="col-md-6">
            <input  type="text" name="br_username" className="form-control" 
              onChange={handleChange} value={user.br_username} required/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">Broker Password</div>
          <div className="col-md-6">
            <input type="text" name="br_password" className="form-control" 
              onChange={handleChange} value={user.br_user} required/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <input type="submit" className="btn btn-success" value="Login" />
          </div>
        </div>
      </div>
    </form>
  )
}

export default BrLogin;