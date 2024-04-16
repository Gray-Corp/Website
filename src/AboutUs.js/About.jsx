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
function About() {
  return (
    <div className='flex-column' style={{display:'flex',flexDirection:'column',rowGap:'1vh'}}>
      <div>
      <TopMenu/>
      <div className='h-9'></div>
      <CompanyPhoto/>
    <OverView/>
      </div>
      
      <NameVisionMission/>
      
      <WhyWeMain/>
      <Details/>
      <FooterMenu/>
    </div>
  )
}

export default About
