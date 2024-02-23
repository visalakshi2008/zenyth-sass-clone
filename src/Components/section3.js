import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import image8 from "../assests/icon-1-2.png"
import {useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
function ContainerFluidExample() {
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
  return (
    <Container style={{background:"#030B31",padding:'50px'}} className='mb-5'>
        <center>
      <Row className='text-white'>
    
        <h5 className='text-primary '>Features</h5>
         <h2 className='text-white fs-1 textt'>Creating Products that Improve</h2>
         <h2 className=' fs-1 textt' style={gradientStyle}>Lives Around the Globe.</h2>
         <h5 className='text-light cardd mb-3' >Passionate about creating products that enhance the human experience.</h5>
        
      </Row>
      <Row data-aos="fade-up">
        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
        <Card  style={{ width: '100%',  backgroundColor: "#09144C" }} className='back2 text-white'>
    <center>  <Card.Img variant="top"  src={image8} style={{width:"30%"}} /></center> 
      <Card.Body>
        <Card.Title><h4 className='h22'>DESIGN SYSTEM</h4></Card.Title>
        <Card.Text className='cardd'>
        Leo a diam sollicitudin. Nisl tincidunt eget nullam non. Diam vulputate ut pharetra sit.
        </Card.Text>
     
      </Card.Body>
    </Card>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
     <Card  style={{ width: '100%',  backgroundColor: "#09144C" }} className='back2 text-white'>
    <center>  <Card.Img variant="top"  src={image8} style={{width:"30%"}} /></center> 
      <Card.Body>
        <Card.Title><h4 className='h22'>AUTOMATIC</h4></Card.Title>
        <Card.Text className='cardd'>
        Leo a diam sollicitudin. Nisl tincidunt eget nullam non. Diam vulputate ut pharetra sit.
        </Card.Text>
     
      </Card.Body>
    </Card>
     </Col>
     <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
     <Card  style={{ width: '100%',  backgroundColor: "#09144C" }} className='back2 text-white'>
    <center>  <Card.Img variant="top"  src={image8} style={{width:"30%"}} /></center> 
      <Card.Body>
        <Card.Title><h4 className='h22'>PERFORMANCE</h4></Card.Title>
        <Card.Text className='cardd'>
        Leo a diam sollicitudin. Nisl tincidunt eget nullam non. Diam vulputate ut pharetra sit.
        </Card.Text>
     
      </Card.Body>
    </Card>
     </Col>
     <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
     <Card  style={{ width: '100%',  backgroundColor: "#09144C" }} className='back2 text-white'>
    <center>  <Card.Img variant="top"  src={image8} style={{width:"30%"}} /></center> 
      <Card.Body>
        <Card.Title><h4 className='h22'>DESIGN ASIST</h4></Card.Title>
        <Card.Text className='cardd'>
        Leo a diam sollicitudin. Nisl tincidunt eget nullam non. Diam vulputate ut pharetra sit.
        </Card.Text>
     
      </Card.Body>
    </Card>
     </Col>
      </Row>
      <Row>
        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
        <Card  style={{ width: '100%',  backgroundColor: "#09144C" }} className='back2 text-white'>
    <center>  <Card.Img variant="top"  src={image8} style={{width:"30%"}} /></center> 
      <Card.Body>
        <Card.Title><h4 className='h22'>MARKETING</h4></Card.Title>
        <Card.Text className='cardd'>
        Leo a diam sollicitudin. Nisl tincidunt eget nullam non. Diam vulputate ut pharetra sit.
        </Card.Text>
     
      </Card.Body>
    </Card>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
     <Card  style={{ width: '100%',  backgroundColor: "#09144C" }} className='back2 text-white'>
    <center>  <Card.Img variant="top"  src={image8} style={{width:"30%"}} /></center> 
      <Card.Body>
        <Card.Title><h4 className='h22'>PROTECTION</h4></Card.Title>
        <Card.Text className='cardd'>
        Leo a diam sollicitudin. Nisl tincidunt eget nullam non. Diam vulputate ut pharetra sit.
        </Card.Text>
     
      </Card.Body>
    </Card>
     </Col>
     <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
     <Card  style={{   backgroundColor: "#09144C" }} className='back2 text-white'>
    <center>  <Card.Img variant="top"  src={image8} style={{width:"30%"}} /></center> 
      <Card.Body>
        <Card.Title><h4 className='h22'> COMPOSABLE</h4></Card.Title>
        <Card.Text className='cardd'>
        Leo a diam sollicitudin. Nisl tincidunt eget nullam non. Diam vulputate ut pharetra sit.
        </Card.Text>
     
      </Card.Body>
    </Card>
     </Col>
     <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
     <Card  style={{ width: '100%',  backgroundColor: "#09144C" }} className='back2 text-white'>
    <center>  <Card.Img variant="top"  src={image8} style={{width:"30%"}} /></center> 
      <Card.Body>
        <Card.Title><h4 className='h22'> NETWORK</h4></Card.Title>
        <Card.Text className='cardd'>
        Leo a diam sollicitudin. Nisl tincidunt eget nullam non. Diam vulputate ut pharetra sit.
        </Card.Text>
     
      </Card.Body>
    </Card>
     </Col>
      </Row>
      </center>
    </Container>
  );
}

export default ContainerFluidExample;