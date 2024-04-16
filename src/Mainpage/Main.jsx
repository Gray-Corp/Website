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


const Main = () => {
    
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
        <TopMenu/>
        <CompanyName/>
        <Products/>
        <ImageSlider/>
        <Technology/>
        <TrustedCompanies/>
        <Developing/>
        <ParalaxValues/>
       <FooterMenu/>
        
    </div>
  );
};
export default Main;