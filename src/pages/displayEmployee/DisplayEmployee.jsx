import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { storeAllEmployee } from '../../redux/allEmployee/AllEmployee.action'
import AllEmployee from '../viewAllEmployee/AllEmployee'
import { useEffect } from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

const DisplayEmployee = ({getToken,sendAllEmployee,getAllEmployee}) => {
const navigate = useNavigate()
    useEffect(  () =>{
        const url= "https://employee-management-system-backend-rust.vercel.app/app/user/allEmployee";
        const config= {
            headers:{
                "auth-token":getToken
            }
        }
        axios.get(url,config)
        .then(res => sendAllEmployee(res.data))
        .catch(err => console.log(err))
      
    
      
    })
    const handleOnAdd = () =>{
      navigate('/addEmployee')
    }
  return (
    
    <>
    <div>
          {
                getAllEmployee.map(
                (employee) => <AllEmployee 
                  
                  id={employee._id}
                  employee={employee}
              />
              )
          }
    </div>
    <Button variant="contained" onClick={handleOnAdd}>ADD NEW EMPLOYEE</Button> 
    </>
  )
}

const mapDispatchToProps = (dispatch) =>({
    sendAllEmployee: allEmployeeData => dispatch(storeAllEmployee(allEmployeeData))
  })

const mapStateToProps = state =>({
    getToken : state.useToken.token,
    getAllEmployee: state.DisplayAllEmployee.allEmployee
  })
  

export default connect(mapStateToProps,mapDispatchToProps) (DisplayEmployee)