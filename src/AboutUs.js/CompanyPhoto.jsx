import React from 'react'
import photo from '../imgs/office.png'
function CompanyPhoto() {
  return (
    <div style={{zIndex:'0' , backgroundImage: `url(${photo})`, 
   }} className='bg-gray-200 CompanyPhoto 
    md:h-screen bg-cover mob:bg-center md:bg-fixed'>
     
    </div>
  )
}

export default CompanyPhoto
