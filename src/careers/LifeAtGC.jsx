import React from 'react'
import asset1 from "../imgs/computer.png"
import asset2 from "../imgs/computer.png"
import asset3 from "../imgs/computer.png"
import asset4 from "../imgs/computer.png"
import asset5 from "../imgs/computer.jpg"
import asset6 from "../imgs/computer.jpg"
import asset7 from "../imgs/computer.jpg"
import asset8 from "../imgs/computer.jpg"
import asset9 from "../imgs/computer.jpg"

const imgList = [asset1, asset2, asset3, asset4]

function LifeAtGC() {
  return (
    <div className='LifeAtGcMain'>
    <div>
        <h1> Life @ GRAYCORP </h1>
    </div>
      <div className='LifeAtGcImgs'>
        {imgList.map((img,index) => (
           <div className='w-[60vh]'>
           <img key={index} src={img} alt=''></img>
           </div>
        ))}
      </div>
    </div>
  )
}

export default LifeAtGC
