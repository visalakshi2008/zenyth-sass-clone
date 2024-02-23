import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import image9 from "../assests/photo-2-1.png"
import image8 from "../assests/zenith-logo-2.png"
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
      <Row className='mb-5'>
       
        <Col lg={6} md={12}>
        <h5 className='text-primary '>Solution Tech</h5>
         <h2 className='text-white fs-1 textt'>Commitment to Innovation</h2>
         <h2 className=' fs-1 textt' style={gradientStyle}>More Enjoyable & Connected.</h2>
         <h5 className='text-light cardd mb-3' >We believe technology should make our lives easier, more enjoyable and more connected.</h5>
         <p className='cardd '>Quis hendrerit dolor magna eget est. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Aliquam sem fringilla ut morbi tincidunt augue. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus.</p>
         <Row>
            <Col lg={2}>
            <img src={image8} width={60} alt='iagr'></img> </Col><Col lg={10}><h5 style={{"padding":"3px"}} className='text-white'>LICENSEES AND TRUSTED COMPANY</h5></Col></Row>
            <Card.Text> <button type="button" variant="outline-info" class="btn but1 rounded-pill text-white px-5" style={{borderRadius:"50px","color":"white",fontSize:"18px",backgroundImage: "linear-gradient(315deg,#191714  0%, #2234ae 74%)",border: '1.5px solid #fff', borderColor: '#007bff',fontWeight:"700"}} > Disvover Now</button></Card.Text>
         </Col>
         <Col lg={6} md={12} className='mb-5'>
        <Card style={{ width: '100%',background:"#0a2351" }}>
      <Card.Img variant="top" data-aos="fade-left" src={image9} />
    
    </Card>
        </Col>
      </Row>
      </Container>
  );
}

export default AutoLayoutExample;