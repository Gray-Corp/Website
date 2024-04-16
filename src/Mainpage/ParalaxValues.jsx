import React from 'react'
import './Contents.css'
import backgroundImage from '../imgs/officeImage.png'

function ParalaxValues() {
  return (
    <div className='paraValues bg-fixed h-[100vh] p-5 flex justify-end items-center z-0' style={{ backgroundImage: `url(${backgroundImage})`,
     }}>
      <div className='paraVal h-[60vh] w-6/12 bg-white mr-[8%] flex flex-col text-center items-center opacity-80'>
        <div className='valDiv text-[10vh] font-semibold text-center text-[#333333] pt-4 mt-[5vh]'> <h1> Values </h1> </div>
        <div className='graycorpDiv text-xl font-semibold text-right w-[33vh] text-[#666666] mt-[-1vh] mr-2'> <p>GRAY CORP</p> </div>
      <div className='p-5'>
      <p className='text-[#333333] text-justify text-md font-medium textDiv'>
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
