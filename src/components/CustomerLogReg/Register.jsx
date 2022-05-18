import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../Home/Header'

const Register = (props) => {

  let nav = useNavigate();

  const [data, setData] = useState({
    cust_id: "",
    cust_name: "",
    cust_password: "",
    cust_gender: "",
    cust_age: ""
  })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    //console.log(data);
  }

  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      cust_id: data.cust_id,
      cust_name: data.cust_name,
      cust_password: data.cust_password,
      cust_gender: data.cust_gender,
      cust_age: data.cust_age
    }

    console.log(sendData);
    axios.post('http://localhost:3300/addcustomer', sendData)
      .then((result) => {
        if (result.data.Status === 'Invalid' || result.data.up) {
          alert('Username already in use');
        }
        else {
          nav('/');
          alert("Registration Successful");
        }
      })
  }

  return (
    <>
    <Header/>
    <div className="main-box">
      <form onSubmit={submitForm}>
        <div className="row">
          <div className="col-md-12 text-center"><h1>Registeration</h1></div>
        </div>


        <div className="row">
          <div className="col-md-6">Customer ID</div>
          <div className="col-md-6">
            <input type="text" name="cust_id" className="form-control"
              onChange={handleChange} value={data.cust_id} required />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">Customer Username</div>
          <div className="col-md-6">
            <input type="text" name="cust_name" className="form-control"
              onChange={handleChange} value={data.cust_name} required />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">Customer Password</div>
          <div className="col-md-6">
            <input type="text" name="cust_password" className="form-control"
              onChange={handleChange} value={data.cust_password} required />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">Customer Gender</div>
          <div className="col-md-6">
            <input type="text" name="cust_gender" className="form-control"
              onChange={handleChange} value={data.cust_gender} required />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">Customer Age</div>
          <div className="col-md-6">
            <input type="text" name="cust_age" className="form-control"
              onChange={handleChange} value={data.cust_age} required />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <input type="submit" name="submit" value="Register" className="btn btn-success" />
          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default Register;