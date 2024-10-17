import React, { useState } from 'react';
import './main.css'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import TopMenu from './TopMenu';
import Testing from './Testing';
import FooterMenu from './FooterMenu';
import Developing from './Developing';
import CompanyName from './CompanyName';
import ImageSlider from './ImageSlider';
import ParalaxValues from './ParalaxValues';
import Practice from './Practice';
import Technology from './Technology';
import TrustedCompanies from './MyTechs';
import Products from './Products';
import Details from "../AboutUs.js/Details";
import WhyUs from '../AboutUs.js/WhyUs';

const Main = () => {
    
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
        <TopMenu/>
        <div className='h-10'></div>
        <CompanyName/> 
        <Developing/>
        <div className='md:h-14 mob:h-9 bg-[#333333]'></div>
        <Products/>
        <div className='md:h-14 mob:h-9 bg-[#333333]'></div>
        <Technology/>
        <div className='md:h-14 mob:h-10'></div>
        <ImageSlider/>
        <TrustedCompanies/>
        <div className='mob:h-10 md:h-14' ></div>
        <ParalaxValues/>
        <div className='h-10'></div>
       <Details/>
       <div className='h-10'></div>
       <FooterMenu/>
        
    </div>
  );
};
export default Main;