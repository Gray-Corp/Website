import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle, faCircleDot, faRocket, faShieldHalved, faTrophy } from '@fortawesome/free-solid-svg-icons'
import {Table} from 'antd'

function WhyWeMain() {
  return (
    <div className='WhyWeMain' >
    <div id='WhyWeCaption'><h1 className=''>WHY US</h1></div>
      <div >
      
        <div>
          <div id='WhyWeLogo'><FontAwesomeIcon icon={faRocket} /></div>
          <div id='WhyWeHead'>
          <h1>Acceleration</h1>
          <h3>through:-</h3></div>
          <div id='WhyWeOl'>
            <ol>
              <li>Dedicated team</li>
              <li>Comprehensive services</li>
              <li>Flexibility and transparency</li>
            </ol>
          </div>
        </div>
        <div>
        <div id='WhyWeLogo'><FontAwesomeIcon icon={faShieldHalved} /></div>
          <div id='WhyWeHead'><h1>Superiority</h1>
          <h3>through:-</h3></div>
          <div id='WhyWeOl'>
            <ol>
              <li>Dedicated team</li>
              <li>Comprehensive services</li>
              <li>Flexibility and transparency</li>
            </ol>
          </div>
        </div>
        <div>
        <div id='WhyWeLogo'><FontAwesomeIcon icon={faTrophy} /></div>
          <div id='WhyWeHead'><h1>Success</h1>
          <h3>through:-</h3></div>
          <div id='WhyWeOl'>
            <ol>
              <li>Dedicated team</li>
              <li>Comprehensive services</li>
              <li>Flexibility and transparency</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyWeMain
