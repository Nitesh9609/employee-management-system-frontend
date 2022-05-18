import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <Link to='/'><Button><HomeIcon sx={{fontSize: '40px'}} /></Button></Link>
        
    </>
  )
}

export default Header