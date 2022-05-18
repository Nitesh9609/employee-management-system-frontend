import React,{useState} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {connect} from 'react-redux'
import { storeEmployee } from "../../redux/empDetails/empDetail.action";
import { useEffect } from "react";
import './EmployeeSignIn.css'

const EmployeeSignIn = ({sendEmployee}) => {

  const [input,setInput] = useState({})
  
useEffect(()=>{
})

const handleOnChange = (event) =>{
  const {name,value} = event.target
  setInput({...input,[name]:value})
}

const handleOnClick = (()=>{
  axios.post('https://employee-management-system-backend-rust.vercel.app/app/user/employeeSignIn',input)
  .then(res => {sendEmployee(res.data)
  if(res.data){
    alert("LogIn Successfully")
    navigate('/empDetail')
  }
  })
  .catch(err => {console.log(err)
    if(err){
      alert("Something Went Wrong Please Check Your Email and Password")
      navigate('/employee')
    }
  })

  
})




  const navigate = useNavigate();
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
        </div>
        
        <div className="button"></div>
        <div className="form">
          <h1>Employee Login Form</h1>
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

          <Button onClick={handleOnClick} variant="contained">SIGN IN</Button>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) =>({
  sendEmployee: employeeData => dispatch(storeEmployee(employeeData))
})

export default connect(null,mapDispatchToProps) (EmployeeSignIn);
