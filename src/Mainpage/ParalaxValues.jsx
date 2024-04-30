import React from 'react'
import './Contents.css'
import backgroundImage from '../imgs/officeImage.png'

function ParalaxValues() {
  return (
    <div className='paraValues md:bg-fixed md:h-[100vh] md:p-5 mob:py-10 mob:h-auto flex 
    justify-end items-center z-0 mob:bg-center mob:bg-cover' 
    style={{ backgroundImage: `url(${backgroundImage})`,}}>

      <div className='paraVal md:h-[60vh] md:w-6/12 mob:w-full bg-white md:mr-[8%] 
      flex flex-col text-center items-center mob:py-10 md:opacity-80 mob:gap-3'>
        <div className='valDiv text-[10vh] font-semibold text-center text-[#333333] md:pt-4 md:mt-[5vh]'> 
        <h1> Values </h1> 
        </div>
        <div className='graycorpDiv text-xl font-semibold text-right md:w-[33vh] text-[#666666] mt-[-1vh] md:mr-2 mob:ml-40'> <p>GRAY CORP</p> </div>
      <div className='md:p-5 md:px-5 mob:py-5 mob:px-7'>
      <p className='md:text-[#333333] mob:text-[#999999] text-justify md:text-base mob:text-xs font-normal textDiv'>
      our core values are the bedrock of our operations. 
      Integrity, Innovation, Collaboration, Excellence, and Customer Satisfaction are ingrained in everything we do. 
      These principles drive us to deliver bespoke solutions, ensuring we exceed expectations and empower 
      our clients to thrive in an ever-evolving digital landscape.
        </p>
      </div>
      </div>
     
    </div>
  )
}

export default ParalaxValues
