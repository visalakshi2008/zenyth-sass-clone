import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import image11 from "../assests/OIP.jpg"

function ImgOverlayExample() {
  return (
    <Container  className='mb-5'>
    <Card className="bg-dark mb-5 ">
      <Card.Img src={image11} alt="Card image" style={{"height":'60vh'}}/>
      <Card.ImgOverlay>
      <div className="d-flex flex-column  align-items-center text-white " >
      
        <center>
      <Row className='text-white py-5'>
      
         <h2 className='text-white fs-1 textt'>If you have an <br/> Innovative Idea for <br/> How we can Improve.</h2>
        
         <h3 className=' cardd mb-3' >We want to hear from you!</h3>
        


    <Row>
    <div className="  align-items-center text-white " >
        <Col lg={4}>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Email Address"
          aria-label="Email"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        </Col>
        <Col lg={4}>
        <button type="button" variant="outline-info" class="btn but1 rounded-pill text-white px-5"  style={{ border: '1.5px solid #fff', borderColor: '#007bff',fontWeight:"700" }} > Subscribe</button>
   </Col>
       </div>
    </Row>
      
      </Row>
      </center>
  
        </div>
      </Card.ImgOverlay>
    </Card>
    </Container>
  );
}

export default ImgOverlayExample;