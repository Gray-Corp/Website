import React from 'react'
import CompanyPhoto from './CompanyPhoto'
import photo from '../imgs/Mission vision image.svg'
import backgroundImage from '../imgs/Apple.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease-in', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

function NameVisionMission() {
  return (
    <div className='w-full 
    flex mob:flex-col mob:gap-14 justify-center items-center mob:py-10  
    md:pl-7 mob:border-b-2'>
 
      <div className='md:w-1/3 mob:hidden' >
        <img src={photo} style={{width:'100%'}} alt=''/>
      </div>
      <div className='vision'>
        <div>
        <span>
        <h1 className='md:text-3xl mob:text-xl font-semibold text-[#333333]'> 
        OUR VISION 
        </h1>
        </span>
        <span>
           <h1 className='md:text-lg mob:text-base text-[#666666]'>
           BECOME GLOBAL TECH PIONEER
           </h1> 
        </span>
        </div>
        <div >
        <span>
        <h1 className='md:text-3xl mob:text-xl font-semibold text-[#333333]'> 
        OUR MISSION 
        </h1>
        </span>
        <span>
           <h1 className='md:text-lg mob:text-base text-[#666666]'>
           SIMPLIFYING THE DIGITAL LANDSCAPE
           </h1> 
        </span>
        </div>
      </div>
     
    </div>
  )
}

export default NameVisionMission
