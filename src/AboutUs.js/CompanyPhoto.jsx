import React from 'react'
import photo from '../imgs/office.png'
function CompanyPhoto() {
  return (
    <div style={{zIndex:'0'}} className='bg-gray-200 CompanyPhoto'>
      <img src={photo} className='h-full w-full object-cover' alt='' />
      
    
    </div>
  )
}

export default CompanyPhoto
