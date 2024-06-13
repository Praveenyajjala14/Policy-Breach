import './home.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import small_logo from './images/small_logo.png';
import building from './images/building.jpg';
import become_coder from './images/become_coder.jpg';
import drive from './images/drive.jpg';
import skillup from './images/skillup.jpg';
import big_logo from './images/big_logo.png';
import li from './images/linkedin.png';
import yt from './images/youtube.png';
import insta from './images/instagram.png';
import fb from './images/facebook.png';
import ready from './images/product.png';
import Card from 'react-bootstrap/Card';
import coder from './images/placement.png';
import certifi from './images/certification.png';
import {Link} from 'react-router-dom';




function home() {
  return (
    <div >
    <container>

      <Navbar bg="light" expand="lg" >
        <Container fluid>
          <Navbar.Brand href="#home"><img src={small_logo} alt="Logo" className='Thublogo'></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="main">
              <Nav.Link href="/home" className='link' style={{textDecoration:"none"}}><Link to="/home" >Home</Link></Nav.Link>
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

    <container>
        <img src={building} className='img-fluid'></img>
      </container>
      
        

    <Container>
        <h2 class='tg'>Technical Hub</h2>
        <h4 class='ready'>#Ready To Hire</h4>
        <Row class='para'>
            
            <Col><p>We offer a wide range of globally recognized certifications from reputed organizations like Cisco, Red Hat, AWS, Mi
                crosoft and Automation Anywhere. These certifications are issued directly by the vendor and are accepted worldwide.
                We offer a wide range of globally recognized certifications from reputed organizations like Cisco, Red Hat, AWS, Microsoft and Automation Anywhere. These certifications are issued directly by the vendor and are accepted worldwide.</p>
                
            </Col>
            <Col><img src={big_logo} class="space"></img></Col>
        </Row>
        

    </Container>
    {/* <container>
        <div class='eve'>
            <h1>Events</h1>
        </div>
        <div class='e2'>
        <Row>
            <Col >
                <img src={become_coder}></img>
                <p class='e1'>We offer a wide range of globally recognized certifications from reputed organizations like Cisco, Red Hat, AWS, Mi
                crosoft and Automation Anywhere. These certifications are issued directly by the vendor and are accepted worldwide.
                We offer a wide range of globally recognized certifications from reputed organizations like Cisco, Red Hat, AWS, Micros</p>
                
            </Col>
            <Col >
                <img src={drive}/>
                <p class='e1'>We offer a wide range of globally recognized certifications from reputed organizations like Cisco, Red Hat, AWS, Mi
                crosoft and Automation Anywhere. These certifications are issued directly by the vendor and are accepted worldwide.
                We offer a wide range of globally recognized certifications from reputed organizations like Cisco, Red Hat, AWS, Micros</p>
            </Col>
            <Col >
                <img src={skillup}></img>
                <p class='e1'>We offer a wide range of globally recognized certifications from reputed organizations like Cisco, Red Hat, AWS, Mi
                crosoft and Automation Anywhere. These certifications are issued directly by the vendor and are accepted worldwide.
                We offer a wide range of globally recognized certifications from reputed organizations like Cisco, Red Hat, AWS, Micros</p>
            </Col>
        </Row>
        </div>
    </container> */}


<section className="section-black">
        <div className="container">
            <div className="row">
<div className="col-md-12 text-center">
    <h2 className="section-title">Events</h2>
    {/* <p className="section-subtitle">{message}</p> */}

</div>
<div className="col-sm-6 col-md-4">
    <div  className="team-item">
    <Card style={{ width: '18rem' }} className='c1'>
      <Card.Img variant="top" src={become_coder} />
      <Card.Body>
        <Card.Title>Become coder</Card.Title>
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
      <Card.Img variant="top" src={drive} />
      <Card.Body>
        <Card.Title>Drive Ready</Card.Title>
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
      <Card.Img variant="top" src={skillup} />
      <Card.Body>
        <Card.Title>Skillp Coder</Card.Title>
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

    <div className="footer-copyright text-center py-3" >© 2020 Copyright:
        <a href="#"> @Technical Hub</a>
    </div>

</footer>
    </container>
    </div>

        
        
    
    
      </container>
    </div>
    

    
  );
}

export default home;