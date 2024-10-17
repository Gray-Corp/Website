import React from 'react'
import './Careers.css'
import TopMenu from '../Mainpage/TopMenu';
import FooterMenu from '../Mainpage/FooterMenu';
import WhyWeMain from '../AboutUs.js/WhyUs';
import Details from '../AboutUs.js/Details';
import CompanyName from '../Mainpage/CompanyName';
import JoinWithGc from './JoinWithGc';
import LifeAtGC from './LifeAtGC';
import OpenPositions from './OpenPositions';
import CareerModal from './CareerModal';

function CareersMain() {
  return (
    <div>
      <TopMenu/>
      <div className='h-9'></div>
      <JoinWithGc/>
      <WhyWeMain/>
      <div className='h-10'></div>
      <OpenPositions/>
      <div className='h-10'></div>
      <FooterMenu/>
    </div>
  )
}

export default CareersMain
