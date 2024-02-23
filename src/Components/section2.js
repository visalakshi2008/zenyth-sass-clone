import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import image7 from "../assests/photo-1-4.png"
import image8 from "../assests/icons8-checked-checkbox-48.png"
import {useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
function AutoLayoutExample() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
    });
  }, []);
    const gradientStyle = {
        background: 'linear-gradient(45deg, #FC466B, #3F5EFB)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };
  return (
    <Container>
      <Row>
        <Col lg={6} md={12} className='mb-5'>
        <Card style={{ width: '100%',background:"#0a2351" }}>
      <Card.Img variant="top" data-aos="fade-right" src={image7} />
    
    </Card>
        </Col>
        <Col lg={6} md={12}>
        <h5 className='text-primary '>About Company</h5>
         <h2 className='text-white fs-1 textt'>System is Ultimate Smart</h2>
         <h2 className=' fs-1 textt' style={gradientStyle}>you can Control Every Aspect.</h2>
         <h5 className='text-light cardd mb-3' >We're dedicated to pushing the boundaries of what's possible through innovation.</h5>
         <p className='cardd '>Nisl suscipit adipiscing bibendum est. Enim lobortis scelerisque fermentum dui faucibus. Mattis aliquam faucibus purus in. Mattis aliquam faucibus purus in massa. Fermentum leo vel orci porta non. Id eu nisl nunc mi ipsum faucibus.</p>
         <Row>
            <Col> <Row>
            <Col lg={2}>
            <img src={image8} width={30} alt='iagr'></img> </Col><Col lg={10}><h6 style={{"padding":"3px"}} className='text-white'>Trusted by Company 2009</h6></Col></Row>
            </Col>
            <Col> <Row>
            <Col lg={2}>
            <img src={image8} width={30} alt='iagr'></img> </Col><Col lg={10}><h6 style={{"padding":"3px"}}  className='text-white'> Licensed & Regulated</h6></Col></Row>
            </Col>
         </Row>
         <Row>
            <Col> <Row>
            <Col lg={2}>
            <img src={image8} width={30} alt='iagr'></img> </Col><Col lg={10}><h6 style={{"padding":"3px"}} className='text-white'>
Professional Support User</h6></Col></Row>
            </Col>
            <Col> <Row>
            <Col lg={2}>
            <img src={image8} width={30} alt='iagr'></img> </Col><Col lg={10}><h6 style={{"padding":"3px"}}  className='text-white'>Comprehensive Analysis</h6></Col></Row>
            </Col>
         </Row>
         <Row>
            <Col> <Row>
            <Col lg={2}>
            <img src={image8} width={30} alt='iagr'></img> </Col><Col lg={10}><h6 style={{"padding":"3px"}} className='text-white'>
Optimized Tech Solutions</h6></Col></Row>
            </Col>
            <Col> <Row>
            <Col lg={2}>
            <img src={image8} width={30} alt='iagr'></img> </Col><Col lg={10}><h6 style={{"padding":"3px"}}  className='text-white'> Premium Technology Company</h6></Col></Row>
            </Col>
         </Row>
        </Col>
      </Row>
      </Container>
  );
}

export default AutoLayoutExample;