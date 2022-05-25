import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./empDetail.css";
import { useParams } from "react-router";
import axios from "axios";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const EmpDetail = ({ getEmployee }) => {
  const params = useParams();
  const [emp, setEmp] = useState([]);
  const navigate = useNavigate();
  const [value, setValue] = React.useState(new Date("2022-01-01T21:11:54"));

  useEffect(() => {
     axios.get(`https://employee-management-system-backend-rust.vercel.app/app/user/viewEmployee/${params.id}`)
    axios
      // .get(`http://localhost:8080/app/user/viewEmployee/${params.id}`)
      .then((res) => setEmp(res.data));

    localStorage.setItem("emp", JSON.stringify(emp));
  });

  const handleOnLogout = () => {
    localStorage.clear();
    navigate("/employee");
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div>
        <Button sx={{ float: "right" }} onClick={handleOnLogout}>
          <LogoutIcon />
        </Button>
      </div>
      <br />
      <div className="logout">
        <sapn>Welcome: {emp.name}</sapn>
      </div>
      <h1>Employee Details</h1>
      <div className="employeeDetail">
        <table>
          <tr>
            <td>Employee Code</td>
            <td>{emp.employeeCode}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{emp.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{emp.email}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{emp.address}</td>
          </tr>
          <tr>
            <td>Designation</td>
            <td>{emp.designation}</td>
          </tr>
          <tr>
            <td>Salary</td>
            <td>{emp.salary}</td>
          </tr>
          <tr>
            <td>On Leave This Month</td>
            <td>{emp.leave}</td>
          </tr>
        </table>
        <div>
        <LocalizationProvider  dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <DesktopDatePicker
              
              label="Date desktop"
              inputFormat="dd/MM/yyyy"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField sx={{ marginTop: ' 2vh', }}  {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      </div>
      </div>
      
    </>
  );
};

const mapStateToProps = (state) => ({
  getEmployee: state.DisplayEmployee.employee,
});

export default connect(mapStateToProps, null)(EmpDetail);
