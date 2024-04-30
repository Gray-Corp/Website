import React from 'react'
import photo from './imgs/Maintenance.png'
import image1 from './imgs/product/Asset 1.svg'
import image2 from './imgs/product/Asset 2.svg'
import image3 from './imgs/product/Asset 3.svg'
import image4 from './imgs/product/Asset 4.svg'
import { useState } from 'react'
import { useEffect } from 'react'
import { BiHomeCircle } from 'react-icons/bi'
import { HomeFilled } from '@ant-design/icons'


function Pending() {
  const [currentImage, setCurrentImage] = useState(image3);

  useEffect(() => {
    // Set interval to switch images every 5 seconds
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === image3 ? image4 : image3));
    }, 750);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures effect runs only once

  return (
    <div className='flex flex-col justify-center items-center pt-20'>
      <div className='md:w-9/12 mob:w-full flex  mob:flex-col 
      mob:items-center mob:gap-8 justify-between'>
      <div className='w-1/4 flex flex-col justify-center items-center'>
      <img src={image2} alt=''/>
      <img src={image1} alt=''/>
      </div>
      <div className='md:w-1/2 mob:w-[85%]'>
      <img src={currentImage} alt=''/>
      </div>
      </div>
     <div className='w-full py-10 flex justify-center items-center'>
     <a href='/' 
     className='text-[#333333] hover:text-[#666666]
     py-5 md:text-4xl mob:text-2xl'>
               
        <HomeFilled/>  
      
        </a></div>
    </div>
  )
}

export default Pending
