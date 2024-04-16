import React from 'react'
import CompanyPhoto from './CompanyPhoto'
import photo from '../imgs/computer.jpg'
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
    <div className=' h-7 w-full nvmMain'>

      <div className='names'>
        <img src={photo} style={{height:'100%',width:'100%'}}/>
      </div>
      <div className='vision' style={{width:'25%'}}>
        <div  >
        <span style={{fontSize:'100%', fontWeight:'1000'}}>
        <h1> OUR VISION </h1>
        </span>
        <span style={{fontSize:'100%', fontWeight:'500'}}>
           <h1>
           ECOME GLOBAL TECH PIONEER
           </h1> 
        </span>
        </div>
        <div >
        <span style={{fontSize:'100%', fontWeight:'1000'}}>
        <h1> OUR MISSION </h1>
        </span>
        <span style={{fontSize:'100%', fontWeight:'500'}}>
           <h1>
           SIMPLIFYING THE DIGITAL LANDSCAPE
           </h1> 
        </span>
        </div>
      </div>
   
    </div>
  )
}

export default NameVisionMission
