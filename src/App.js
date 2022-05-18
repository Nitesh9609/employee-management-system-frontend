import './App.css';
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/homepage/HomePage';
import AdminSignIn from './pages/admin/AdminSignIn';
import AdminSignUp from './pages/admin/AdminSignUp';
import EmployeeSignIn from './pages/employee/EmployeeSignIn';
import EmployeeSignUp from './pages/employee/EmployeeSignUp';
import EmpDetail from './pages/empDetail/empDetail';
import AllEmployee from './pages/viewAllEmployee/AllEmployee';
import EditEmployee from './pages/editEmployee/editEmployee';
import DisplayEmployee from './pages/displayEmployee/DisplayEmployee';
import AddEmployee from './pages/addNewEmployee/AddEmployee';
import Header from './pages/header/Header';

function App() {
  return (
    <>
      <div className='header'>
        <Header/>
      </div>
      
      <div className="Apps">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/employee' element={<EmployeeSignIn/>}/>
          <Route path='/employeeSignUp' element={<EmployeeSignUp/>}/>
          <Route path='/admin' element={<AdminSignIn/>}/>
          <Route path='/adminSignUp' element={<AdminSignUp/>}/>
          <Route path='/empDetail' element={<EmpDetail/>}/>
          <Route path='/allEmployee' element={<AllEmployee/>}/>
          <Route path='/updateEmployee/:id' element={<EditEmployee/>}/>
          <Route path='/displayEmployee' element={<DisplayEmployee/>}/>
          <Route path='/addEmployee' element={<AddEmployee/>}/>
        </Routes>
      
      </div>
    </> 
  );
}

export default App;
