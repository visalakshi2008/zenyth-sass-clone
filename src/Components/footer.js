import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo11 from "../assests/zenith-logo-2.png";
import image30 from "../assests/icons8-checked-checkbox-48.png";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function AutoLayoutExample() {
  return (
    <div className='workk d-flex align-items-center justify-content-center text-white'>
    <Container >
     
      <Row className='justify-content-center'>
        <Col><img src={logo11} alt="logo-icon"></img>
        <p className='cardd'>Nisl suscipit adipiscing bibendum est. Enim lobortis scelerisque fermentum dui faucibus. Mattis aliquam faucibus.</p></Col>
        <Col ><h3>COMPANY</h3>
        <div className='d-flex align-items-center mb-3' xs='auto'>
        <img src={image30} width={25} alt="right"></img> 
        <p className='mb-0 px-2'>About Us</p>
        </div>
        <div className='d-flex align-items-center mb-3' xs='auto'>
        <img src={image30} width={25} alt="right"></img> 
        <p className='mb-0 px-2'>Professional Team</p>
        </div>
        <div className='d-flex align-items-center mb-3' xs='auto'>
        <img src={image30} width={25} alt="right"></img> 
        <p className='mb-0 px-2'>Our Portfolio</p>
        </div>
        <div className='d-flex align-items-center mb-3' xs='auto'>
        <img src={image30} width={25} alt="right"></img> 
        <p className='mb-0 px-2'>Article & News</p>
        </div>
        <div className='d-flex align-items-center mb-3' xs='auto'>
        <img src={image30} width={25} alt="right"></img> 
        <p className='mb-0 px-2'>Let's Talk</p>
        </div>
        </Col>
         <Col ><h3>SERVICES</h3>
        <div className='d-flex align-items-center mb-3' xs='auto'>
        <img src={image30} width={25} alt="right"></img> 
        <p className='mb-0 px-2'>Mobile Apps</p>
        </div>
        <div className='d-flex align-items-center mb-3' xs='auto'>
        <img src={image30} width={25} alt="right"></img> 
        <p className='mb-0 px-2'>Virtual Platform </p>
        </div>
        <div className='d-flex align-items-center mb-3' xs='auto'>
        <img src={image30} width={25} alt="right"></img> 
        <p className='mb-0 px-2'>Ai Software </p>
        </div>
        <div className='d-flex align-items-center mb-3' xs='auto'>
        <img src={image30} width={25} alt="right"></img> 
        <p className='mb-0 px-2'>Marketing Automation</p>
        </div>
        <div className='d-flex align-items-center mb-3' xs='auto'>
        <img src={image30} width={25} alt="right"></img> 
        <p className='mb-0 px-2'>Custom Project</p>
        </div>
        </Col>
        <Col>
        <h3 className='mb-3'>NEWS LETTER</h3>
        <p className='cardd mb-3'>Signup our newsletter to get update information, news or insight.</p>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <button type="button" variant="outline-info" class="btn but1 rounded-pill text-white px-5"  style={{ border: '1.5px solid #fff', borderColor: '#007bff',fontWeight:"700" }} >Subscribe</button>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default AutoLayoutExample;