import React from 'react'
import Test from '../Test'
import backgroundImage from '../imgs/Apple.jpg'
import TopMenu from '../Mainpage/TopMenu'
import FooterMenu from '../Mainpage/FooterMenu'
import ServiceTitles from './ServiceTitles'

import './service.css'
import Services from './Services'
function ServiceMain() {
  return (
    <div className='flex flex-col space-y-1'>
      <TopMenu/>
      <div className='h-7'></div>
      <ServiceTitles/>
      <div className='h-[8vh]'></div>
      <FooterMenu/>
    </div>
  )
}

export default ServiceMain
