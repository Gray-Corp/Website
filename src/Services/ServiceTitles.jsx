import React, { useEffect } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './service.css'
import graphicsImage from "../imgs/SVG/Graphics.svg";
import ItSolutionImage from "../imgs/SVG/IT solutions.svg";
import MarketingImage from "../imgs/SVG/Marketing.svg";
import photo1 from '../imgs/PHOTO.jpg'
import ServiceImage from "../imgs/ServicesCover.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faArrowAltCircleRight, faArrowDown19, faArrowDownWideShort, faArrowsUpDown, faCartShopping, faCediSign, faComputer, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { faSpeakap } from '@fortawesome/free-brands-svg-icons';
const ServiceTitles = () => {   
  useEffect(() => {
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });
   Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });
  scrollSpy.update();
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const scrollTo = () => {
    scroll.scrollTo(250); 
  };

  const scrollMore = () => {
    scroll.scrollMore(300);
     
  };

  const handleSetActive = (to) => {
    console.log(to);
  };

  const lists = [
    {image:{photo1},description:"jhsjhkjhasdkjsahdkjhk askdkasgd jshdkjsahdk",},
    {image:"../imgs/PHOTO.jpg",description:"jhsjhkjhasdkjsahdkjhk askdkasgd jshdkjsahdk",},
    {image:"../imgs/PHOTO.jpg",description:"jhsjhkjhasdkjsahdkjhk askdkasgd jshdkjsahdk",}
  ]

  return (
    <div className='titleMain z-0' >
    <div className='titleSub' >
    <div className='flex md:gap-5 h-auto titleExtra'>
  <div className=' titles' >
  <div className='titleIcon' > 
  <img src={ItSolutionImage} alt=''/> 
  </div>
  
  <div className='titleDesc'>
  <h1 className='titleHead'>Tech Solutions
  <FontAwesomeIcon className='ml-2 text-[#333333] md:hidden' icon={faArrowAltCircleRight}/>
  </h1>
  <p className='text-justify'> Design, develop, and maintain websites, apps 
  & integrate cloud solutions seamlessly  
  <FontAwesomeIcon className='ml-2 text-[#333333]' icon={faArrowAltCircleRight}/></p>
  
  </div>
  </div>
  <div className=' titles'>
<div className='titleIcon'> <img src={MarketingImage} className='Titleicon' alt=''/>  </div>
<div className='titleDesc'>
<h1 className='titleHead'>Branding & Marketing
<FontAwesomeIcon className='ml-2 text-[#333333] md:hidden' icon={faArrowAltCircleRight}/>
</h1>
<p className='text-justify'> Elevate brands, 
  promote businesses & manage digital presence with precision
  <FontAwesomeIcon className='ml-2 text-[#333333]' icon={faArrowAltCircleRight}/></p>
   
</div>
</div>

<div className=' titles'>
<div className='titleIcon'> <img src={graphicsImage} className='Titleicon' alt=''/> </div>
<div className='titleDesc'>
<h1 className='titleHead'>Graphics & Design
<FontAwesomeIcon className='ml-2 text-[#333333] md:hidden' icon={faArrowAltCircleRight}/>
</h1>
  <p className='text-justify'>
   Crafting logos, branding materials, 
  animations, & videos with artistic expertise
  <FontAwesomeIcon className='ml-2 text-[#333333]' icon={faArrowAltCircleRight}/>
  </p>
  
</div>
</div>
   
  
</div>
</div>
</div>
  )

};

export default ServiceTitles

/*

*/