import React,{useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import axios from 'axios'
import {connect} from 'react-redux'
import { storeToken } from '../../redux/token/token.action';
import { storeAllEmployee } from '../../redux/allEmployee/AllEmployee.action';
import './AdminSignIn.css'

const AdminSignIn = ({sendToken,getToken,sendAllEmployee,getAllEmployee}) => {
const navigate = useNavigate()


const [input,setInput] = useState({})

const handleOnChange = (event) =>{
  const {name,value} = event.target
  setInput({...input,[name]:value})
}


const handleOnClick = ( async ()=>{
 await axios.post("https://employee-management-system-backend-rust.vercel.app/app/user/adminSignIn",input)
  .then(res => {sendToken(res.data);
  if(res.data){
    alert("LogIn Successfully")
    navigate('/displayEmployee')
  }
  })
  .catch(error => {console.log(error)
  if(error){
    alert('Something Went Wrong');
    navigate('/admin')
  }
  })
})


  return (
    <>
        <div>
          <div className='signUp'>
            <Button onClick={() => navigate('/adminSignUp')} variant="contained">SIGN UP</Button>
          </div>
          
          
          <div className="button"></div>
        <div className="form">
          <h1>Admin Login Form</h1>
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
        <div>
        
        
      
        </div>
    </>
  )
}


const mapDispatchToProps = (dispatch) =>({
  sendToken : accessToken => dispatch(storeToken(accessToken)),
  sendAllEmployee: allEmployeeData => dispatch(storeAllEmployee(allEmployeeData))
})

const mapStateToProps = state =>({
  getToken : state.useToken.token,
  getAllEmployee: state.DisplayAllEmployee.allEmployee
})



export default connect(mapStateToProps,mapDispatchToProps)(AdminSignIn)