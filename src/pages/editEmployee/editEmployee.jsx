import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SaveIcon from '@mui/icons-material/Save';
import { Button } from '@mui/material';
import axios from 'axios'
import TextField from '@mui/material/TextField';
import { connect } from 'react-redux';


const EditEmployee = ({getToken}) => {
 
    const params = useParams()
    const navigate = useNavigate()
    const [update,setUpdate] = useState({})

    const handleChange = (event) =>{
        const {name,value} = event.target
        setUpdate({...update,[name]:value})
    } 

    const handleSubmit = async () => {

        const url = `https://employee-management-system-backend-rust.vercel.app/app/user/updateEmployee/${params.id}`
            const config= {
            headers:{
                "auth-token":getToken
            }
}
       await axios.put(url,update,config)
        .then(response => alert("Employee Detail Updated Successfully"))

        
        navigate('/displayEmployee')


    }

   
  return (
    <>
        {/* <p>{params.id}</p> */}
        <div>
            <div className="login">
                <TextField 
                    name='employeeCode'
                    id="outlined-basic" 
                    label="Update Employee Code" 
                    variant="outlined" 
                    onChange= {handleChange}
                    >
                </TextField>
            </div>

            <div className="login">
                <TextField 
                    name='name'
                    id="outlined-basic" 
                    label="Update Name" 
                    variant="outlined" 
                    onChange= {handleChange}
                    >
                </TextField>
            </div>

            <div className="login">
                <TextField 
                    name='email'
                    id="outlined-basic" 
                    label="Update Email" 
                    variant="outlined" 
                    onChange= {handleChange}
                    >
                </TextField>
            </div>

            <div className="login">
                <TextField 
                    name='address'
                    id="outlined-basic" 
                    label="Update Address" 
                    variant="outlined" 
                    onChange= {handleChange}
                    >
                </TextField>
            </div>

            <div className="login">
                <TextField 
                    name='designation'
                    id="outlined-basic" 
                    label="Update Designation" 
                    variant="outlined" 
                    onChange= {handleChange}
                    >
                </TextField>
            </div>

            <div className="login">
                <TextField 
                    name='salary'
                    id="outlined-basic" 
                    label="Update Salary" 
                    variant="outlined" 
                    onChange= {handleChange}
                    >
                </TextField>
            </div>

            <div className="login">
                <TextField 
                    name='leave'
                    id="outlined-basic" 
                    label="Update Leave" 
                    variant="outlined" 
                    onChange= {handleChange}
                    >
                </TextField>
            </div>


            <Button variant="contained" onClick={handleSubmit} > SAVE</Button>
        </div>
    </>
  )
}
const mapStateToProps = state =>({
    getToken : state.useToken.token
  })

export default connect(mapStateToProps,null)(EditEmployee)