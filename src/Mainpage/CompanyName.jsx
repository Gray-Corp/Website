import React from 'react'
import './Contents.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import girlLogo from '../imgs/Asset1.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

function CompanyName() {
  return (
    <div style={{display:'flex', flexDirection:'column',marginTop:'2.5%'}} className='companyNameAndDetails'>
        <div className='companyName '>
      <div className='comNam'>
       <b> <p>GRAY CORP</p> </b>
      </div>
    </div>

    <div className='comMoto'>
      <Container fluid='md' className='comMotoPart'>

      <div className='slot' data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-duration="800">
      <b><p>SIMPLE MADE SOLUTIONS</p></b>
      </div>
      <div className='slot-details' data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-duration="800">
      <p >
                Celebrate innovation with Gray Corp - your premier IT partner. 
                </p>
        </div>
        <div className='slot' id='slotButt' data-aos="fade-up" data-aos-anchor-placement="bottom-center" data-aos-duration="1600" data-aos-easing="ease-in-out">
        <img style={{width:'25%'}} src={girlLogo}></img>
        </div>
        
      </Container>
        
    </div>

    </div>
  )
}

export default CompanyName

/*
 <div className='part1' id='testId'>
      <b><p style={{ fontSize: '5vh' }}>SIMPLE MADE SOLUTIONS</p></b>
      </div>
      <div className='description' id='testId'>
      <p style={{ fontSize: '2.5vh' }}>
                Celebrate innovation with Gray Corp - your premier IT partner. 
                From digital marketing to web hosting, we deliver tailored solutions. 
                Trust us to propel your brand into the digital future.
                </p>
      </div>
      <div className='part3' id='testId'>
              <button > Join with us </button>
              <button id='myBtn'> Learn More </button>
              </div>

              <button className='butt'> Join with us </button>
        <button className='butt' id='myBtn'> Learn More </button>
*/