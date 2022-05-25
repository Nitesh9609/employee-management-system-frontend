import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AllEmployee.css";
import { connect } from "react-redux";

const AllEmployee = ({ getToken, getAllEmployee }) => {
  const navigate = useNavigate();

  const handleOnClick = (id) => {
    const url = `https://employee-management-system-backend-rust.vercel.app/app/user/deleteEmployee/${id}`
    // const url = `http://localhost:8080/app/user/deleteEmployee/${id}`;
    const config = {
      headers: {
        "auth-token": getToken,
      },
    };
    axios
      .delete(url, config)
      .then(res => alert("deleted successfully"))
      .catch((err) => console.log(err));

    
  };

  return (
    <>
    <br/>
      <div className="empTable">
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
          {getAllEmployee.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.employeeCode}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.address}</td>
                <td>{val.designation}</td>
                <td>{val.salary}</td>
                <td>{val.leave}</td>
                <td>
                  <Button 
                    onClick={() => {
                      handleOnClick(val._id);
                    }}
                  >
                    <DeleteIcon />
                  </Button>
                  <Button 
                    onClick={() => navigate(`/updateEmployee/${val._id}`)}
                  >
                    <ModeEditIcon />
                  </Button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  getToken: state.useToken.token,
  getAllEmployee: state.DisplayAllEmployee.allEmployee,
});

export default connect(mapStateToProps, null)(AllEmployee);
