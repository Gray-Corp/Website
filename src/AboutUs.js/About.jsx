import React from 'react'
import TopMenu from '../Mainpage/TopMenu'
import FooterMenu from '../Mainpage/FooterMenu'
import NameVisionMission from './NameVisionMission'
import './about.css'
import CompanyPhoto from './CompanyPhoto'
import Details from './Details'
import WhyWeMain from './WhyWeMain'
import Testing from '../Mainpage/Testing'
import BackPhoto from './BackPhoto'
import OverView from './OverView'
import WhyUs from './WhyUs'
import { Divider } from 'antd'
function About() {
  return (
    <div className='flex-col' style={{display:'flex',flexDirection:'column'}}>
      <div>
      <TopMenu/>
      <div className='h-9'></div>
      <CompanyPhoto/>
      </div>
      <div className='md:h-16'></div>
      <NameVisionMission/>
      <WhyUs/>
      <Details/>
      <div className='h-16'></div>
      <FooterMenu/>
    </div>
  )
}

export default About
