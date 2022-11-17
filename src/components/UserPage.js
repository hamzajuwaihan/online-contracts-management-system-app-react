import React, { useEffect, useRef } from "react";
import "../UserPage.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

export default function UserPage() {

    const navigate = useNavigate();
  const auth = useAuth();
  const close = useRef(null)

  const id = sessionStorage.getItem("user_id");

  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value ,employee_id:id}));
    console.log(inputs)
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost/API_7/contract.php", inputs)
      .then(function (response) {
        console.log(response.data);
        close.current.click()

        navigate("/UserPage");
      });
  };


  const [contracts, setUsers] = useState([]);
  useEffect(() => {
      getUsers();
  }, []);

  function getUsers() {
      axios.get('http://localhost/API_7/contract.php').then(function(response) {
          console.log(response.data);
          setUsers(response.data);
      });
  }








  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.0/css/boxicons.min.css"
        integrity="sha512-pVCM5+SN2+qwj36KonHToF2p1oIvoU3bsqxphdOIWMYmgr4ZqD3t5DjKvvetKhXGc/ZG5REYTT6ltKfExEei/Q=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css"
        integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc="
        crossOrigin="anonymous"
      />
      <div className="container">
        <div className="row align-items-center mt-3">
          <div className="col-md-6">
            <div className="mb-3">
              <h5 className="card-title">
                Contact List{" "}
                <span className="text-muted fw-normal ms-2">(834)</span>
              </h5>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                add new contract
              </button>
            </div>
          </div>
        </div>
        <div className="row">

                    {contracts.map((contract, key) =>
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="dropdown float-end">
                 
                </div>
                <div className="d-flex align-items-center">
                  <div className="flex-1 ms-3">
                    <h5 className="font-size-16 mb-1">
                      <a href="#" className="text-dark">
                       {contract.contract_name}
                      </a>
                    </h5>
                    <span className="badge badge-soft-success mb-0">
                      Full Stack Developer
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-1">
                  <p className="text-muted mb-0">
                    <i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary" />{" "}
                {contract.Legal_officer_name}
                  </p>
                  <p className="text-muted mb-0 mt-2">
                    <i className="mdi mdi-email font-size-15 align-middle pe-2 text-primary" />{" "}
                    PhyllisGatlin@spy.com
                  </p>
                  <p className="text-muted mb-0 mt-2">
                    <i className="mdi mdi-google-maps font-size-15 align-middle pe-2 text-primary" />{" "}
                    52 Ilchester MYBSTER 9WX
                  </p>
                </div>
                <div className="d-flex gap-2 pt-4">
                  <button
                    type="button"
                    className="btn btn-soft-primary btn-sm w-50"
                  >
                    <i className="bx bx-user me-1" /> Profile
                  </button>
                  <button type="button" className="btn btn-primary btn-sm w-50">
                    <i className="bx bx-message-square-dots me-1" /> Contact
                  </button>
                  
                </div>
              </div>
            </div>
          </div>)}
        </div>
      </div>

      {/*Modal*/}
      <form onSubmit={handleSubmit}>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
   
            <div className="modal-content">
            
              <div className="modal-header">
              
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add new Contract
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
        
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">contract name:</label>
                  <input
                    type="text"
                    name="contract_name"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                    value={inputs.contract_name}
                    
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Signing_date</label>
                  <input
                    type="date"
                    name="Signing_date"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                    value={inputs.Signing_date}
                    
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">exprtion_date</label>
                  <input
                    type="date"
                    name="exprtion_date"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                    value={inputs.Signing_date}
                    
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">total_cost</label>
                  <input
                    type="number"
                    name="total_cost"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                    value={inputs.total_cost}
                    
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">amount</label>
                  <input
                    type="number"
                    name="amount"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                    value={inputs.amount}
                    
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">items type</label>
                  <input
                    type="text"
                    name="items"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                    value={inputs.items}
                    
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Legal_officer_name</label>
                  <input
                    type="text"
                    name="Legal_officer_name"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                    value={inputs.Legal_officer_name}
                    
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">
                    warranty_start_date
                  </label>
                  <input
                    type="date"
                    name="warranty_start_date"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                    value={inputs.warranty_start_date}
                    
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">warranty__end_date</label>
                  <input
                    type="date"
                    name="warranty__end_date"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                    value={inputs.warranty__end_date}
                    
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">company_name</label>
                  <input
                    type="text"
                    name="company_name"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                    value={inputs.company_name}
                    
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">address</label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleChange}

                    value={inputs.address}
                    
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">company_phone</label>
                  <input
                    type="text"
                    name="company_phone"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                    value={inputs.company_phone}
                
                  />
                </div>
              

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">
                    liaison_officer_name
                  </label>
                  <input
                    type="text"
                    name="liaison_officer_name"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                    value={inputs.liaison_officer_name}
            
                  />
                </div>
                <input type="hidden" name="employee_id"  value={id}/>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal" ref={close}
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary" 
                >
                  Add
                </button>
               
              </div>
            </div>
          </div>
        </div>
        </form>

    
    </div>
  );
}
