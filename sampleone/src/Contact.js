import './contact.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './images/small_logo.png';
import logo1 from './images/Thublogo.png';
import {Link} from 'react-router-dom';


function Contact() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/home"><img src={logo} alt="Logo"></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="main">
            <Nav.Link href="/home" className='link'><Link to="/home">    Home</Link></Nav.Link>
            <Nav.Link href="/Aboutus" className='link'><Link to="/Aboutus">  About Us</Link></Nav.Link>
             <Nav.Link href="/Contact" className='link'><Link to="/Contact">Contact Us</Link></Nav.Link> 
              <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item href="/User"><Link to="/User">User Login</Link></NavDropdown.Item> 
                <NavDropdown.Item href="/Admin"><Link to="/Admin">Admin Login</Link></NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
      <div>
        <h1 className='Contact-head'><b>Contact Us</b></h1>
        <p className='Contact-subhead'>Got a Question? We'd love to hear from you. send us a message and we'll respond as soon as possible</p>
      </div>
      <Row>
        <Col>
          <div className='Addressmain'>
            <h5 className='Addresshead'>Address:</h5>
            <p>Technical Hub , Aditya Global Inubation Center Andhra Pradesh, India</p>
            <h5 className='Addresshead'> Phone:</h5>
            <p>+91 95757 19715</p>
            <h5 className='Addresshead'>Email:</h5>
          < p>support@technicalhub.io</p>
        </div>
      </Col>
      <Col>
        <form className='contactmain1'>
          <img src={logo1} alt='Thublogo' className='thublogo' />
          <label className='contactsubmain'>
            <input type='text' placeholder='Enter your name' className='contactinput'/>
          </label>
          <label className='contactsubmain'>
            <input type='Email' placeholder='Example@gmail' className='contactinput'/>
          </label>
          <label className='contactsubmain'>
            <input type='number' placeholder='+91' className='contactinput'/>
          </label>
          <button className='contactbutton'>Submit</button>
        </form>
      </Col>
      </Row>
      </Container>
      
    </div>
  );
}
export default Contact;