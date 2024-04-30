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
  para:`At Gray Corp, we believe in building strong partnerships with our clients. 
  We take the time to understand your business goals and challenges, 
  tailoring our solutions to meet your specific needs. 
  We invite you to partner with us and experience the Gray Corp difference. 
  Let us help you transform your digital landscape and achieve your business objectives.`,
  icon:<FaUsersViewfinder/>
 
},
{
  head:"Partner with Us",
  sub:"Elevate Your Digital Presence", 
  para:`At Gray Corp, we believe in building strong partnerships with our clients. 
  We take the time to understand your business goals and challenges, 
  tailoring our solutions to meet your specific needs. 
  We invite you to partner with us and experience the Gray Corp difference. 
  Let us help you transform your digital landscape and achieve your business objectives.`,
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

/*
<div >
      <h1>
      Overview
      </h1>
        <p>
        Gray Corp: Your One-Stop IT Solutions Provider
        At Gray Corp, we are passionate about empowering businesses through innovative and user-friendly IT solutions. 
        We provide a comprehensive range of services, encompassing software development, digital marketing, branding, 
        and graphics design, all delivered with the utmost professionalism and a commitment to excellence.

        </p>
      </div>

    <div >

    <h1>
    Services: A Spectrum of Digital Expertise
        </h1>
        <p>
        
        We offer a diverse spectrum of IT services, catering to the unique needs of businesses of all sizes and industries. 
        Our core services include:
        Software Development: We design and develop custom software solutions that align with your specific 
                              business requirements, ensuring seamless integration and optimal performance.
        Digital Marketing: We craft comprehensive digital marketing strategies, 
                           leveraging cutting-edge tools and techniques to enhance 
                           your online presence and reach your target audience effectively.
        Branding and Graphics Design: We create compelling brand identities and visually 
                            appealing graphics that capture your brand's 
                            essence and resonate with your target market.

        </p>
    </div>
    <div >

    <h1>
    Our Approach: Professionalism and Systematization
        </h1>
        <p>
        We are committed to operating in a highly professional and systematic manner. 
        Our team of experienced and dedicated professionals follows well-defined processes, 
        ensuring timely project delivery and exceptional results.

        </p>
    </div>
    <div >

<h1>
Partner with Us: Elevate Your Digital Presence

    </h1>
    <p>
    At Gray Corp, we believe in building strong partnerships with our clients. 
    We take the time to understand your business goals and challenges, 
    tailoring our solutions to meet your specific needs. 
    We invite you to partner with us and experience the Gray Corp difference. 
    Let us help you transform your digital landscape and achieve your business objectives.

    </p>
</div>

*/