// import './login.css'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import logo from './images/small_logo.png';
// import profile from "./images/person.png";
// import {Link} from 'react-router-dom';
// import { useState } from 'react'
// import axios from 'axios'



// function Admin() { 
//   const [send,setSend]=useState({
//     username:"",
//     password:""

//   })
// const handleChange=(e)=>
// {
// setSend((prevState)=>({
// ...prevState,[e.target.name]:e.target.value
// }))
// }

// const postSubmit = (e) =>{
// e.preventDefault()
// const requestOptions = {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({send})
// };

// fetch('http://localhost:4000/postdata', requestOptions)
// .then(response => response.json())



// alert('data sent')
// }
  
//   return (
//     <div>
//       <Navbar bg="dark" expand="lg">
//         <Container>
//           <Navbar.Brand href="#home"><img src={logo} alt="Logo"></img></Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="main">
//             <Nav.Link href="/Home" className='link'><Link to="/home">    Home</Link></Nav.Link>
//             <Nav.Link href="/Aboutus" className='link'><Link to="/Aboutus">  About Us</Link></Nav.Link>
//              <Nav.Link href="/Contact" className='link'><Link to="/Contact">Contact Us</Link></Nav.Link> 
//               <NavDropdown title="Login" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#user-login"><Link to="/User">User Login</Link></NavDropdown.Item> 
//                 <NavDropdown.Item href="#admin-login"><Link to="/Admin">Admin Login</Link></NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     <div className="login-main">
//      <div className="sub-main">
//        <div>
//          <div className="imgs">
//            <div className="container-image">
//              <img src={profile} alt="profile" className="profile"/>

//            </div>


//          </div>
//          <div>
//           <form  onSubmit={postSubmit}>
//            <h1>Admin Login</h1>
//            <div>
//             <label className='Username'>
//              <input type="text" name='username' placeholder="user name" className="name" onChange={handleChange}/>
//              </label>
//            </div>
//            <div className="second-input">
//               <label className='Password'>
//              <input type="password" name='password' placeholder="Password" className="name" onChange={handleChange}/>
//              </label>
//            </div>
//           <div className="login-button">
//           <button type='submit'><Link to="/Dashboard">Login</Link></button>
//           </div>
//           </form>
//          </div>
//        </div>
       

//      </div>
//     </div>
//     <div>

//     </div>
//     </div>
//   );
// }

// export default Admin;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from './images/small_logo.png';
import profile from './images/person.png';
import './login.css';

function Admin() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const postSubmit = async (e) => {
    e.preventDefault();
  
    // Check if either the username or password is empty
    if (!loginData.username || !loginData.password) {
      alert('Enter your name and password');
      return;
    }
  
    try {
      // Check if the username and password match the expected values
      if (loginData.username === 'ajay' && loginData.password === '12345678') {
        // If the credentials are correct, you can make a request to your server
        const response = await axios.post('http://localhost:4000/postdata', loginData);
        console.log(response.data); // Assuming your server responds with data
  
        // After successful login, you can navigate to the Dashboard
        navigate('/Dashboard');
      } else {
        // If the credentials are incorrect, you can show an error message or take appropriate action
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle error appropriately
    }
  };

  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Nav.Link href="/Home" className='link'><Link to="/home">Home</Link></Nav.Link>
             <Nav.Link href="/Aboutus" className='link'><Link to="/Aboutus">  About Us</Link></Nav.Link>
            <Nav.Link href="/Contact" className='link'><Link to="/Contact">Contact Us</Link></Nav.Link>               
            <NavDropdown title="Login" id="basic-nav-dropdown">
              
            <NavDropdown.Item href="#user-login"><Link to="/User">User Login</Link></NavDropdown.Item>                  
            <NavDropdown.Item href="#admin-login"><Link to="/Admin">Admin Login</Link></NavDropdown.Item>
            </NavDropdown>
        </Container>
      </Navbar>
      <div className="login-main">  
        <div className="sub-main">
        <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

            </div>
          </div>
            <form onSubmit={postSubmit}>
              <h1>Admin Login</h1>
              <div>
                <label className="Username">
                  <input
                    type="text"
                    name="username"
                    placeholder="user name"
                    className="name"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="second-input">
                <label className="Password">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="name"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="login-button">
  {/* <button type="submit" style={{ textDecoration: 'none' }}>
    <Link to="/Dashboard" style={{ color: 'inherit', textDecoration: 'none' }}>
      Login
    </Link>
  </button> */}

<button type="button" onClick={postSubmit} style={{ textDecoration: 'none' }}>
  <Link to="/Dashboard" style={{ color: 'inherit', textDecoration: 'none' }}>Login</Link>
</button>

</div>  
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
