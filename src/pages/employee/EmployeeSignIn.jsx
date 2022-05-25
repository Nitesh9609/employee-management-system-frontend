import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { storeEmployee } from "../../redux/empDetails/empDetail.action";
import { useEffect } from "react";
import "./EmployeeSignIn.css";

const EmployeeSignIn = ({ sendEmployee, getEmployee }) => {
  const navigate = useNavigate();
  // const nav = ()=> navigate(`/empDetail/${getEmployee._id}`)
  const [input, setInput] = useState({});
  const [id, setId] = useState({});
  var data = [];

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleOnClick = async () => {

    const res = await axios
      .post(
        "https://employee-management-system-backend-rust.vercel.app/app/user/employeeSignIn",
        // "http://localhost:8080/app/user/employeeSignIn",
        input
      )
      

      .then((res) => {
        sendEmployee(res.data);
        if(res.data){
          alert("login successfully")
        navigate(`/empDetail/${res.data._id}`)
        }
      })

      .catch((err) => {
        console.log(err);
        if (err) {
          alert("Something Went Wrong Please Check Your Email and Password");
          navigate("/employee");
        }
      });
    
  };

  

  return (
    <>
      <div>
        <div className="signUp">
          <Button
            onClick={() => navigate("/employeeSignUp")}
            variant="contained"
          >
            SIGN UP
          </Button>
        </div><br/>

        <div>
          <h1>Employee Login Form</h1>
        </div>
        <div className="form">
          
          <div className="login">
            <TextField
              required
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              onChange={handleOnChange}
            />
          </div>

          <div className="login">
            <TextField
              required
              name="password"
              type="password"
              label="Password"
              variant="outlined"
              onChange={handleOnChange}
            />
          </div>

          <Button onClick={handleOnClick} variant="contained">
            SIGN IN
          </Button>
          {/* <Button onClick={() => navigate(`/empDetail/${getEmployee._id}`)} variant="contained">SIGN IN</Button> */}
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  sendEmployee: (employeeData) => dispatch(storeEmployee(employeeData)),
});

const mapStateToProps = (state) => ({
  getEmployee: state.DisplayEmployee.employee,
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeSignIn);
