import React from 'react'
import './Contents.css'

import photo2 from '../imgs/BigSlider/Asset 1.svg'
import photo3 from '../imgs/BigSlider/Asset 2.svg'
import photo4 from '../imgs/BigSlider/Asset 3.svg'
import photo5 from '../imgs/BigSlider/Asset 4.svg'
import { Carousel } from 'antd'
import Button from 'react-bootstrap/Button';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Container from 'react-bootstrap/esm/Container'

AOS.init();

function Imagecarosol() {
  return (
    <div className='devPhoto' >
       <Carousel autoplay style={{height:'auto',width:'100%'}}>
 
       <img alt='#' className='devPhotoImage' src={photo2} ></img>
       <img alt='#' className='devPhotoImage' src={photo3} ></img>
       <img alt='#' className='devPhotoImage' src={photo4} ></img>
       <img alt='#' className='devPhotoImage' src={photo5} ></img>
     </Carousel> 
    
    
  </div>

  )
}

export default Imagecarosol
