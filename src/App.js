import './App.css';
import { useState } from "react";

import { BrowserRouter, Route, Routes ,useNavigate} from 'react-router-dom';
import EmpListing from './crud/EmpListing';
import EmpCreate from './crud/EmpCreate';
import EmpDetails from './crud/EmpDetails';
import EmpEdit from './crud/EmpEdit';
import SignUp from './crud/SignUp';
import Login from './crud/Login';


function App() {

  

  return (

    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/dashboard' element={<EmpListing />}></Route>
          <Route path='/dashboard/employee/create' element={<EmpCreate />}></Route>
          <Route path='/dashboard/employee/detail/:id' element={<EmpDetails />}></Route>
          <Route path='/dashboard/employee/edit/:id' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;