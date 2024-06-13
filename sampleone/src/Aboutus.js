import './Aboutus.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import small_logo from './images/small_logo.png';
// import babji from './images/Babji sir.jpg';
import certifi from './images/certification.png';
import coder from './images/placement.png';
import ready from './images/product.png';
import li from './images/linkedin.png';
import yt from './images/youtube.png';
import insta from './images/instagram.png';
import fb from './images/facebook.png';
import bd from './images/building.jpg';

import {Link} from 'react-router-dom';
function Aboutus() {
  return (
    <div>
      <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img src={small_logo} alt="Logo"></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="main">
            <Nav.Link href="/Home" className='link'><Link to="/home">Home</Link></Nav.Link>
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
      </div>
      <Container>
      <div className='flow'>
        <marquee>Technical hub</marquee>

      </div>
      <div className='aboutimg'>
        <img src={bd} alt="babji"/>

      </div>
      <div>
        <h1 className='h11' >what is Technical hub?</h1>
        <p class="text">
        Technical Hub is a platform where students are going to train in different Technologies and work on some real time projects. It was Founded back on the 3rd of February 2016, our journey has been quite an adventurously successful one. Over time our team has taken up commercial and social projects and developed apps, games, softwares, websites and a whole lot more. Our experienced developers are certified in an array of languages and can handle anything that comes their way. Technical Hub provides the trainings which are certification aligned and associated with various vendors that are top in the industry. Members who are part of this program are given a constant practical example on various topics, thus keeping them abreast of their technological world. Technical Hub has introduced many learning paths like Competitive coding, T-shaped Engineer, Drive Ready, owl coder, Project Space, ignite coders, skillup coder, Become Coder, and many more
          </p>
        </div>

      </Container>
<section className="section-black">
        <div className="container">
            <div className="row">
<div className="col-md-12 text-center">
    <h2 className="section-title">
    What we Offer
    </h2>
    {/* <p className="section-subtitle">{message}</p> */}

</div>
<div className="col-sm-6 col-md-4">
    <div  className="team-item">
    <Card style={{ width: '18rem' }} className='c1'>
      <Card.Img variant="top" src={certifi} />
      <Card.Body>
        <Card.Title>Certification</Card.Title>
        <Card.Text>
        We offer a wide range of globally recognized certifications from reputed organizations like Cisco, Red Hat, AWS, Microsoft and Automation Anywhere. These certifications are issued directly by the vendor.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      </Card>
        <div className="team-info">
           

        </div>
            </div>
</div>
<div className="col-sm-6 col-md-4">
    <div  className="team-item">
    <Card style={{ width: '18rem' }} className='c2'>
      <Card.Img variant="top" src={coder} />
      <Card.Body>
        <Card.Title>placements</Card.Title>
        <Card.Text>
        We regularly conduct mock interviews with the help of experienced professionals. These interviews help prepare our trainees for their future placements and help them analyze and upgrade their skills accordingly.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
        <div className="team-info">
            

        </div>
            </div>
</div>

<div className="col-sm-6 col-md-4">
    <div  className="team-item">
         <Card style={{ width: '18rem' }} className='c3'>
      <Card.Img variant="top" src={ready} />
      <Card.Body>
        <Card.Title>Product Development</Card.Title>
        <Card.Text>
        Our in-house development team focuses on providing the best to our customers. Whether you're looking for a custom build product or in house automation, our products are guaranteed to help make your work easier.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
        <div className="team-info">
            

        </div>
            </div>
</div>
            </div>
        </div>
      </section>
      <div class='foot' style={{marginTop:"40px"}}>
    <container>
    <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                {/* <h5 className="text-uppercase">Footer Content</h5> */}
                <img src={small_logo}></img>
                {/* <p>Here you can use rows and columns to organize your footer content.</p> */}
                <div className='icons'>
                  <ul>
                    <li><a href='#'><img src={li}></img></a></li>
                    <li><a href='#    '><img src={yt}></img></a></li>
                    <li><a href='#'><img src={insta}></img></a></li>
                    <li><a href='#'><img src={fb}></img></a></li>
                  </ul>
                </div>
            </div>

            

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase" >References</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Home</a></li>
                    <li><a href="#!">Gallery</a></li>
                    <li><a href="#!">Team</a></li>
                    <li><a href="#!">Events</a></li>
                    
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Contact Us</h5>
                <div class='add'>
                    <h6>Address:</h6>
                    <p>Technical Hub , Aditya Global Inubation Center Andhra Pradesh, India</p>
                    <h6>Phone:</h6>
                    <p>+91 95737 19715</p>
                    <h6>Email:</h6>
                    <p>support@technicalhub.io</p>
                </div>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="#"> @Technical Hub</a>
    </div>

</footer>
    </container>
    </div>
      </div>
  );
}
export default Aboutus;