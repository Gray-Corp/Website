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
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Developing() {
  return (
    <div className='devMain' >
   
      <div className='flex flex-col space-y-1 md:h-[85vh] w-full justify-center items-center text-center  pt-2 bg-[#333333] text-[#cccccc]'>
      <div className='flex flex-col md:gap-12 justify-start items-start divGNL pt-2 pb-3  w-9/12'>
      <img src={Go} className=' md:h-[20vh] GNL'/>
      <img src={Next} className=' md:h-[20vh] GNL'/>
      <img src={Level} className=' md:h-[20vh] GNL'/>
      </div>
      </div>
      <Imagecarosol/>
    <div className='products'>
    <div className='productTypes card'> 
    <div className='ProIcon'><FontAwesomeIcon icon={faMobilePhone}/></div>
    <div className='ProName'><b> <p> IT SOLUTIONS </p> </b></div>
     </div>
     <div className='productTypes card'> 
    <div className='ProIcon'><FontAwesomeIcon icon={faComputer}/></div>
    <div className='ProName'><b> <p> BRANDING & MARKETING </p> </b></div>
     </div>
     <div className='productTypes card'> 
    <div className='ProIcon'><FontAwesomeIcon icon={faGlobe}/></div>
    <div className='ProName'><b> <p> GRAPHICS AND DESIGNING </p> </b></div>
     </div>
    </div>
    </div>
  )
}

export default Developing

/*
<p className='text-center md:text-[20vh]'
    data-aos="fade-up"
    data-aos-duration="500"
    data-aos-easing="ease-in"
    data-aos-anchor-placement="top-center"> UNLEASH YOUR </p>
    <p
    className='text-center md:text-[28vh] ml-10'
    data-aos="fade-up"
    data-aos-duration="500"
    data-aos-easing="ease-in"
    data-aos-anchor-placement="top-center">POTENTIAL</p>
*/