import React from "react";
import Home from "./home";
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import  Aboutus from'./Aboutus';
import Contact from "./Contact";
import  User from './User';
import Admin from './Admin';
import Dashboard from "./Dashboard";
function App() {
    return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/Aboutus' element={<Aboutus />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/User' element={<User />} />
          <Route path='/Admin' element={<Admin />} />
          <Route path='/Dashboard' element={<Dashboard/>} />
          
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
  export default App;
  
  