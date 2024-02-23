import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import image28 from "../assests/photo-11.jpg";
import { Form } from 'react-bootstrap';
import image29 from "../assests/photo-9.jpg";
import { useState } from 'react';
import {useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
function ResponsiveExample() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out', 
    });
  }, []);
  const gradientStyle = {
    background: 'linear-gradient(45deg, #FC466B, #3F5EFB)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You can add your form submission logic, e.g., sending data to a server
  };
  return (
    <Container className='mb-5'>
      <Row>
        <Col lg={8} md={12} className='mb-5'>
          <h5 className='text-primary'>ARTICLE & NEWS</h5>
          <h2 className='text-white fs-1 textt'>Update Article</h2>
          <h2 className='fs-1 textt' style={gradientStyle}>
            & More Archives​.
          </h2>
          <h3 className='cardd'>Learn about and our news Information.</h3>
        
          
        </Col>
      
      </Row>
   
        <center>
      <Row  className="mb-5" data-aos="fade-up">
            <Col lg={4} md={6} sm={12}>
              <Card className='custom-card1 mb-5' style={{background:"#18245d",width:"100%"}}>
                <Card.Img
                  className='card-image1'
                  variant='top'
                  src={image28}
                  style={{"border-radius":"10px"}}
                />
                <center>
                  <Card.Body className='text-white'>
                  <p className='cardd mb-0'>hendrik March 20, 2023</p>
                  <h4>AI Software that Helps Human…</h4>
                
                    <p className='cardd' style={{fontSize:"18px"}}>single blog Single Blog & Archive AI Software that Helps Human Work by Hendrik Morella 2023 / 03 / 16 Software Aenean vel elit…</p>
<Card.Text>
<button type="button" variant="outline-info" class="btn but1 rounded-pill text-white px-5"  style={{ border: '1.5px solid #fff', borderColor: '#007bff',fontWeight:"700" }} >Read More</button>
</Card.Text>
                  </Card.Body>
                </center>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
            <Card className='custom-card1 mb-5' style={{background:"#18245d",width:"100%"}}>
                <Card.Img
                  className='card-image1'
                  variant='top'
                  src={image29}
                  style={{"border-radius":"10px"}}
                />
                <center>
                  <Card.Body className='text-white'>
                  <p className='cardd mb-0'>hendrik March 20, 2023</p>
                  <h4>Explore to New techenology with…</h4>
                
                    <p className='cardd' style={{fontSize:"18px"}}>single blog Single Blog & Archive AI Software that Helps Human Work by Hendrik Morella 2023 / 03 / 16 Software Aenean vel elit…</p>
<Card.Text>
<button type="button" variant="outline-info" class="btn but1 rounded-pill text-white px-5"  style={{ border: '1.5px solid #fff', borderColor: '#007bff',fontWeight:"700" }} >Read More</button>
</Card.Text>
                  </Card.Body>
                </center>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
        <Form className="custon-form text-white" style={{background:"#18245d" , padding:"30px",width:"100%"}} onSubmit={handleSubmit}>
        <center> <Card.Title className="mb-5">Get Free Quotes Now!</Card.Title></center>
        <Form.Group controlId="formFirstName" className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group><center>
<button type="button" variant="outline-info" class="btn but1 rounded-pill text-white px-5"  style={{ border: '1.5px solid #fff', borderColor: '#007bff',fontWeight:"700" }} >Read More</button></center>
      </Form></Col>
          </Row>
          </center>
      
    </Container>
  );
}

export default ResponsiveExample;
