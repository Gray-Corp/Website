import React from 'react'
import './Contents.css'
import photo from '../imgs/PHOTO.jpg'
import photo2 from '../imgs/Digimarket.jpg'
import photo3 from '../imgs/DPHOTO.jpg'
import photo4 from '../imgs/Designs.jpg'
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
       <img alt='#' className='devPhotoImage' src={photo} ></img>
       <img alt='#' className='devPhotoImage' src={photo2} ></img>
       <img alt='#' className='devPhotoImage' src={photo3} ></img>
       <img alt='#' className='devPhotoImage' src={photo4} ></img>
     </Carousel> 
    
    
  </div>

  )
}

export default Imagecarosol
