import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import image24 from "../assests/icons8-checked-checkbox-48.png";
import image25 from "../assests/icons8-close-window-32.png";
import {useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
function ContainerFluidExample() {
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
    <Container className='mb-5'>
        <center>
      <Row className='text-white mb-5'>
        <h5 className='text-primary '>Our Pricing</h5>
         <h2 className='text-white fs-1 textt'>Our Pricing Plan</h2>
         <h2 className=' fs-1 textt' style={gradientStyle}>Become Professional.</h2>
         <h5 className='text-light cardd mb-3' >Gives you complete control over everything.</h5>
      </Row>
      </center>
      <Row data-aos="fade-up">
        <Col className='mb-3' lg={4} md={6} sm={12}>
        <Card  style={{ background: "#18245D", width:"100%" }}>
    
      <Card.Body className='text-white mb-3'>
       <center><Card.Title>BASIC</Card.Title>
       <p className='cardd'>TERMS & CONDITION</p>
       </center> 
       <div style={{padding:"0px",margin:'0px'}}>
        <center className='mb-2'>
        <div style={{borderRadius: "50px ",background:"white",color:"#18245D",padding:"10px"}}>
   <h1>$ 39.99/ <span style={{"font-size":"15px","color":"black"}}>Month</span> </h1> 
       </div>
        </center>
        
      
       </div>
       <Row className='mb-1'>
     
            <Col > <Row >
<Col lg={1}></Col>
                <Col lg={1}>
            <img src={image24} width={30} alt='iagr'></img> </Col><Col lg={10}><p style={{"padding":"3px"}} className='text-white'>Upgrade to a paid Version</p></Col></Row>
            </Col>
                
           
         </Row>
         <Row className='mb-1'>
     
     <Col > <Row >
<Col lg={1}></Col>
         <Col lg={1}>
     <img src={image24} width={30} alt='iagr'></img> </Col><Col lg={10}><p style={{"padding":"3px"}} className='text-white'> Access the Product or Service</p></Col></Row>
     </Col>
         
    
  </Row>
  
  <Row className='mb-1'>
     
     <Col > <Row >
<Col lg={1}></Col>
         <Col lg={1}>
     <img src={image25} width={21} alt='iagr'></img> </Col><Col lg={10}><p style={{"padding":"3px"}} className='text-white'> Users who access the Software</p></Col></Row>
     </Col>
         
    
  </Row>
  
  <Row className='mb-1'>
     
     <Col > <Row >
<Col lg={1}></Col>
         <Col lg={1}>
     <img src={image25} width={21} alt='iagr'></img> </Col><Col lg={10}><p style={{"padding":"3px"}} className='text-white'>Upgrades and support may require</p></Col></Row>
     </Col>
         
    
  </Row>
  
  <Row className='mb-1'>
     
     <Col > <Row >
<Col lg={1}></Col>
         <Col lg={1}>
     <img src={image25} width={21} alt='iagr'></img> </Col><Col lg={10}><p style={{"padding":"3px"}} className='text-white'>This may include volume discounts</p></Col></Row>
     </Col>
         
    
  </Row>
 <center> <button type="button" variant="outline-info" class="  btn but1 rounded-pill text-white px-5 "  style={{ border: '1.5px solid #fff', borderColor: '#007bff',fontWeight:"700" }} >Start Now</button>
 </center>
      </Card.Body>
     
    </Card>
        </Col>
        
        <Col  className='mb-3' lg={4} md={6} sm={12}>
        <Card  style={{ background: "#18245D", width:"100%" }}>
    
      <Card.Body className='text-white mb-3'>
       <center><Card.Title>STANDART</Card.Title>
       <p className='cardd'>TERMS & CONDITION</p>
       </center> 
       <div style={{padding:"0px",margin:'0px'}}>
        <center className='mb-2'>
        <div style={{borderRadius: "50px ",background:"white",color:"#18245D",padding:"10px"}}>
   <h1>$ 89.99/ <span style={{"font-size":"15px","color":"black"}}>Month</span> </h1> 
       </div>
        </center>
        
      
       </div>
       <Row className='mb-1'>
     
            <Col > <Row >
<Col lg={1}></Col>
                <Col lg={1}>
            <img src={image24} width={30} alt='iagr'></img> </Col><Col lg={10}><p style={{"padding":"3px"}} className='text-white'>Upgrade to a paid Version</p></Col></Row>
            </Col>
                
           
         </Row>
         <Row className='mb-1'>
     
     <Col > <Row >
<Col lg={1}></Col>
         <Col lg={1}>
     <img src={image24} width={30} alt='iagr'></img> </Col><Col lg={10}><p style={{"padding":"3px"}} className='text-white'> Access the Product or Service</p></Col></Row>
     </Col>
         
    
  </Row>
  
  <Row className='mb-1'>
     
     <Col > <Row >
<Col lg={1}></Col>
         <Col lg={1}>
     <img src={image25} width={21} alt='iagr'></img> </Col><Col lg={10}><p style={{"padding":"3px"}} className='text-white'> Users who access the Software</p></Col></Row>
     </Col>
         
    
  </Row>
  
  <Row className='mb-1'>
     
     <Col > <Row >
<Col lg={1}></Col>
         <Col lg={1}>
     <img src={image25} width={21} alt='iagr'></img> </Col><Col lg={10}><p style={{"padding":"3px"}} className='text-white'>Upgrades and support may require</p></Col></Row>
     </Col>
         
    
  </Row>
  
  <Row className='mb-1'>
     
     <Col > <Row >
<Col lg={1}></Col>
         <Col lg={1}>
     <img src={image25} width={21} alt='iagr'></img> </Col><Col lg={10}><p style={{"padding":"3px"}} className='text-white'>This may include volume discounts</p></Col></Row>
     </Col>
         
    
  </Row>
 <center> <button type="button" variant="outline-info" class="  btn but1 rounded-pill text-white px-5 "  style={{ border: '1.5px solid #fff', borderColor: '#007bff',fontWeight:"700" }} >Start Now</button>
 </center>
      </Card.Body>
     
    </Card>
        </Col >
      <Col  className='mb-3' lg={4} md={6} sm={12}>
      <Card  style={{"background": "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(4,4,237,1) 99%, rgba(249,250,251,1) 100%)" }}>
    
      <Card.Body className='text-white mb-3'>
       <center><Card.Title>BASIC</Card.Title>
       <p className='cardd'>TERMS & CONDITION</p>
       </center> 
       <div style={{padding:"0px",margin:'0px'}}>
        <center className='mb-2'>
        <div style={{borderRadius: "50px ",background:"white",color:"#18245D",padding:"10px"}}>
   <h1>$ 120.99/ <span style={{"font-size":"15px","color":"black"}}>Month</span> </h1> 
       </div>
        </center>
        
      
       </div>
       <Row className='mb-1'>
     
            <Col > <Row >
<Col lg={1}></Col>
                <Col lg={1}>
            <img src={image24} width={30} alt='iagr'></img> </Col><Col lg={10}><p style={{"padding":"3px"}} className='text-white'>Upgrade to a paid Version</p></Col></Row>
            </Col>
                
           
         </Row>
         <Row className='mb-1'>
     
     <Col > <Row >
<Col lg={1}></Col>
         <Col lg={1}>
     <img src={image24} width={30} alt='iagr'></img> </Col><Col lg={10}><p style={{"padding":"3px"}} className='text-white'>Access the Product or Service</p></Col></Row>
     </Col>
         
    
  </Row>
  
  <Row className='mb-1'>
     
     <Col > <Row >
<Col lg={1}></Col>
         <Col lg={1}>
     <img src={image25} width={21} alt='iagr'></img> </Col><Col lg={10}><p style={{"padding":"3px"}} className='text-white'> Users who access the Software</p></Col></Row>
     </Col>
         
    
  </Row>
  
  <Row className='mb-1'>
     
     <Col > <Row >
<Col lg={1}></Col>
         <Col lg={1}>
     <img src={image25} width={21} alt='iagr'></img> </Col><Col lg={10}><p style={{"padding":"3px"}} className='text-white'>Upgrades and support may require</p></Col></Row>
     </Col>
         
    
  </Row>
  
  <Row className='mb-1'>
     
     <Col > <Row >
<Col lg={1}></Col>
         <Col lg={1}>
     <img src={image25} width={21} alt='iagr'></img> </Col><Col lg={10}><p style={{"padding":"3px"}} className='text-white'>This may include volume discounts</p></Col></Row>
     </Col>
         
    
  </Row>
 <center> <button type="button" variant="outline-info" class="  btn but1 rounded-pill text-white px-5 "  style={{ border: '1.5px solid #fff', borderColor: '#007bff',fontWeight:"700" }} >Start Now</button>
 </center>
      </Card.Body>
     
    </Card></Col>
      </Row>
    </Container>
  );
}

export default ContainerFluidExample;