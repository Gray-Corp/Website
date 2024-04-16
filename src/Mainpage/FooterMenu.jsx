import React from 'react'
import './main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faArrows, faEnvelope, faGlobe, faLocation, faLocationArrow, faMobileButton, faPhone, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome, faFacebook, faInstagram, faYoutube, faTiktok, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import logoBlack from '../imgs/Logo Black.svg';


function FooterMenu() {
  return (
    <>
    <div className='footerMain flex justify-center items-center shadow-xl border-2 border-t-[#999999]'>
    <div>
    <div className='footerLogoMotoSocial'>
    <div className='footerLogo'><img style={{height:'100%', width:'100%'}} src={logoBlack}></img></div>
    <div className='footerMoto'><h3 style={{fontSize:'3vh',fontFamily:'font-family: `Inter`, sans-serif;'}}> SOLUTIONS MADE SIMPLE </h3></div>
    <div className='footerSocial'> 
    <FontAwesomeIcon icon={faFacebook} style={{fontSize:'3vh'}}/>
    <FontAwesomeIcon icon={faTwitter} style={{fontSize:'3vh'}}/>
    <FontAwesomeIcon icon={faLinkedin} style={{fontSize:'3vh'}}/>
    <FontAwesomeIcon icon={faInstagram} style={{fontSize:'3vh'}}/>
     </div>
    
    </div>
    </div>
   
    <div className='footerDetails'>
    <div className='footerContactLinks' >
      <div className='footerContacts'>
       <FontAwesomeIcon icon={faMobileButton} style={{fontSize:'3.5vh'}}/>
       <p style={{fontSize:'1.75vh'}}> +94 70 1111111 </p>
       </div>
       <div className='companyLinks'>
        <h6 className="text-uppercase fw-bold" style={{fontSize:'1.5vh'}}>Products</h6>
        <br/>
        <a href="#!" className="text-dark" > <p style={{fontSize:'1.5vh'}}> MDBootstrap </p></a>
        <a href="#!" className="text-dark" > <p style={{fontSize:'1.5vh'}}> MDBootstrap </p></a>
        <a href="#!" className="text-dark" > <p style={{fontSize:'1.5vh'}}> MDBootstrap </p></a>
        <a href="#!" className="text-dark" > <p style={{fontSize:'1.5vh'}}> MDBootstrap </p></a>
        </div>
      </div>
      <div className='footerContactLinks'>
      <div className='footerContacts'>
       <FontAwesomeIcon icon={faEnvelope} style={{fontSize:'3.5vh'}}/>
       <p style={{fontSize:'1.75vh'}}> info@graycorp.io </p>
       </div>
       <div className='companyLinks'>
        <h6 className="text-uppercase fw-bold" style={{fontSize:'1.5vh'}}>Services</h6>
        <br/>
        <a href="#!" className="text-dark" > <p style={{fontSize:'1.5vh'}}> MDBootstrap </p></a>
        <a href="#!" className="text-dark" > <p style={{fontSize:'1.5vh'}}> MDBootstrap </p></a>
        <a href="#!" className="text-dark" > <p style={{fontSize:'1.5vh'}}> MDBootstrap </p></a>
        <a href="#!" className="text-dark" > <p style={{fontSize:'1.5vh'}}> MDBootstrap </p></a>
        
        </div>
      </div>
      <div className='footerContactLinks'>
      <div className='footerContacts'>
       <FontAwesomeIcon icon={faWhatsapp} style={{fontSize:'3.5vh'}}/>
       <p style={{fontSize:'1.75vh'}}> +94 70 1111111 </p>
       </div>
       <div className='companyLinks'>
        <h6 className="text-uppercase fw-bold" style={{fontSize:'1.5vh'}}>Our Culture</h6>
        <br/>
        <a href="#!" className="text-dark" > <p style={{fontSize:'1.5vh'}} > MDBootstrap </p></a>
        <a href="#!" className="text-dark" > <p style={{fontSize:'1.5vh'}} > MDBootstrap </p></a>
        <a href="#!" className="text-dark" > <p style={{fontSize:'1.5vh'}} > MDBootstrap </p></a>
        <a href="#!" className="text-dark" > <p style={{fontSize:'1.5vh'}}> MDBootstrap </p></a>
       
        </div>
      </div>
      <div className='footerContactLinks'>
      <div className='footerContacts'>
       <FontAwesomeIcon icon={faLocationArrow} style={{fontSize:'3.5vh'}}/>
       <p style={{fontSize:'1.75vh'}}> 15, Kannathiddy road, Jaffna – SL </p>
       </div>
       <div className='companyLinks'>
        <h6 className="text-uppercase fw-bold" style={{fontSize:'1.5vh'}}>Support</h6>
        <br/>
        <a href="#!" className="text-dark" > <p style={{fontSize:'1.5vh'}}> MDBootstrap </p></a>
        <a href="#!" className="text-dark" > <p style={{fontSize:'1.5vh'}}> MDBootstrap </p></a>
        <a href="#!" className="text-dark" > <p style={{fontSize:'1.5vh'}}> MDBootstrap </p></a>
        <a href="#!" className="text-dark" > <p style={{fontSize:'1.5vh'}}> MDBootstrap </p></a>
     
        </div>
      </div>
</div>
    </div>
    <div className='bg-[#333333] h-[5vh] w-full
     text-[#999999] text-xs flex justify-center 
     items-center font-normal space-x-1'><span><p className='text-[2vh]'> © </p> </span><span><p>  Copyrights Reserved for Gray Corp (Pvt) Ltd @ 2024 </p></span></div>
    </>
  )
}

export default FooterMenu;
