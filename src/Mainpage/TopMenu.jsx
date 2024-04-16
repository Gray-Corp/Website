import React, { useState } from 'react';
import logo from '../imgs/Logo White.svg';

function TopMenu() {
  const [isOpen, setOpen] = useState(false);
  const [isOpenIndex, setIsOpenIndex] = useState(null);
  let [isClicked,setIsCLicked] = useState(false); 

  const handleToggleSubLinks = (index) => {
    setIsOpenIndex(isOpenIndex === index ? null : index);
    setIsCLicked = true; 
  };

  const links = [
    { name: "Home", link: '/', icon: 'home-outline',
    subLinks: [
      { name: "Sub-Link 1", link: '#' },
      { name: "Sub-Link 2", link: '#' },
      { name: "Sub-Link 3", link: '#' },
    ], },
    { name: "Products", link: '/products', icon: 'call-outline',
    subLinks: [
      { name: "Sub-Link 1", link: '#' },
      { name: "Sub-Link 2", link: '#' },
      { name: "Sub-Link 3", link: '#' },
    ], },
    { name: "Services", link: '/services', icon: 'images-outline' },
    { name: "About", link: '/aboutus', icon: 'images-outline' },
    { name: "Contact", link: '/contactus', icon: 'images-outline' },
    
  ];

  return (
    <div className='shadow-xl bg-[#333333] w-full top-0 left-0 content-center min-width: 1000px z-20 fixed' >

      <div className='md:flex justify-between bg-[#333333] py-1 md:px-10 px-7 w-10/12 TopSub' id='contents' style={{ margin: 'auto'}}>

        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Inter] text-[#f5f5f7] TopLogoDesign'>
          <span className='text-xs mr-3 pt-1'>
           <img src={logo} className='myLogo' alt=''/>
          </span>
         
        </div>

        <div className='text-3xl absolute right-8 top-0 cursor-pointer text-[#f5f5f7] md:hidden' onClick={() => setOpen(!isOpen)}>
          <ion-icon name={isOpen ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static 
        bg-[#333333] md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 
        transition-all duration-500 ease-in ${isOpen ? 'top-10' : 'top-[-500px]'}`}>
          {links.map((link, index) => (
            <li key={index} className='md:ml-8 text-xs text-[#f2f2f2] md:my-0 my-7'>
              <a href={link.link} className='hover:text-[#999999] duration-200' onClick={() => handleToggleSubLinks(index)}>
                {link.name}
              </a>
              
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
}

export default TopMenu;

/*
{link.subLinks && isOpenIndex === index && (
        <ul className={`ml-4 w-4/5 height-12 transition-all-0.2s duration-500 ease-in ${isClicked ? 'top-10' : 'top-[-390px]'} subLinks`} >
          {link.subLinks.map((subLink, subIndex) => (
            <li key={subIndex} className="text-sm text-gray-300 hover:text-green-500 ">
              <a href={subLink.link}>{subLink.name}</a>
            </li>
          ))}
        </ul>
      )}


      
*/