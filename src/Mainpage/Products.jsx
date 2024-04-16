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
const Products = () => {
  return (
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
  );
}

export default Products;
