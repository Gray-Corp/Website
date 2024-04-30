import { RocketFilled } from '@ant-design/icons';
import React from 'react';
import { BiShield } from 'react-icons/bi';
import { BsCupFill, BsRocket } from 'react-icons/bs';
import { FaRocket, FaShield, FaShieldHalved, FaTrophy } from 'react-icons/fa6';
import { GiChampions } from 'react-icons/gi';

const WhyUs = () => {
 
    return (
      
        <div className="py-14 flex justify-center"> 
          <div className='md:w-9/12 mob:w-full flex flex-col gap-3'>
          <div className=' flex justify-center'>
          <h1 className='md:text-6xl mob:text-2xl font-bold'>  WHY US </h1>
          </div>
          <div className='flex justify-center md:gap-5 mob:gap-2'>
             <div className='whuUsContainer py-4'>
            <div className='whyUsDescDiv'>
            <FaRocket className='w-[17%] h-[17%] '/>
            <h1>Superiority</h1>
            <ol>
              <li>Dedicated team</li>
              <li>Comprehensive services</li>
              <li>Flexibility and transparency</li>
            </ol>
            </div>
           </div>
           <div className='whuUsContainer py-4'>
      
            <div className='whyUsDescDiv'>
            <FaShieldHalved className='w-[17%] h-[17%] '/>
            <h1> Speed</h1>
            <ol>
              <li>Dedicated team</li>
              <li>Comprehensive services</li>
              <li>Flexibility and transparency</li>
            </ol>
            </div>
           </div>
           <div className='whuUsContainer py-4'>
         
            <div className='whyUsDescDiv '>
            <FaTrophy className='w-[17%] h-[17%] '/>
            <h1>Success</h1>
            <ol>
              <li>Dedicated team</li>
              <li>Comprehensive services</li>
              <li>Flexibility and transparency</li>
            </ol>
            </div>
           </div>
           </div>
          </div>
        </div>
    );
};

export default WhyUs;