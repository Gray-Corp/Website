import React from 'react'
import './main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faArrows, faEnvelope, faGlobe, faLocation, faLocationArrow, faMobile, faMobileButton, faPhone, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome, faFacebook, faInstagram, faYoutube, faTiktok, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import logoBlack from '../imgs/Logo Black.svg';
import { Divider } from 'antd';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';

const contacts=[
  {
    id:1,
    icon:faMobile,
    name:"+94 70 485 2889",
    link:"tel:+94704852889",
  },
  {
    id:2,
    icon: faEnvelope,
    name:"info@graycorp.io",
    link:"mailto:info@graycorp.io"
  },
  {
    id:3,
    icon: faWhatsapp,
    name:"+94 70 485 2889",
    link:"https://wa.me/+94704852889"
  },
  {
    id:4,
    icon: faLocationArrow,
    name: (
      <>
          15, Kannathiddy road, Jaffna – SL
      </>
  ),
  link:"#",

  }
]
const companyLinks=[
  {
    id:1,
    title:"Products", 
    details:[
      "IMS System",
      "E-Commerce Websites",
      "Static Websites",
      "Mobile Apps",
    ]
  },
  {
    id:2,
    title:"Services", 
    details:[
      "Tech",
      "Branding",
      "Supporting",
      "Consulting",
    ]
  },
  {
    id:3,
    title:"Other Projects", 
    details:[
      "We creatures",
      "Let's share",
      "More Green",
      "MDBootstrap",
    ]
  },
  {
    id:4,
    title:"Support", 
    details:[
      "FAQ",
      "Careers",
      "About us",
      "Contact",
    ]
  },

]


function FooterMenu() {
  return (
    <>
    <div className='footerMain flex justify-center border-t-2 border-[#999999] items-center shadow-xl py-7'>
    <div className='h-7'></div>
    <div>
    <div className='footerLogoMotoSocial'>
    <div className='footerLogo'><img style={{height:'100%', width:'100%'}} src={logoBlack}></img></div>
    <div className='footerMoto'><h3 style={{fontSize:'3vh',fontFamily:'font-family: `Inter`, sans-serif;'}}> SOLUTIONS MADE SIMPLE </h3></div>
    <div className='footerSocial'> 
    
    <a href='https://www.facebook.com/company/thegraycorp/' target='_blank'><FontAwesomeIcon icon={faFacebook} style={{fontSize:'3vh'}}/></a>
    <a href='https://www.twitter.com/company/thegraycorp/' target='_blank'><FontAwesomeIcon icon={faTwitter} style={{fontSize:'3vh'}}/></a>
    <a href='https://www.linkedin.com/company/thegraycorp/' target='_blank'><FontAwesomeIcon icon={faLinkedin} style={{fontSize:'3vh'}}/></a>
    <a href='https://www.instagram.com/thegraycorp/' target='_blank'><FontAwesomeIcon icon={faInstagram} style={{fontSize:'3vh'}}/></a>
     </div>
    
    </div>
    </div>
   
    <div className='footerDetails md:w-9/12 mob:w-full gap-5'>
    <div className='flex md:border-b-2 border-t-2 border-[#cccccc] md:space-x-24 md:py-10 
    justify-center mob:gap-y-7 mob:gap-x-7 mob:flex-wrap mob:py-7'>
    {contacts.map(contact => (
      
      <Link
            to='#'
            onClick={(e) => {
                window.location.href = contact.link
                e.preventDefault();
            }}
        target='_blank'>
      
        
     <span className ={`flex flex-col mob:flex-wrap 
      gap-3 mob:gap-y-7 mob:${contact.id === 4 ? 'w-full' : 'w-1/3'} justify-center items-center text-center`} >
      <FontAwesomeIcon icon={contact.icon} className='text-[3.5vh] mob:text-[2.5vh]'/>
        <p className='mob:text-sm'>{contact.name}</p>
      </span>
      </Link>

    ))}
    </div>
    <div className='flex justify-between md:w-10/12 px-1 mob:w-full 
    mob:items-center text-center mob:justify-center mob:hidden'>
    {companyLinks.map(link => (
      <div key={link.id} 
      className='flex flex-col gap-3 mob:w-1/2'>
        <span><h1>{link.title}</h1></span>
        <div className='flex flex-col gap-1 '>
        {link.details.map(detail => (
          <a key='*' href="#!" className="text-dark" > 
        <p style={{fontSize:'1.5vh'}}> 
        {detail}  
        </p></a>
        ))}
        </div>
      </div>
    ))}
    </div>
    </div>

    </div>
    <div className='bg-[#333333] h-[5vh] w-full text-[#999999] text-xs flex justify-center 
     items-center font-normal space-x-1'><span><p className='text-[2vh]'> © </p> </span>
     <span><p>  Copyrights Reserved for Gray Corp (Pvt) Ltd @ 2024 </p></span>
     </div>
    </>
  )
}

export default FooterMenu;

/*
<div className='footerContactLinks' >
      <div className='footerContacts'>
      <FontAwesomeIcon icon={faMobile} style={{fontSize:'3.5vh'}}/>
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
*/