import React from 'react';
import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import image26 from "../assests/Abstract-background-PSDGraphics.jpg"
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
function ImgOverlayExample() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
    });
  }, []);
  return (
  
    <Card className="bg-dark mb-5 " data-aos="fade-up">
      <Card.Img src={image26} alt="Card image" style={{"height":'50vh',background:"blue"}}/>
      <Card.ImgOverlay>
      <div className="d-flex flex-column  align-items-center text-white " >
      
        <center>
      <Row className='text-white py-4'>
      
         <h2 className='text-white fs-1 textt'>Creating Products that<br/>  Enhance the Human<br/>   Experience.</h2>
        
         <h3 className=' cardd ' >We're excited to be on this journey with you.</h3>
      
      </Row>
      <button type="button" variant="outline-info" class="btn but1 rounded-pill text-white px-5"  style={{ border: '1.5px solid #fff', borderColor: '#007bff',fontWeight:"700" }} >Discover Now</button>
      </center>
        </div>
      </Card.ImgOverlay>
    </Card>
 
  );
}

export default ImgOverlayExample;