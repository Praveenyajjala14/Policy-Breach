import './login.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './images/small_logo.png'
import profile from "./images/person.png";
// import email from "./images/user.png";
// import pass from "./images/password.png";
import {Link} from 'react-router-dom';


function User() {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="Logo"></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="main">
            <Nav.Link href="/Home" className='link'><Link to="/home">    Home</Link></Nav.Link>
            <Nav.Link href="/Aboutus" className='link'><Link to="/Aboutus">  About Us</Link></Nav.Link>
             <Nav.Link href="/Contact" className='link'><Link to="/Contact">Contact Us</Link></Nav.Link> 
              <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item href="#user-login"><Link to="/User">User Login</Link></NavDropdown.Item> 
                <NavDropdown.Item href="#admin-login"><Link to="/Admin">Admin Login</Link></NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
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
         <div>
          <form>
           <h1>User Login</h1>
           <div>
            <label className='Username'>
             <input type="text" placeholder="user name" className="name"/>
             </label>
           </div>
           <div className="second-input">
              <label className='Password'>
             <input type="password" placeholder="Password" className="name"/>
             </label>
           </div>
          <div className="login-button">
          <button><b>Login</b></button>
          </div>
           
          </form>
         </div>
       </div>
       

     </div>
    </div>
    </div>
  );
}

export default User;
