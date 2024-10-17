import { Divider } from 'antd'
import React from 'react'
import { FaDigitalTachograph } from 'react-icons/fa'
import { GrPersonalComputer } from "react-icons/gr";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { IoIosCloudDone } from "react-icons/io";

import { FaTachographDigital,FaFileCode,FaMobileScreen,FaUsersViewfinder } from 'react-icons/fa6'
import { FcAbout, FcAddDatabase, FcAdvertising, FcApproval, FcBiotech, FcCamcorder, FcCustomerSupport, FcDataBackup, FcDataSheet, FcPhoneAndroid, FcServices } from 'react-icons/fc'
import { FiCodesandbox } from 'react-icons/fi'
import { GrTechnology } from 'react-icons/gr'

const detailList =[
  {
  head:"Overview",
  sub:"Your One-Stop IT Solutions Provider", 
  para:`Gray Corp: 
  At Gray Corp, we are passionate about empowering businesses through innovative and user-friendly IT solutions. 
  We provide a comprehensive range of services, encompassing software development, digital marketing, branding, 
  and graphics design, all delivered with the utmost professionalism and a commitment to excellence.`,
  icon:<GrPersonalComputer/>
  

},
{
  head:"Services",
  sub:"A Spectrum of Digital Expertise", 
  para:`At Gray Corp, we believe in building strong partnerships with our clients. 
  We take the time to understand your business goals and challenges, 
  tailoring our solutions to meet your specific needs. 
  We invite you to partner with us and experience the Gray Corp difference. 
  Let us help you transform your digital landscape and achieve your business objectives business objectives.`,
  icon:<MdOutlineMiscellaneousServices/>,
  
},
{
  head:"Our Approach",
  sub:"Professionalism and Systematization", 
  para:`At Gray Corp, 
  our approach is rooted in professionalism and a structured methodology. 
  We meticulously analyze your business objectives and obstacles to devise solutions that are precisely aligned with your requirements. 
  Our commitment to a systematic process ensures that we deliver consistent, 
  high-quality results. Partner with us to experience a streamlined and effective approach to transforming your digital presence.`,
  icon:<FaUsersViewfinder/>
 
},
{
  head:"Partner with Us",
  sub:"Elevate Your Digital Presence", 
  para:`At Gray Corp, 
  we are dedicated to enhancing your digital footprint. 
  We prioritize understanding your unique goals and challenges, 
  allowing us to create customized solutions that align with your vision. 
  Join forces with us to leverage our expertise and innovation, 
  transforming your digital landscape and propelling your business to new heights.`,
  icon:<IoIosCloudDone/>,
},

]

function Details() {
  return (
    
    <div className='details' >
      <div className=' detailsSub mob:w-full'>
      
        {detailList.map((detail,index)=>(
          <div className="" key={index}>
         <div className='detailsHeadSubHead'> 
         <span className='flex flex-col gap-1'>
         <h3 className=''>{detail.head}</h3>
         <h1>{detail.sub}</h1>
         </span> 
         <span className='text-4xl'>
         {detail.icon}
         </span> 
         </div>
          <p>{detail.para}</p>
          <Divider className={`border-2 md:${index === 2 || index === 3 ? 'hidden':''}`}/>
          </div>
        
        ))} 
      
      
      </div>
      
    </div>
  )
}

export default Details
