import React, { useState } from 'react'
import TopMenu from '../Mainpage/TopMenu'
import FooterMenu from '../Mainpage/FooterMenu'
import { FaCircle } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'
import ApplyJob from './ApplyJob';
import UploadButton from './UploadButton';

function PositionsRequirements() {
  
  const requirements = [
    {
      title:"Intern Software Engineer - (Flutter)", 
      description:[

      "Deep knowledge in any Programming language",
      "knowledge in Dart / Flutter will be an added advantage",
      "Basic understanding of web & mobile app development",
      "Good team player and have passion & willingness to adopt new technologies",
      "Good understanding of Git & Gitgub",

      ], 
      tasks:[
        "Develop components according to Figma specifications",
        "Assist senior engineers with software development tasks",
        "Learn and apply programming best practices",
        "Make reports & reviews",

      ],},
      {
        title:"Associate Software Engineer - (Flutter)", 
        description:[
        "Previous experience with web & mobile app development",
        "Experience with Dart / Flutter will be an added advantage",
        "Adequate knowledge in web & mobile app development",
        "Good logical thinking and can work independently or with minimum guidance"
            
        ], 
        tasks:[
        "Developing UIs as per Figma designs",
        "Integrate with Google products such as Firebase",
        "Web & Mobile application development & maintenance",
        "Database management",
      ],
    },
    {
      title:"Administrative Assistant", 
      description:[
      "High school diploma or equivalent",
      "Strong organizational and time management skills",
      "Excellent communication and interpersonal skills",
      "Ability to multitask and prioritize tasks effectively"
          
      ], 
      tasks:[
      "Manage office administrative tasks, including scheduling appointments, answering phones, and filing documents",
      "Coordinate meetings and events",
      "Handle customer inquiries and provide support",
      "Maintain office supplies and equipment",
    ],
  }
  ];

  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const positionIndex = params.get("position")
  const position = requirements[positionIndex]
  const applyPosition = position["title"]

  const [open,setOpen] = useState(false)

  const change = () => {
    setOpen(true)
  }

  return (
    <div className='flex flex-col'>
    <TopMenu/>
    <div className='h-24'>
     
    </div>
      <div className=' flex justify-center'>
      <div className='w-[150vh] flex flex-col gap-5 items-center justify-center'>
      <div className='w-3/4 flex flex-col items-center justify-center gap-3'>
        <div className='w-full'>
        <h1 className='font-semibold text-3xl'>{position.title}</h1>
        </div>
        <div className='h-4'></div>
        <div className='w-full'>
        <h1 className='font-semibold text-xl'>Duties & Responsibilities</h1>
        </div>
        <div className='w-full flex flex-col gap-2 justify-center'>
        
        {position.tasks.map((task,index)=>(
          <div className='flex gap-3' key={index}>
          <FaCircle className='font-normal text-xs w-1 mt-1'/>
          <h1 className='font-normal'>{task}</h1>
          </div>
        ))}
        </div>
        <div className='h-3'></div>
        <div className='w-full'><h1 className='font-semibold text-xl'>Requirements</h1></div>
        <div className='w-full flex flex-col gap-3 justify-center'>
        {position.description.map((description,index)=>(
          <div className='flex gap-3' key={index}>
          <FaCircle className='font-normal text-xs w-1 mt-1'/>
          <h1 className='font-normal'> {description}</h1>
          </div>
        ))}
        </div>
        <div className='h-7'></div>
       
        </div>
      </div>
      </div>
      <div className='h-24'>
      <ApplyJob applyPosition={applyPosition}/>
      </div>
      <FooterMenu/>
      
    </div>
  )
}

export default PositionsRequirements

/*
 {requirements.map((requirement,index) => (
        <div className='w-3/4 flex flex-col items-center justify-center gap-3' key={index}>
        <div className='w-full'><h1 className='font-bold text-4xl'>{requirement.title}</h1></div>
        
        <div className='w-full'><h1 className='font-semibold text-xl'>Duties & Responsibilities</h1></div>
        <div className='w-full flex flex-col gap-2 justify-center'>
        
        {requirement.tasks.map((task,index)=>(
          <div className='flex gap-3' key={index}>
          <FaCircle className='font-normal text-xs w-1 mt-1'/>
          <h1 className='font-normal'>{task}</h1>
          </div>
        ))}
        </div>
        <div className='w-full'><h1 className='font-semibold text-xl'>Requirements</h1></div>
        <div className='w-full flex flex-col gap-3 justify-center'>{requirement.description.map((description,index)=>(
          <div className='flex gap-2' key={index}>
          <FaCircle className='font-normal text-xs w-1 mt-1'/>
          <h1 className='font-normal'> {description}</h1>
          </div>
        ))}
*/