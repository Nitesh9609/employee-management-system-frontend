import React,{useState} from 'react'
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './AdminSignUp.css'


const AdminSignUp = () => {
  const navigate = useNavigate()
  const [input,setInput] = useState({})

const handleOnChange = (event) =>{
  const {name,value} = event.target
  setInput({...input,[name]:value})
}

const handleOnClick = (async () =>{
    await axios.post('https://employee-management-system-backend-rust.vercel.app/app/user/adminSignUp',input)
    // await axios.post('http://localhost:8080/app/user/adminSignUp',input)
    .then(res => {alert(res.data)
    if(res.data === 'Admin created Successfully'){
      navigate('/admin')
    }
    })
    .catch(err => console.log(err))

    
})

  return (
    <>
       <div className='form'>
            <h1>SignUp Form</h1>

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
                        name="adminAuthentication"
                        type="password" 
                        label="Admin Authentication Password" 
                        variant="outlined" 
                        onChange={handleOnChange} 
                        />
            </div>
          
            <div className='signup'>
            <TextField 
                            required
                            name="password" 
                            type="password"
                            label="Password(min 8 character)" 
                            variant="outlined" 
                            onChange={handleOnChange} 
                            />
            </div>
            <Button onClick={handleOnClick}  variant="contained">SIGN UP</Button>
            
        </div>
    </>
  )
}

export default AdminSignUp