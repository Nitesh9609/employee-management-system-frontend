import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AllEmployee.css'
import { connect } from 'react-redux';


const AllEmployee = ({getToken,employee:{_id,employeeCode,name,email,address,designation,salary,leave}}) => {
const navigate = useNavigate()

const handleOnClick = async () =>{
  const url = `https://employee-management-system-backend-rust.vercel.app/app/user/deleteEmployee/${_id}`
  const config= {
    headers:{
        "auth-token":getToken
    }
}
 await axios.delete(url,config)
  .then(res => alert("deleted successfully"))
  .catch(err => console.log(err))

  // navigate("/displayEmployee")
}



  return (
    <>
        

            <div className="App">
      <table>
        <tr>
          <th>Employee Code</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Leave</th>
          <th>Edit/Delete</th>
        </tr>
        <tr>
          <td>{employeeCode}</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{address}</td>
          <td>{designation}</td>
          <td>{salary}</td>
          <td>{leave}</td>
          <td><Button onClick={handleOnClick}><DeleteIcon/></Button>
            <Button onClick={()=> navigate(`/updateEmployee/${_id}`)}><ModeEditIcon/></Button></td>
        </tr>
        
      </table>
    </div>
   
    </>
  )
}
const mapStateToProps = state =>({
  getToken : state.useToken.token
})

export default connect(mapStateToProps,null) (AllEmployee)