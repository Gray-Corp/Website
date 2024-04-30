import React from 'react'
import './Contents.css'
import photo from '../imgs/PHOTO.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer, faGlobe, faMobilePhone } from '@fortawesome/free-solid-svg-icons'
import Imagecarosol from './Imagecarosol'
import backgroundImage from '../imgs/Maintenance.png'
import Go from "../imgs/SVG/GO.svg"
import Next from "../imgs/SVG/NEXT.svg"
import Level from "../imgs/SVG/LEVEL.svg"
import consultingLogo from "../imgs/Asset 38.svg"
import techSolLogo from "../imgs/tecSolLogo.svg"
import marketingSolLogo from "../imgs/marketLogo.svg"
import { scrollMore } from 'react-scroll/modules/mixins/animate-scroll'
import {Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import ServiceTitles from '../Services/ServiceTitles'
const Products = () => {
  const link1 = ()=>{
    window.location.href = "/services"

  }
  const link2 = ()=>{
    const targetElement = document.querySelector('#link2');
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
    window.location.href = "/services";
  
    
  }
  const link3 = ()=>{
    window.location.href = "/services"
    
  }
  return (
    <div className='products bg-[#333333] '>
    <div className='card' onClick={link1}> 
    <div className='ProIcon'><img src={techSolLogo} alt='' className=' md:h-20 md:w-20 mob:h-14 mob:w-14'/></div>
    <div className='ProName mob:pt-5'><b> <p className='mob:text-xs md:font-semibold mob:font-medium mob:px-3'> TECH SOLUTIONS </p> </b></div>
     </div>
     <div className='card' onClick={link2}> 
    <div className='ProIcon'><img src={marketingSolLogo} alt='' className=' md:h-20 md:w-20 mob:h-14 mob:w-14'/></div>
    <div className='ProName mob:pt-5'><b> <p className='mob:text-xs md:font-semibold mob:font-medium'> BRANDING & MARKETING </p> </b></div>
     </div>
     <div className='card' onClick={link3}> 
    <div className='ProIcon'><img src={consultingLogo} alt='' className=' md:h-20 md:w-20 mob:h-14 mob:w-14'/> </div>
    <div className='ProName mob:pt-5'><b> <p className='mob:text-xs md:font-semibold mob:font-medium'> CONSULTING & SUPPORT </p> </b></div>
     </div>
    </div>
  );
}

export default Products;
