import React from 'react';

import SVGfile from "./assets/admin.svg";
const Test = () => {
    return (
        <div className='h-96 border-2 flex'>
         <div className='w-1/2 h-full'>
         <img src={SVGfile} alt='' className='w-5/12'/> 
         </div> 
         <div className='w-1/2 h-full bg-[#cccccc]'>
            
         </div>   
        </div>
    );
};

export default Test;