import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image3 from "../assests/photo-4.png"
import image4 from "../assests/zenith-logo-2.png"
import image5 from "../assests/photo-6-1.png"
import image6 from "../assests/photo-3-3.png"
import {useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
function ResponsiveExample() {
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
    <Container className=' mb-5 '>
      <Row  className='mb-5'>
        <Col lg={9} xs={12} md={8}>
         <h5 className='text-primary '>What We Do</h5>
         <h2 className='text-white fs-1 textt'>The Tech Smart Home System</h2>
         <h2 className=' fs-1 textt' style={gradientStyle}>We is the ultimate smart solution.</h2>
         <h5 className='text-light cardd' > We're on a mission to create products that change the way people live, work and play.</h5>
        </Col>
        </Row>
<Row>
  <Col lg={4} md={6} sm={12} className="mb-4">
  <Card style={{ width: '100%' }} className='back text-white ' data-aos="fade-right" >
    
    <Card.Body  style={{"padding":"30px"}}>
      <Card.Title><h4 className='h22'>MOBILE APPS</h4></Card.Title>
      <Card.Text className='cardd'>
      Aliquam ut porttitor leo a. Quis imperdiet massa tincidunt nunc pulvinar ultrices dui sapien eget mi proin sed libero.
      </Card.Text>
    <Row>
      <Col>
      <h2 className='h22'>12.235+</h2>
      <Card.Text className='cardd'>+ACTIVE CUSTOMER</Card.Text>
      </Col>
      <Col>
      <h2 className='h22'>$10M</h2>
      <Card.Text className='cardd'>TRANCTION</Card.Text>
      </Col>
    </Row>
    </Card.Body>
    <Card.Img  variant="top" src={image3}  />
  </Card>
  </Col >
  <Col lg={4}  md={6} sm={12} className="mb-4">
  <Row  >
    <Col className="mb-4">
  <Card  data-aos="fade-down" className='back text-white'style={{ width: '100%',background: "radial-gradient(859px at 7.5% 18%, rgb(234, 6, 185) 4.2%, rgb(251, 179, 8) 92.7%)"}} >
    <Card.Body  style={{"padding":"30px"}}>
      <Card.Title><h4 className='h22'>VIRTUAL PLATFORM</h4></Card.Title>
      <Card.Text className='cardd'>
      Aliquam ut porttitor leo a. Quis imperdiet massa tincidunt nunc pulvinar ultrices dui sapien.
      </Card.Text>
    <Card.Text>
      <Row>
        <Col lg={2}> <img width={60} src={image4} alt='image4'></img></Col>
        <Col lg={10}>
        <Card.Title>PLATFORM INCLUDES</Card.Title>
        <h6 className='cardd'>VR, SOCIAL MEDIA, ONLINE LEARNING, ETC</h6>
         </Col>
      </Row>
      <a href='/' className='text-white'>Read more</a>
    </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  </Row>
 <Row >
  <Col className="mb-4">
 <Card data-aos="fade-up" className=' text-white' style={{ width: '100%',backgroundImage: "linear-gradient(315deg, #000133  0%,  #2234ae 50%)"}}>
    
    <Card.Body  style={{"padding":"30px"}}>
      <Card.Title><h4 className='h22'>MARKETING AUTOMATION</h4></Card.Title>
      <Card.Text className='cardd'>Aliquam ut porttitor leo a. Quis imperdiet massa tincidunt nunc pulvinar ultrices.
      </Card.Text>
    <Card.Text>
   
  
    </Card.Text>
    </Card.Body>
    <Card.Img  variant="top" src={image5} />
    
  </Card>
  </Col>
 </Row>
  </Col>
  <Col lg={4}  md={6} sm={12} className="mb-4">
  <Card data-aos="fade-left" className=' text-white' style={{ width: '100%',background:"#0a2351" }}>
  <Card.Img  variant="top" src={image6} />
    <Card.Body  style={{"padding":"30px"}}>
      <Card.Title><h4 className='h22'>AI SOFTWARE</h4></Card.Title>
      <Card.Text className='cardd'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </Card.Text>
    <Card.Text>
    </Card.Text>
    </Card.Body>
   
    
  </Card>
  </Col>
</Row>
   
 <center>
  <p className='text-white' > Need a Custom Project Plan? <a href='/'>Get in touch</a></p>
 </center>

        </Container>
  )}
  
export default ResponsiveExample;