import React,{useState} from 'react'
import { connect } from 'react-redux';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AddEmployee = ({getToken}) => {
  const navigate = useNavigate()
  const [input,setInput] = useState({})

const handleOnChange = (event) =>{
  const {name,value} = event.target
  setInput({...input,[name]:value})
}

const handleOnClick = (async() =>{
  const url= 'https://employee-management-system-backend-rust.vercel.app/app/user/adminEmployeeSignUp'
  const config={
    headers:{
      "auth-token":getToken
    }
  }
   await axios.post(url,input,config)
    .then(res => alert(res.data))
    .catch(err => console.log(err))

    navigate("/displayEmployee")
})
  return (
    <>
       <div className='form'>
            <h1>ADD NEW EMPLOYEE</h1>

            <div className='signup'>
            <TextField 
                        required
                        name="name"
                        type="text" 
                        label="Name" 
                        variant="outlined" 
                        onChange={handleOnChange} 
                        />
            </div>
            
            <div className='signup'>
            <TextField 
                        required
                        name="email"
                        type="email" 
                        label="Email" 
                        variant="outlined" 
                        onChange={handleOnChange} 
                        />
            </div>
            
            
            <div className='signup'>
            <TextField 
                            required
                            name="password" 
                            type="password"
                            label="Password" 
                            variant="outlined" 
                            onChange={handleOnChange} 
                            />
            </div>

            <Button onClick={handleOnClick}  variant="contained">SIGN UP</Button>
            
        </div>
    </>
  )
}
const mapStateToProps = state =>({
  getToken : state.useToken.token
})

export default connect(mapStateToProps,null) (AddEmployee)