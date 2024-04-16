import React from 'react'
import backgroundImage from "../imgs/DPHOTO.jpg"
import './main.css'
const Technology = () => {
  return (
    <div className='TechMain h-[75vh] mt-5 flex justify-center items-center'>
      <div className='TechFlat bg-[#333333] md:h-[50vh] w-[70%] z-0 float-left absolute left-[20%] flex'>
      <div className='TechRound shadow-5xl border-[#666666] md:h-[65vh] z-10 w-[45%] 
      rounded-[50%] relative bottom-12 right-[10%]'  style={{ backgroundImage: `url(${backgroundImage})`, 
      }}>

      </div>
      <div className='TechDesc h-[50vh] md:w-7/12 relative md:right-12 flex flex-col 
      space-y-3 text-center justify-center md:p-2'>
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

