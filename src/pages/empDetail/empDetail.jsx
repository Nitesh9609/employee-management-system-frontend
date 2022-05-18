import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import './empDetail.css'

const EmpDetail = ({getEmployee}) => {
   
  return (
    <>
      
      <div className="employeeDetail">
      <table>
        <tr>
          <td>Employee Code</td>
          <td>{getEmployee.employeeCode}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>{getEmployee.name}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{getEmployee.email}</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>{getEmployee.address}</td>
        </tr>
        <tr>
          <td>Designation</td>
          <td>{getEmployee.designation}</td>
        </tr>
        <tr>
          <td>Salary</td>
          <td>{getEmployee.salary}</td>
        </tr>
        <tr>
          <td>On Leave This Month</td>
          <td>{getEmployee.leave}</td>
        </tr>
        
      </table>
    </div>
    </>
  )
}

const mapStateToProps = state =>({
  getEmployee: state.DisplayEmployee.employee
})

export default connect(mapStateToProps,null)(EmpDetail)