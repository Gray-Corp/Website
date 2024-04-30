import React, { useEffect } from 'react';
import {Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './service.css'
import graphicsImage from "../imgs/Asset 38.svg";
import ItSolutionImage from "../imgs/SVG/IT solutions.svg";
import MarketingImage from "../imgs/SVG/Marketing.svg";
import photo1 from '../imgs/PHOTO.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, } from '@fortawesome/free-solid-svg-icons';
import Services from './Services';
import { useState } from 'react';
import img1 from '../imgs/SVG/itServices.svg'
import img2 from '../imgs/SVG/marketingServices.svg'
import img3 from '../imgs/SVG/serviceImg.svg'
import img4 from "../imgs/SVG/itServicesBlack.svg"
import img5 from "../imgs/Asset 36.svg"
import img6 from "../imgs/SVG/marketingServicesBlack.svg"
import ItServices from './ItServices'
import { Button, Modal,Divider } from 'antd';
import { Md18UpRating } from 'react-icons/md'
import { DiCode, DiJava } from 'react-icons/di'
import { BiCart } from 'react-icons/bi';
import { ItSolutionServices,MarketingServices,ConsultingSupporting } from './ServiceItemModal';

const MyList = [
  {
  heading: "Tech Solutions", 
  para: `Our comprehensive services encompass the full spectrum of digital innovation.
  From the inception of your project to its maintenance and evolution,
  we specialize in designing, developing, and maintaining websites and mobile applications. 
  Our expertise extends to seamlessly integrating cloud solutions, 
  ensuring optimal performance and scalability for your digital ventures. 
  Whether it's creating captivating user interfaces, 
  robust backend systems, or providing ongoing website and app maintenance, 
  our team is dedicated to delivering excellence at every stage of your technological journey.`, 

  image:`${img1}`
},
  {
  heading: "Tech Solutions", 
  para: `Our comprehensive services encompass the full spectrum of digital innovation.
  From the inception of your project to its maintenance and evolution,
  we specialize in designing, developing, and maintaining websites and mobile applications. 
  Our expertise extends to seamlessly integrating cloud solutions, 
  ensuring optimal performance and scalability for your digital ventures. 
  Whether it's creating captivating user interfaces, 
  robust backend systems, or providing ongoing website and app maintenance, 
  our team is dedicated to delivering excellence at every stage of your technological journey.`, 

  image:`${img2}`
},
  {
  heading: "Tech Solutions", 
  para: `Our comprehensive services encompass the full spectrum of digital innovation.
  From the inception of your project to its maintenance and evolution,
  we specialize in designing, developing, and maintaining websites and mobile applications. 
  Our expertise extends to seamlessly integrating cloud solutions, 
  ensuring optimal performance and scalability for your digital ventures. 
  Whether it's creating captivating user interfaces, 
  robust backend systems, or providing ongoing website and app maintenance, 
  our team is dedicated to delivering excellence at every stage of your technological journey.`, 

  image:`${img3}`
}
]


const ServiceTitles = () => {  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const okFunction = () => {
    setIsModalOpen(false);
  };
  const cancelFunction = () => {
    setIsModalOpen(false);
  };
 
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

  const scrollGraphics = () => {
    scroll.scrollMore(1400);
     
  };

  const scrollGraphic = () => {
    scroll.scrollMore(800);
     
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
    <div className='titleMain items-center' >
    <div className='titleSub mob:w-full' >
    <div className='titleExtra '>
    
  <div className='titles' > 
  <div className='titleIcon'> <img src={ItSolutionImage} alt=''/> </div>
  <div className='titleDesc'>
  <h1 className='titleHead'>Tech Solutions
  <FontAwesomeIcon className='ml-2 text-[#333333] md:hidden' icon={faArrowAltCircleRight}/>
  </h1>
  <p className='text-justify'> Design, develop, and maintain websites, apps 
  & integrate cloud solutions seamlessly  
  <FontAwesomeIcon className='ml-2 text-[#333333]' icon={faArrowAltCircleRight}/></p>
  
  </div>
  </div>

  <div className=' titles' onClick={scrollGraphic}>
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

<div className=' titles' onClick={scrollGraphics}>
<div className='titleIcon'> <img src={graphicsImage} className='Titleicon' alt=''/> </div>
<div className='titleDesc'>
<h1 className='titleHead'>Consulting & Support
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
<div className='ServicesMain'>

<div className='ourServices'>
  <div className='flex mob:flex-col mob:justify-center mob:items-center'>
  <div className='serviceMenu'>
  <span className='flex mob:mt-[-2.5vh] mob:space-x-2'>
  <img src={img4} className='md:h-12 md:w-12 mob:h-10 mob:w-10' alt=''/>
  <h1 className='md:mt-1'>
  Tech Solutions
  </h1>
  </span>
  <p>
  Our comprehensive services encompass the full spectrum of digital innovation. 
  From the inception of your project to its maintenance and evolution, 
  we specialize in designing, developing, and maintaining websites and mobile applications. 
  Our expertise extends to seamlessly integrating cloud solutions, 
  ensuring optimal performance and scalability for your digital ventures. 
  Whether it's creating captivating user interfaces, 
  robust backend systems, or providing ongoing website and app maintenance, 
  our team is dedicated to delivering excellence at every stage of your technological journey.
  </p>
  </div>
  <img src={img1} className='serviceImage' alt=''/>
  </div>
  <div className='serviceItems'>
  <ItSolutionServices/>
</div>
</div>

<div className='ourServices' id='link2'>
<div className='flex mob:flex-col mob:justify-center mob:items-center'>
<img src={img2} className='serviceImage' alt=''/>
<div className='serviceMenu mob:mt-[-2vh]'> 
<span className='flex mob:space-x-2'>
  <img src={img6} className='md:h-12 md:w-12 mob:h-10 mob:w-10' alt=''/>
  <h1 className='mt-1'>
  Branding & Marketing 
  </h1>
  </span>

<p>
At our core, we specialize in crafting compelling narratives that breathe life into brands. 
Through meticulous strategy and creative execution, 
we not only elevate brands but also ensure they resonate deeply with their target audience. 
Our comprehensive approach encompasses every aspect of digital marketing, 
from strategic planning to execution across various platforms. 
We leverage the power of digital channels to promote businesses effectively, 
engaging with audiences in meaningful ways that drive results. 
</p>

</div>
</div>
<div className='serviceItems'>
<MarketingServices/>
</div>

</div>

<div className='ourServices'>
<div className='flex mob:flex-col mob:justify-center mob:items-center'>
  <div className='serviceMenu'>
  <span className='flex mob:mt-[-2.5vh] mob:space-x-2'>
  <img src={img5} className='md:h-12 md:w-12 mob:h-10 mob:w-10' alt=''/>
  <h1 className='mt-1'>
  Consulting & Support
  </h1>
  </span>
  <p>
Dive into a world where creativity meets functionality. 
Our team specializes in crafting visually stunning elements that not only captivate but also communicate your brand's essence effectively. 
Whether it's the creation of a memorable logo that serves as the cornerstone of your identity or the development of comprehensive branding materials that establish a cohesive visual language, 
we ensure every aspect reflects your brand's uniqueness. 
Harnessing the power of animation, we bring your ideas to life with dynamic storytelling that resonates with your audience. 
</p>
  </div>
  <img src={img3} className='serviceImage' alt=''/>
  </div>
  <div className='serviceItems'>
  <ConsultingSupporting/>
</div>
</div>

</div>
</div>
  )

};

export default ServiceTitles

/*

*/