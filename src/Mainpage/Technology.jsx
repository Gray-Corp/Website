import React from 'react'
import backgroundImage from "../imgs/Asset 1.svg"
import './main.css'
const Technology = () => {
  return (
    <div className='TechMain md:h-[75vh] md:mt-10 mob:pt-10 flex justify-center items-center'>
      <div className='TechFlat bg-[#666666] md:h-[50vh] w-[70%] z-0 
      float-left absolute flex'>
      <div className='TechRound shadow-6xl border-[#666666] md:h-[65vh] z-10 w-[45%] 
       relative md:bottom-12 mob:bottom-[1.25vh] right-[10%]'>
      <img src={backgroundImage} alt='' />
      </div>
      <div className='TechDesc md:w-7/12 relative md:right-12 flex flex-col 
      space-y-4 text-center justify-center md:p-2'>
        <h1 className='text-5xl font-semibold text-white'>Technology</h1>
        <p className='text-justify md:p-5 text-white'>
        Discover the cutting-edge technologies, 
        explore the latest trends, and stay ahead of the curve in web development, 
        mobile applications, databases, and more.
         
        </p>
      </div>
      </div>
     
    </div>
  )
}

export default Technology

