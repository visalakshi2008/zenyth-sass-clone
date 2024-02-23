import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import image10 from "../assests/photo-7.png"
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
      <Card.Img variant="top" data-aos="fade-right" src={image10} />
    
    </Card>
        </Col>
        <Col lg={6} md={12}>
        <h5 className='text-primary '>Trusted Client</h5>
         <h2 className='text-white fs-1 textt'>Trusted Around the World</h2>
         <h2 className=' fs-1 textt' style={gradientStyle}>& Connected with Partner.</h2>
         <h5 className='text-light cardd mb-3' >Smart Tech System is the ultimate smart home solution.</h5>
         <p className='cardd '>Nisl suscipit adipiscing bibendum est. Enim lobortis scelerisque fermentum dui faucibus. Mattis aliquam faucibus purus in. Mattis aliquam faucibus purus in massa. Fermentum leo vel orci porta non. Id eu nisl nunc mi ipsum faucibus.vel orci porta non. Id eu nisl nunc mi ipsum faucibus.</p>
        </Col>
      </Row>
      </Container>
  );
}

export default AutoLayoutExample;