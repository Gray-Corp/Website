import React from 'react'
import backgroundImage from '../imgs/Apple.jpg'
function BackPhoto() {
  return (
    <div className='h-[35vh] backimgapple' 
    style={{ backgroundImage: `url(${backgroundImage})`, backgroundAttachment: 'fixed' }}>
      
    </div>
  )
}

export default BackPhoto
