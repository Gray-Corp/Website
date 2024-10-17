import React from 'react'
import careerLogo from '../imgs/career.svg'

function JoinWithGc() {
  return (
    <div className='JoinWithGcMainDiv'>
    <div className='JoinWithGcMainDivSubDiv'>
    <div className='slogan'>
    <h1>Innovation Meets Opportunity  </h1>
    <p className='text-[#999999] md:text-base mob:text-xs 
    font-normal'>
    Join with GC and build the Future 
    </p>
    </div>
    <div className='viewOpeningsButton'>
    <a href='/' className=''>
        <button className=''> View Openings 
        </button>
        </a>
    </div>
    <div className='careerLogo'>
    <img className='w-1/3' src={careerLogo} alt=''></img>
    </div>
    
    </div>
    </div>
  )
}

export default JoinWithGc
