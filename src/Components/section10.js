import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function ContainerFluidExample1() {
    const gradientStyle = {
        background: 'linear-gradient(45deg, #FC466B, #3F5EFB)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };
  return (
    <Container className='mb-5'>
        <center>
      <Row className='text-white mb-5'>
        <h5 className='text-primary '>FAQs</h5>
         <h2 className='text-white fs-1 textt'>Frequently</h2>
         <h2 className=' fs-1 textt' style={gradientStyle}>Asked Questions.</h2>
         <h5 className='text-light cardd mb-3' >Learn about new features from frequently asked question.</h5>
      </Row>
      </center>
      <Row>
        <Col className='text-white mb-3' lg={6} md={12}>
        <h5 className=' py-3 mb-3'  style={{ background: "#18245D",borderRadius:"10px"}}>Wait. What Is WordPress?</h5>
         <h6 className='cardd mb-3' style={{"font-size":'18px'}}>Far far away, behind the word Mountains far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmark</h6>
        </Col>
        <Col className='text-white mb-3' lg={6} md={12}>
        <h5 className=' py-3 mb-3'  style={{ background: "#18245D",borderRadius:"10px"}}>Wait. What Is WordPress?</h5>
         <h6 className='cardd mb-3' style={{"font-size":'18px'}}>Far far away, behind the word Mountains far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmark</h6>
        </Col>
      </Row>
      <Row>
        <Col className='text-white mb-3' lg={6} md={12}>
        <h5 className=' py-3 mb-3'  style={{ background: "#18245D",borderRadius:"10px"}}>How Long Do I Get Support?</h5>
         <h6 className='cardd mb-3' style={{"font-size":'18px'}}>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line</h6>
        </Col>
        <Col className='text-white mb-3' lg={6} md={12}>
        <h5 className=' py-3 mb-3'  style={{ background: "#18245D",borderRadius:"10px"}}>How Long Do I Get Support?</h5>
         <h6 className='cardd mb-3' style={{"font-size":'18px'}}>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line</h6>
        </Col>
      </Row>
      <Row>
        <Col className='text-white mb-3' lg={6} md={12}>
        <h5 className=' py-3 mb-3'  style={{ background: "#18245D",borderRadius:"10px"}}>Do I Need To Renew My License?</h5>
         <h6 className='cardd mb-3' style={{"font-size":'18px'}}>Marks and devious Semikoli but the Little Blind Text didn't listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</h6>
        </Col>
        <Col className='text-white mb-3' lg={6} md={12}>
        <h5 className=' py-3 mb-3'  style={{ background: "#18245D",borderRadius:"10px"}}>Do I Need To Renew My License?</h5>
         <h6 className='cardd mb-3' style={{"font-size":'18px'}}>Marks and devious Semikoli but the Little Blind Text didn't listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</h6>
        </Col>
      </Row>
      </Container>
  )
}
export default ContainerFluidExample1;