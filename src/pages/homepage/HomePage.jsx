import React from 'react'
import "./HomePage.css"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';

const HomePage = () => {

    const navigate = useNavigate()

  return (
    <>
    <div>
        <h1>WELCOME TO EMPLOYEE DASHBOARD</h1>
    </div>
        <div className='home'>
            
            <div className='button'>
                <AdminPanelSettingsIcon sx={{fontSize: '200px'}}></AdminPanelSettingsIcon>
                <Button sx={{padding :'20px'}} onClick={()=> navigate('/admin')} variant="contained">Admin</Button>
            </div>
            <div className='button'>
                <PersonIcon sx={{fontSize: '200px'}}></PersonIcon>
                <Button sx={{padding :'20px'}} onClick={()=> navigate('/employee')} variant="contained">Employee</Button>
            </div>
        </div>
    </>
  )
}

export default HomePage