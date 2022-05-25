import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SaveIcon from '@mui/icons-material/Save';
import { Button } from '@mui/material';
import axios from 'axios'
import TextField from '@mui/material/TextField';
import { connect } from 'react-redux';


const EditEmployee = ({getToken}) => {
 
    const {id} = useParams()
    const navigate = useNavigate()
    const [update,setUpdate] = useState({})
    const [emp, setEmp] = useState([]);
    const handleChange = (event) =>{
        const {name,value} = event.target
        setUpdate({...update,[name]:value})
    }
    
    useEffect(()=>{
        axios
      .get(`http://localhost:8080/app/user/viewEmployee/${id}`)
      .then((res) => setEmp(res.data));
    })

    const handleSubmit = async () => {

        const url = `https://employee-management-system-backend-rust.vercel.app/app/user/updateEmployee/${id}`
        // const url = `http://localhost:8080/app/user/updateEmployee/${id}`
            const config= {
            headers:{
                "auth-token":getToken
            }
}
       await axios.put(url,update,config)
        .then(response =>  alert("Employee Updated Successfully"))

        
        navigate('/displayEmployee')


    }

   
  return (
    <>
        {/* <p>{id}</p> */}
        <div><br/>
            <h1>Update Employee Details</h1>
            <div className="login">
                <TextField 
                    name='employeeCode'
                    id="outlined-basic" 
                    label="Update Employee Code"
                    placeholder={emp.employeeCode} 
                    variant="outlined" 
                    onChange= {handleChange}
                   
                    
                    >
                </TextField>
            </div>

            <div className="login">
                <TextField 
                    name='name'
                    id="outlined-basic" 
                    label='Update Name'
                    placeholder={emp.name} 
                    variant="outlined" 
                    onChange= {handleChange}
                    >
                </TextField>
            </div>

            <div className="login">
                <TextField 
                    name='email'
                    id="outlined-basic" 
                    label='Update Email'
                    placeholder={emp.email} 
                    variant="outlined" 
                    onChange= {handleChange}
                    >
                </TextField>
            </div>

            <div className="login">
                <TextField 
                    name='address'
                    id="outlined-basic" 
                    label='Update Address'
                    placeholder={emp.address} 
                    variant="outlined" 
                    onChange= {handleChange}
                    >
                </TextField>
            </div>

            <div className="login">
                <TextField 
                    name='designation'
                    id="outlined-basic" 
                    label='Update Designation'
                    placeholder={emp.designation} 
                    variant="outlined" 
                    onChange= {handleChange}
                    
                    >
                </TextField>
            </div>

            <div className="login">
                <TextField 
                    name='salary'
                    id="outlined-basic"
                    label='Update Salary' 
                    placeholder={emp.salary} 
                    variant="outlined" 
                    onChange= {handleChange}
                    >
                </TextField>
            </div>

            <div className="login">
                <TextField 
                    name='leave'
                    id="outlined-basic"
                    label='Update Leaves' 
                    placeholder={emp.leave}
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