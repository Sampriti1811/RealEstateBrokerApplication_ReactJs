import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
} from "mdb-react-ui-kit";

import { Link } from "react-router-dom";

const Customer = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const[val,setVal] = useState("");

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    return await axios
      .get("http://localhost:3300/allproperty")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };

  console.log("data", data);

  const handleReset = () => {
    loadUserData();
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:3300/propertyByCity/${value}`)
      .then((response) => {
        setData(response.data);
        setValue("");
      })
      .catch((err) => console.log(err));
  };

  const handleSearchA = async(e) =>{
    e.preventDefault();
    return await axios
      .get(`http://localhost:3300/propertyByType/${val}`)
      .then((response) => {
        setData(response.data);
        setVal("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <MDBContainer>
      <form
        style={{
          marginTop: "10px",
          marginLeft:"436px",
          padding: "5px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        className="d-flex input-group w-auto"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Search By City..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
       
        <MDBBtn style={{marginLeft:"10px"}} type="submit" color="dark">
          Search
        </MDBBtn>
        <MDBBtn className="mx-2" color="warning" onClick={() => handleReset()}>
          Reset
        </MDBBtn>
      </form>
        
      <form
        style={{
          margin: "auto",
          padding: "5px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        className="d-flex input-group w-auto"
        onSubmit={handleSearchA}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Search By Type..."
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <MDBBtn style={{marginLeft:"10px"}} type="submit" color="dark">
          Search
        </MDBBtn>
        <MDBBtn className="mx-2" color="warning" onClick={() => handleReset()}>
          Reset
        </MDBBtn>
      </form>

      <body>
        <div style={{ marginTop: "60px"}}>
          <h2 className="text-center">Properties Available</h2>
          <MDBRow>
            <MDBCol size="12">
              <MDBTable>
                <MDBTableHead dark>
                  <tr>
                    <th scope="col">Serial No.</th>
                    <th scope="col">Property ID</th>
                    <th scope="col">Property Type</th>
                    <th scope="col">Price</th>
                    <th scope="col">Offer</th>
                    <th scope="col">City</th>
                    <th scope="col">Make Deal</th>
                  </tr>
                </MDBTableHead>
                {data.length === 0 ? (
                  <MDBTableBody>
                    <tr>
                      <td colSpan={8} className="text-center mb-0">
                        No Available Property
                      </td>
                    </tr>
                  </MDBTableBody>
                ) : (
                  data.map((item, index) => (
                    <MDBTableBody key={index}>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{item.prop_id}</td>
                        <td>{item.prop_type}</td>
                        <td>{item.price}</td>
                        <td>{item.offer_type}</td>
                        <td>{item.city}</td>
                        <td>
                          <button type="button"className="btn btn-dark btn-rounded" data-mdb-ripple-color="dark">
                          <Link style={{color:"white"}} to="/popup">Deal</Link>
                          </button>
                        </td>
                      </tr>
                    </MDBTableBody>
                  ))
                )}
              </MDBTable>
            </MDBCol>
          </MDBRow>
        </div>
      </body>
    </MDBContainer>
  );
};

export default Customer;
