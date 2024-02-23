import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image12 from "../assests/developer-on-computer.jpg";
import Card from 'react-bootstrap/Card';
import image14 from "../assests/5f84c9c63994cf5e2aa8a847_5f60bb588b56729a257075ba_Hiring-IT-Professionals.jpeg";
import image15 from "../assests/R.png";
import image13 from "../assests/How-to-Get-Help-From-Your-Health-Department.jpg"
import image18 from "../assests/employees.jpg";
import image19 from "../assests/logo-1.png"
import image20 from "../assests/logo-2.png"
import image21 from "../assests/logo-3.png"
import image22 from "../assests/logo-4.png"
import image23 from "../assests/logo-5.png"
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
      <Row  >
        <Col lg={9} xs={12} md={8}>
         <h5 className='text-primary '>Our Portfolio</h5>
         <h2 className='text-white fs-1 textt'>Ready to Our Product</h2>
         <h2 className=' fs-1 textt' style={gradientStyle}>Creativity Portfolio Zenith.</h2>
        </Col>
        </Row>
<Row className='mb-5'>
   
    <Col lg={6} md={6} sm={12} className='mb-5' data-aos="fade-right">
    <Card style={{ background: "#18245D" }}>
 
   
  
  
      <Card.Body style={{ background: "#18245D" }}>
        <Card.Text className='cardd'>NAME COMPANY</Card.Text>
        <Card.Text className='text-white'><h4>CREATE SOFTWARE ENGINEERING</h4></Card.Text>
      
      </Card.Body>

     
        <div className="custom-card card-img-container">
        <div className="overlay"></div>
        <Card.Text className="text-overlay" style={{fontWeight:"700"}}>Tech Sensor Blue Display</Card.Text>

        <button type="button" variant="outline-info" class=" custom-button text-overlay btn but1 rounded-pill text-white "  style={{ border: '1.5px solid #fff', borderColor: '#007bff',fontWeight:"700" }} >Read More</button>
      
    <Card.Img variant="top" src={image12} className="card-image" />
    
  </div>
</Card>

    </Col >
    <Col lg={6} md={6} sm={12} className='mb-5' data-aos="fade-left">
    <Card style={{ background: "#18245D" }}>
 
   
  
  
      <Card.Body style={{ background: "#18245D" }}>
        <Card.Text className='cardd'>NAME COMPANY</Card.Text>
        <Card.Text className='text-white'><h4>APPS MOBILE APPLICATIONS</h4></Card.Text>
      
      </Card.Body>

     
        <div className="custom-card card-img-container">
        <div className="overlay"></div>
        <Card.Text className="text-overlay" style={{fontWeight:"700"}}>Innovative Business Technology</Card.Text>

        <button type="button" variant="outline-info" class=" custom-button text-overlay btn but1 rounded-pill text-white "  style={{ border: '1.5px solid #fff', borderColor: '#007bff',fontWeight:"700" }} >Read More</button>
      
    <Card.Img variant="top" src={image13}  />
    
  </div>
</Card>


    </Col>
</Row>
        <Row className='mb-3 '>
          <Col lg={4} md={6} sm={12} className='mb-5' data-aos="fade-right">
          <Card style={{ background: "#18245D" }}>
 
   
  
  
 <Card.Body style={{ background: "#18245D" }}>
   <Card.Text className='cardd'>NAME COMPANY</Card.Text>
   <Card.Text className='text-white'><h4>MARKETING AUTOMATION</h4></Card.Text>
 
 </Card.Body>


   <div className="custom-card card-img-container">
   <div className="overlay"></div>
   <Card.Text className="text-overlay" style={{fontWeight:"700"}}>Software Research</Card.Text>

   <button type="button" variant="outline-info" class=" custom-button text-overlay btn but1 rounded-pill text-white "  style={{ border: '1.5px solid #fff', borderColor: '#007bff',fontWeight:"700" }} >Read More</button>
 
<Card.Img variant="top" src={image14} className="card-image" />

</div>
</Card >
          </Col>
          <Col lg={4} md={6} sm={12} className='mb-5' data-aos="fade-up">
          <Card style={{ background: "#18245D" }}>
 
   
  
  
 <Card.Body style={{ background: "#18245D" }}>
   <Card.Text className='cardd'>NAME COMPANY</Card.Text>
   <Card.Text className='text-white'><h4>EXPLORING VR TECH</h4></Card.Text>
 
 </Card.Body>


   <div className="custom-card card-img-container">
   <div className="overlay"></div>
   <Card.Text className="text-overlay" style={{fontWeight:"700"}}>Exploring Virtual Reality</Card.Text>

   <button type="button" variant="outline-info" class=" custom-button text-overlay btn but1 rounded-pill text-white "  style={{ border: '1.5px solid #fff', borderColor: '#007bff',fontWeight:"700" }} >Read More</button>
 
<Card.Img variant="top" src={image18} className="card-image" />

</div>
</Card>
          </Col>
          <Col lg={4} md={6} sm={12} className='mb-5' data-aos="fade-left">
          <Card style={{ background: "#18245D" }}>
 
   
  
  
 <Card.Body style={{ background: "#18245D" }}>
   <Card.Text className='cardd'>NAME COMPANY</Card.Text>
   <Card.Text className='text-white'><h4>SECURITY APPLICATIONS</h4></Card.Text>
 
 </Card.Body>


   <div className="custom-card card-img-container">
   <div className="overlay"></div>
   <Card.Text className="text-overlay" style={{fontWeight:"700"}}>Security Technology</Card.Text>

   <button type="button" variant="outline-info" class=" custom-button text-overlay btn but1 rounded-pill text-white "  style={{ border: '1.5px solid #fff', borderColor: '#007bff',fontWeight:"700" }} >Read More</button>
 
<Card.Img variant="top" src={image15} className="card-image" />

</div>
</Card>
          </Col>
        </Row >
       <center className='mb-5'>
       <h4 className='text-white fs-1 textt' data-aos="fade-up">Trusted over  <span className=' fs-1 textt' style={gradientStyle}> 2600+</span> Company in the World.</h4>
       </center>
       <center>
       <Row className='mb-5' data-aos="fade-up">
        <Col>
        <img src={image19} width={200} alt='19'></img>
        </Col>
        <Col>
        <img src={image20}  width={200}  alt='20'></img>
        </Col>
        <Col>
        <img src={image21}   width={200} alt='22'></img>
        </Col>
        <Col>
        <img src={image22}  width={200}  alt='-21'></img>
        </Col>
        <Col>
        <img src={image23}   width={200} alt='23'></img>
        </Col>

       </Row>
       </center>
        </Container>
  )}
  
export default ResponsiveExample;