import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
function ContainerFluidExample() {
    const gradientStyle = {
        background: 'linear-gradient(45deg, #FC466B, #3F5EFB)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };
  return (
    <Container style={{background:"#030B31",padding:'50px'}} className='mb-5'>
        <center>
      <Row className='text-white'>
        <h5 className='text-primary '>How It Work</h5>
         <h2 className='text-white fs-1 textt'>Do your Best</h2>
         <h2 className=' fs-1 textt' style={gradientStyle}>& Connected with Partner.</h2>
         <h5 className='text-light cardd mb-3' >Smart Tech System is the ultimate smart home solution.</h5>
      </Row>
      </center>
    </Container>
  );
}

export default ContainerFluidExample;