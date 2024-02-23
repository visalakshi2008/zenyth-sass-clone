import React from 'react';
import Card from 'react-bootstrap/Card';
import image1 from "../assests/data-protocol.jpg"
import "../css/back.css"
import {useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
function ImgOverlayExample() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
    });
  }, []);
  return (
    <Card className="bg-dark mb-5 ">
      <Card.Img src={image1} alt="Card image " className="heightt" />
      <Card.ImgOverlay>
      <div className="d-flex flex-column  align-items-center text-white h-100" >
      <button type="button" class="btn  but text-white rounded-pill"  >TECH COMPANY</button>
       <center>
        <Card.Text className='work'  data-aos="fade-up" >
        Introducing Newtech,<br/>
A Cutting-Edge <br/> Technology.
        </Card.Text>
        <Card.Text className='names'> People worldwide love how easy it is to design, simple & fast join us  <br/> for designing your new technology.</Card.Text>
        <Card.Text> <button type="button" variant="outline-info" class="btn but1 rounded-pill text-white px-5"  style={{ border: '1.5px solid #fff', borderColor: '#007bff',fontWeight:"700" }} > Explore Our Projects</button></Card.Text>
        <Card.Text><p>Free registration it for free for 7 days</p></Card.Text>
        </center>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;