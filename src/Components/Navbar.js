import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import image from "../assests/zenith-logo-2.png"
const CustomNavbar = () => {
  return (
    
    <Navbar  expand="md" style={{ backgroundImage: "linear-gradient(315deg,  #2234ae 0%, #000133 50%)"}}>
      <Container>
        <Navbar.Brand href="#home" className='d-block d-sm-none' ><img src={image} width={200} alt="logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:"white",backgroundColor:"white"}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           
            <Nav.Item style={{ flex: '1.3' }}>
              <Nav.Link href="#home" className='d-none d-lg-block'><img src={image} width={180}  alt="logo"></img></Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ flex: '0.7',fontWeight:"600",fontSize:"18px" }}>
              <Nav.Link href="#features" style={{"color":"white"}}>HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ flex: '1',fontWeight:"600",fontSize:"18px" }}>
              <Nav.Link href="#features" style={{"color":"white"}}> ABOUT COMPANY</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ flex: '1',fontWeight:"600",fontSize:"18px" }}>
              <Nav.Link href="#features" style={{"color":"white"}}>OUR SERVICES</Nav.Link>
            </Nav.Item>
            
            <Nav.Item style={{ flex: '0.8',fontWeight:"600",fontSize:"18px" }}>
              <Nav.Link href="#features" style={{"color":"white"}}>CONTACT US</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ flex: '1' }}>
            <button type="button" class="btn btn-light but1" style={{width:"100%",borderRadius:"50px","color":"white",fontWeight:"600",fontSize:"18px",backgroundImage: "linear-gradient(315deg,#191714  0%, #2234ae 74%)"}}>Get Started</button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;



