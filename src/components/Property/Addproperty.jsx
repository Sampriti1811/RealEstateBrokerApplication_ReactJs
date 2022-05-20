import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Home/Header";

const Addproperty = (props) => {
  let nav = useNavigate();

  const [data, setData] = useState({
    prop_id: "",
    prop_type: "",
    offer_type: "",
    city: "",
    price: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    //console.log(data);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      prop_id: data.prop_id,
      prop_type: data.prop_type,
      offer_type: data.offer_type,
      city: data.city,
      price: data.price,
    };

    console.log(sendData);
    axios.post("http://localhost:3300/addproperty", sendData).then((result) => {
      if (result.data.Status === "Invalid" || result.data.up) {
        alert("Retry");
      } else {
        nav("/property");
        alert("Property Added Successfully");
      }
    });
  };

  return (
    <>
      <Header />
      <div
        style={{
          marginTop: "40px",
          marginLeft: "250px",
          backgroundColor: "#E9E9E9",
          width: "800px",
          height: "470px",
          borderRadius: "25px",
          border: "1px solid #BFBFBF",
          backgroundColor: "white",
          boxShadow: "10px 10px 5px #aaaaaa",
        }}
      >
        <div className="main-box">
          <form onSubmit={submitForm} style={{marginTop:"10px"}}>
            <div className="row">
              <div className="col-md-12 text-center">
                <h1>Add Property Details Here</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">Property ID</div>
              <div className="col-md-6">
                <input
                style={{ width: "200px" }}
                  type="text"
                  name="prop_id"
                  className="form-control"
                  onChange={handleChange}
                  value={data.prop_id}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">Property Type</div>
              <div className="col-md-6">
                <input
                style={{ width: "200px" }}
                  type="text"
                  name="prop_type"
                  className="form-control"
                  onChange={handleChange}
                  value={data.prop_type}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">Offer Type</div>
              <div className="col-md-6">
                <input
                style={{ width: "200px" }}
                  type="text"
                  name="offer_type"
                  className="form-control"
                  onChange={handleChange}
                  value={data.offer_type}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">City</div>
              <div className="col-md-6">
                <input
                style={{ width: "200px" }}
                  type="text"
                  name="city"
                  className="form-control"
                  onChange={handleChange}
                  value={data.city}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">Price</div>
              <div className="col-md-6">
                <input
                style={{ width: "200px" }}
                  type="text"
                  name="price"
                  className="form-control"
                  onChange={handleChange}
                  value={data.price}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 text-center">
                <input
                  type="submit"
                  name="submit"
                  value="Add"
                  className="btn btn-success"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addproperty;
