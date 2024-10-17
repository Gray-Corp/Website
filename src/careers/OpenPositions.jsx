import React from 'react'
import { FaBaseball } from 'react-icons/fa6'
import CareerModal from './CareerModal'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaCircle } from 'react-icons/fa'


function OpenPositions() {
  const openings = [
    "Intern Software Engineer - (Flutter)", 
    "Associate Software Engineer - (Flutter)",
    "Administrative Assistant"
  ]
 
  return (
    <div className='OpenPositionsMain'>
    <h1>Currently we have vacancies for following positions</h1>
      <div className='OpenPositionsSub'>
      {openings.map((position, index) => (
  <div
    className={`OpenPositionsIndividualDiv ${index !== openings.length - 1 ? 'border-b' : ''}`}
    key={index}
  >
    <a href={`/careers/openings?position=${index}`} target="_blank" rel="noreferrer" className="w-full">
      <div className="flex gap-3 items-center justify-between w-full">
        <h1 className="flex py-2">{position}</h1>
        <FaArrowAltCircleRight className="w-4" />
      </div>
    </a>
  </div>
))}
      <div className='OpenPositionsIndividualDiv border-none' > 
      <CareerModal/>
      </div>
     
      </div>
    </div>
  )
}

export default OpenPositions
