import React from 'react';
import Description from './Description';
import Test from './Test';
import TopMenu from '../Mainpage/TopMenu';
import FooterMenu from '../Mainpage/FooterMenu';

const ContactMain = () => {
    return (
        <div>
        <TopMenu/>
        <div className='h-24'></div>
        <Description/>
        
        <FooterMenu/>  
        </div>
    );
};

export default ContactMain;