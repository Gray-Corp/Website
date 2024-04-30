import React from 'react'
import './Contents.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import girlLogo from '../imgs/Asset1.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {faArrowRightArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { FaArrowRight } from "react-icons/fa";


AOS.init();

const links = [
  {
    id:1,
    name:"OUR COMPANY",
  },
  {
    id:2,
    name:"OUR VALUES",
  },
  {
    id:3,
    name:"OUR TECHNOLOGIES",
  },
  {
    id:4,
    name:"OUR MILESTONES",
  },
]

function CompanyName() {
  return (
    <div className='companyNameAndDetails'>
    <div className='comNameAndDetailsSub'>
    <div className='slogan'>
    <h1> SOLUTIONS MADE SIMPLE </h1>
    <p className='text-[#999999] md:text-base mob:text-xs 
    font-normal'>
    Celebrate innovation with Gray Corp 
    - your premier IT partner
    </p>
    </div>
    <div className='contactButton'>
    <a href='/' className=''>
        <button className=''> Contact Now 
        </button>
        </a>
    </div>
    <div className='girlImg'>
    <img className='w-1/4' src={girlLogo} alt=''></img>
    </div>
    
    </div>
    </div>
  )
}

export default CompanyName
